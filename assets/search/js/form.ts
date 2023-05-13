import { default as params } from '@params'
import i18n from './i18n'
import Renderer from './renderer'
import engine from './engine'
import Spinner from './spinner'

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
  <div class="search-input-group">
    <span class="search-input-icon">${params.icons['search']}</span>
    <span class="search-spinner">${params.icons['spinner']}</span>
    <input type="search" class="search-input search-form-control" placeholder="${i18n.translate('input_placeholder')}" disabled/>
    <button class="search-modal-close" type="button">${i18n.translate('cancel')}</button>
  </div>
  <div class="search-form-meta">
    <div class="search-panel">
      ${this.renderLanguage()}
      ${this.renderSorting()}
      ${this.renderYears()}
      ${this.renderTaxonomies()}
      <button class="search-panel-action search-expand-toggle${params.expand_results_meta ? ' active' : ''}" title="Expand">
        <span class="search-panel-action-icon">${params.icons['expand']}</span>
        <span class="search-panel-action-label">${i18n.translate('expand')}</span>
      </button>
    </div>
    <div class="search-stat"></div>
  </div>
</form>`
    }

    private renderLanguage(): string {
        if (params.langs.length < 2) {
            return ''
        }

        const lang = document.documentElement.getAttribute('lang') ?? ''

        let label = i18n.translate('all')
        let options = `<li class="search-dropdown-item${lang ? '' : ' active'}" data-value="">${label}</li>`

        for (const i in params.langs) {
            const item = params.langs[i]
            let className = ''
            if (item.lang === lang) {
                className = ' active'
                label = item.name
            }
            options += `<li class="search-dropdown-item${className}" data-value="${item.lang}">${item.name}</li>`
        }

        return `<div class="search-dropdown search-panel-action search-filter-lang${lang ? ' active' : ''}" data-value="${lang}">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="Languages">
    ${params.icons['lang']}
    <span class="search-dropdown-label">${label}</span>
  </button>
  <ul class="search-dropdown-menu">${options}</ul>
</div>`
    }

    private renderSorting(): string {
        if (params.langs.length < 2) {
            return ''
        }

        const defaultSort = i18n.translate('sort_by_default')

        return `<div class="search-dropdown search-panel-action search-sorting">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="Sorting">
    ${params.icons['sort']} <span class="search-dropdown-label">${defaultSort}</span>
  </button>
  <ul class="search-dropdown-menu">
    <li class="search-dropdown-item active" data-value="">${defaultSort}</li>
    <li class="search-dropdown-item" data-value="date_asc">${i18n.translate('sort_by_date_asc')}</li>
    <li class="search-dropdown-item" data-value="date_desc">${i18n.translate('sort_by_date_desc')}</li>
  </ul>
</div>`
    }

    private renderYears(): string {
        if (params.years.length === 0) {
            return ''
        }

        let items = ''
        for (const year of params.years) {
            items += `<li class="search-dropdown-item" data-value="${year}">${year}</li>`
        }

        const label = i18n.translate('years')
        return `<div class="search-dropdown search-panel-action search-years" multiple>
        <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="${label}">
          ${params.icons['year']} <span class="search-dropdown-label">${label}</span>
        </button>
        <ul class="search-dropdown-menu">${items}</ul>
      </div>`
    }

    private renderTaxonomies(): string {
        let v = ''
        for (const name in params.taxonomies) {
            v += this.renderTaxonomy(name, params.taxonomies[name])
        }
        return v
    }

    private renderTaxonomy(name: string, items: Array<string>): string {
        let v = ''
        for (const name of items) {
            v += `<li class="search-dropdown-item" data-value="${name}">${name}</li>`
        }

        const label = i18n.translate("taxonomy_" + name, null, name)
        return `<div class="search-dropdown search-panel-action search-taxonomies search-taxonomies-${name}" multiple>
        <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="${label}">
          ${params.icons['taxonomies']} <span class="search-dropdown-label">${label}</span>
        </button>
        <ul class="search-dropdown-menu">${v}</ul>
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

        this.language = this.ele.querySelector('.search-filter-lang') as HTMLElement
        this.language.addEventListener('change', () => {
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

        engine.init().then(() => {
            this.input.removeAttribute('disabled')
        }).catch((err) => {
            this.input.value = i18n.translate('index_fails')
            throw new Error(err)
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

    private submit() {
        const query = this.getQuery()
        this.updatePage(query)
        if (query === '') {
            this.renderer.render(query, [], 0)
            return
        }

        this.spinner.show()
        const sorting = this.getSorting()
        const lang = this.getLanguage()
        const years = this.getYears()
        const taxonomies = this.getTaxonomies()
        engine.search(query, sorting, lang, years, taxonomies).then(({ results, time }) => {
            this.renderer.render(query, results, time)
        }).finally(() => {
            this.spinner.hide()
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

        for (const taxonomy in params.taxonomies) {
            const terms: Array<string> = []
            document.querySelectorAll(`.search-taxonomies-${taxonomy} .search-dropdown-item.active`).forEach((item) => {
                terms.push(item.getAttribute('data-value') ?? '')
            })
            v[taxonomy] = terms
        }

        return v
    }
}

