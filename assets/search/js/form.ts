import { default as params } from '@params'
import { translate } from './i18n'
import Renderer from './renderer'
import engine from './engine'
import Spinner from './spinner'
import { default as Historiographer } from './historiographer'

export default class Form {
    // Original page title.
    private pageTitle

    private popstate = false

    private ele: HTMLFormElement

    private input: HTMLInputElement

    // Search request timeout ID.
    private timeoutId = 0

    // How many milliseconds must elapse before considering the autocomplete experience stalled.
    private stallThreshold: number

    private language: HTMLElement

    private sorting: HTMLElement

    private years: HTMLElement

    modal = true

    constructor(private spinner: Spinner, private renderer: Renderer) {
        this.stallThreshold = params.stall_threshold
    }

    render() {
        return `<form class="search-form">
  <div class="search-input-group-wrapper">
    <div class="search-input-group">
        <span class="search-input-icon">${params.icons['search']}</span>
        <span class="search-spinner">${params.icons['spinner']}</span>
        <input type="search" name="q" class="search-input search-form-control" placeholder="${translate('input_placeholder')}" autocomplete="off" disabled/>
        <button class="search-reset-button disabled" type="reset">${params.icons['reset']}</button>
    </div>
    <button class="search-modal-close" type="button">${translate('cancel')}</button>
  </div>
  <div class="search-form-meta">
    <div class="search-panel"></div>
    <div class="search-stat"></div>
  </div>
</form>`
    }

    private renderLanguage(): string {
        if (Object.keys(engine.langs).length < 2) {
            return ''
        }

        const lang = document.documentElement.getAttribute('lang') ?? ''

        let label = translate('all')
        let options = `<li class="search-dropdown-item${lang ? '' : ' active'}" data-value="">${label}</li>`

        for (const langCode in engine.langs) {
            const langName = engine.langs[langCode]
            let className = ''
            if (langCode === lang) {
                className = ' active'
                label = langName
            }
            options += `<li class="search-dropdown-item${className}" data-value="${langCode}">${langName}</li>`
        }

        return `<div class="search-dropdown search-panel-action search-filter-lang${lang ? ' active' : ''}" data-value="${lang}">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="Languages">
    ${params.icons['lang']}
    <span class="search-dropdown-label">${label}</span>
  </button>
  <div class="search-dropdown-body">
    <ul class="search-dropdown-menu">${options}</ul>
  </div>
</div>`
    }

    private renderSorting(): string {
        if (engine.langs.length < 2) {
            return ''
        }

        const defaultSort = translate('sort_by_default')

        return `<div class="search-dropdown search-panel-action search-sorting">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="Sorting">
    ${params.icons['sort']} <span class="search-dropdown-label">${defaultSort}</span>
  </button>
  <div class="search-dropdown-body">
    <ul class="search-dropdown-menu">
        <li class="search-dropdown-item active" data-value="">${defaultSort}</li>
        <li class="search-dropdown-item" data-value="date_asc">${translate('sort_by_date_asc')}</li>
        <li class="search-dropdown-item" data-value="date_desc">${translate('sort_by_date_desc')}</li>
    </ul>
  </div>
</div>`
    }

    private renderYears(): string {
        if (engine.years.length === 0) {
            return ''
        }

        let items = ''
        for (const year of engine.years) {
            items += `<li class="search-dropdown-item" data-value="${year}">${year}</li>`
        }

        const label = translate('years')
        return `<div class="search-dropdown search-panel-action search-years" multiple>
        <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="${label}">
          ${params.icons['year']} <span class="search-dropdown-label">${label}</span>
        </button>
        <div class="search-dropdown-body">
          <button class="search-dropdown-reset">${translate('reset')}</button>
          <ul class="search-dropdown-menu">${items}</ul>
        </div>
      </div>`
    }

    private renderTaxonomies(): string {
        let v = ''
        for (const name in engine.taxonomies) {
            v += this.renderTaxonomy(name, engine.taxonomies[name])
        }
        return v
    }

    private renderTaxonomy(name: string, items: Array<string>): string {
        let v = ''
        for (const name of items) {
            v += `<li class="search-dropdown-item" data-value="${name}">${name}</li>`
        }

        const label = translate("taxonomy_" + name, null, name)
        return `<div class="search-dropdown search-panel-action search-taxonomies search-taxonomies-${name}" multiple>
        <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="${label}">
          ${params.icons['taxonomies']} <span class="search-dropdown-label">${label}</span>
        </button>
        <div class="search-dropdown-body">
            <input class="search-dropdown-input">
            <button class="search-dropdown-reset">${translate('reset')}</button>
            <ul class="search-dropdown-menu">${v}</ul>
        </div>
      </div>`
    }

    private initialized = false

