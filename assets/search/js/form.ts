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

        for (let i in params.langs) {
            const item = params.langs[i]
            let className = ''
            if (item.lang === lang) {
                className = ' active'
                label = item.name
            }
            options += `<li class="search-dropdown-item${className}" data-value="${item.lang}">${item.name}</li>`
        }

        return `<div class="search-dropdown search-panel-tool search-filter-lang${lang ? ' active' : ''}" data-value="${lang}">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false">
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

        return `<div class="search-dropdown search-panel-tool search-sorting">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false">
    ${params.icons['sort']} <span class="search-dropdown-label">${defaultSort}</span>
  </button>
  <ul class="search-dropdown-menu">
    <li class="search-dropdown-item active" data-value="">${defaultSort}</li>
    <li class="search-dropdown-item" data-value="date_asc">${i18n.translate('sort_by_date_asc')}</li>
    <li class="search-dropdown-item" data-value="date_desc">${i18n.translate('sort_by_date_desc')}</li>
  </ul>
</div>`
    }

    // Initialize the form after rendering.
    init() {
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

        engine.init().then(() => {
            this.input.removeAttribute('disabled')
        }).catch((err) => {
            console.error(err)
            this.input.value = i18n.translate('index_fails')
        }).then(() => {
            if (!this.modal) {
                this.fillInputByURL()
                this.input.focus()
                this.submit()
            }
        }).finally(() => {
            this.spinner.hide()
        })

        if (!this.modal) {
            window.addEventListener('popstate', (e) => {
                this.popstate = true
                this.fillInputByURL()
                this.submit()
            })
        }
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
        engine.search(query, sorting, lang).then(({ results, time }) => {
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
}