    // Initialize the form after rendering.
    init() {
        if (this.initialized) {
            return
        }
        this.initialized = true
        this.pageTitle = document.title

        this.ele = document.querySelector('.search-form') as HTMLFormElement
        this.ele.addEventListener('submit', (e) => {
            e.preventDefault()
            this.submit()
        })

        this.input = this.ele.querySelector('.search-input') as HTMLInputElement
        this.input.addEventListener('keyup', () => {
            // clear previous delayed search request if users still typing.
            clearTimeout(this.timeoutId)
            // set up a new delayed search request.
            this.timeoutId = setTimeout(() => {
                this.submit()
            }, this.stallThreshold)
        })
        this.input.addEventListener('search', () => {
            this.submit()
        })
        document.addEventListener('search:input:change', (e) => {
            this.input.value = e.detail.value
            this.submit()
        })
        
        this.ele.addEventListener('reset', () => {
            const lang = document.documentElement.getAttribute('lang') ?? ''
            this.language?.querySelectorAll('.search-dropdown-item').forEach((ele) => {
                if (ele.getAttribute('data-value') !== lang) {
                    ele.classList.remove('active')
                } else {
                    this.language.classList.add('active')
                    this.language.setAttribute('data-value', lang)
                    this.language.querySelector('.search-dropdown-label').innerHTML = ele.innerHTML
                    ele.classList.add('active')
                }
            })
            for (const name of ['years', 'taxonomies']) {
                this.ele.querySelectorAll(`.search-${name}.active`).forEach((ele) => {
                    ele.querySelectorAll('.search-dropdown-item.active').forEach((item) => {
                        item.classList.remove('active')
                    })
                    ele.classList.remove('active')
                })
            }
            setTimeout(() => {
                this.submit()
            }, 1)
        })

        this.spinner.show()
        engine.init().then(() => {
            this.renderPanel()
        }).then(() => {
            this.input.removeAttribute('disabled')
        }).catch((err) => {
            this.input.value = translate('index_fails')
            throw err
        }).then(() => {
            if (!this.modal) {
                this.fillInputByURL()
                this.submit()
            }
        }).finally(() => {
            this.focus()
            this.spinner.hide()
        })

        if (!this.modal) {
            window.addEventListener('popstate', () => {
                this.popstate = true
                this.fillInputByURL()
                this.submit()
            })
        }
    }

    private renderPanel() {
        const panel = this.ele.querySelector('.search-panel') as HTMLElement
        panel.innerHTML = `${this.renderLanguage()}
${this.renderSorting()}
${this.renderYears()}
${this.renderTaxonomies()}
<button class="search-panel-action search-expand-toggle${params.expand_results_meta ? ' active' : ''}" title="Expand">
    <span class="search-panel-action-icon">${params.icons['expand']}</span>
    <span class="search-panel-action-label">${translate('expand')}</span>
</button>`

        this.language = this.ele.querySelector('.search-filter-lang') as HTMLElement
        this.language?.addEventListener('change', () => {
            this.submit()
        })

        this.sorting = this.ele.querySelector('.search-sorting') as HTMLElement
        this.sorting.addEventListener('change', () => {
            this.submit()
        })

        this.years = this.ele.querySelector('.search-years') as HTMLElement
        this.years?.addEventListener('change', () => {
            this.submit()
        })

        this.ele.querySelectorAll('.search-taxonomies').forEach((el) => {
            el.addEventListener('change', () => {
                this.submit()
            })
        })

        const expand = this.ele.querySelector('.search-expand-toggle')
        expand?.addEventListener('click', (e) => {
            if (expand.classList.contains('active')) {
                expand.classList.remove('active')
            } else {
                expand.classList.add('active')
            }
            this.renderer.expand()
            e.preventDefault()
        })
    }

    private fillInputByURL() {
        const params = new URLSearchParams(location.search)
        const q = params.get('q')
        if (q) {
            this.input.value = q.trim()
        }
    }

    private showResetBtn() {
        this.ele.querySelector('button[type="reset"]')?.classList.remove('disabled')
    }

    private hideResetBtn() {
        this.ele.querySelector('button[type="reset"]')?.classList.add('disabled')
    }

    private submit() {
        this.input.disabled = true
        const query = this.getQuery()
        this.updatePage(query)

        const sorting = this.getSorting()
        const lang = this.getLanguage()
        const years = this.getYears()
        const taxonomies = this.getTaxonomies()

        if (query === '' && Object.values(taxonomies).filter((item) => item.length > 0).length == 0) {
            this.input.disabled = false
            this.hideResetBtn()
            this.renderer.clean()
            this.renderer.renderHistories()
            return
        }

        this.showResetBtn()
        this.spinner.show()
        engine.search(query, sorting, lang, years, taxonomies).then(({ results, time }) => {
            this.renderer.render(query, results, time)
        }).finally(() => {
            if (params.histories) {
                Historiographer.save(query)
            }
            this.spinner.hide()
            this.input.disabled = false
            this.focus()
        })
    }

    // Update the page's URL and title when performing a search on single page.
    private updatePage(query) {
        if (this.modal || this.popstate) {
            return
        }

        this.popstate = false
        const title = (query ? `${query} - ` : '') + this.pageTitle
        const url = `${window.location.pathname}?q=${encodeURIComponent(query)}`
        window.history.pushState(null, title, url)
        document.title = title // history.pushState's title was ignored.
    }

    focus() {
        this.input.focus()
    }

    setQuery(q: string) {
        this.input.value = q
    }

    getQuery(): string {
        return this.input.value.trim()
    }

    getLanguage(): string {
        return this.language ? this.language.getAttribute('data-value') ?? '' : ''
    }

    getSorting(): string {
        return this.sorting.getAttribute('data-value') ?? ''
    }

    getYears(): Array<string> {
        const v: Array<string> = []
        this.years?.querySelectorAll('.search-dropdown-item.active').forEach((item) => {
            v.push(item.getAttribute('data-value') ?? '')
        })
        return v
    }

    getTaxonomies(): Record<string, Array<string>> {
        const v = {}

        for (const taxonomy in engine.taxonomies) {
            const terms: Array<string> = []
            document.querySelectorAll(`.search-taxonomies-${taxonomy} .search-dropdown-item.active`).forEach((item) => {
                terms.push(item.getAttribute('data-value') ?? '')
            })
            v[taxonomy] = terms
        }

        return v
    }
}

