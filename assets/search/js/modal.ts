import { default as params } from '@params'
import i18n from './i18n'
import Spinner from './spinner'
import Renderer from './renderer'
import Engine from './engine'
import Keyboard from './keyborard'
import Navigator from './navigator'

export default class Modal {
    private container: HTMLElement

    private spinner: Spinner

    private engine: Engine

    private form: HTMLFormElement

    private input: HTMLInputElement

    private filterLang: HTMLSelectElement

    // How many milliseconds must elapse before considering the autocomplete experience stalled.
    private stallThreshold = 300

    private renderer: Renderer

    private keyboard: Keyboard

    private navigator: Navigator

    // Search request timeout ID.
    private timeoutId = 0

    constructor() {
        this.stallThreshold = params.stall_threshold

        this.init()
    }

    init() {
        this.render()

        this.initModal()

        this.spinner = new Spinner('.search-spinner', '.search-input-icon')

        this.initForm()

        this.initEngine()

        this.initKeyboard()

        this.renderer = new Renderer('.search-results', '.search-stat')

        this.initNavigator()
    }

    render() {
        this.container = document.createElement('div')
        this.container.className = 'search-modal-container'
        this.container.innerHTML = `
<div class="search-modal">
  <div class="search-modal-header">
    ${this.renderForm()}
  </div>
  <div class="search-modal-body">
    <div class="search-results"></div>
  </div>
  ${this.renderFooter()}
</div>`
        document.body.appendChild(this.container)
    }

    renderForm(): string {
        return `
<form class="search-form">
  <div class="search-input-group">
    <span class="search-input-icon disabled">${params.icons['search']}</span>
    <span class="search-spinner">${params.icons['spinner']}</span>
    <input type="search" class="search-input search-form-control" placeholder="${i18n.translate('input_placeholder')}" disabled/>
    <button class="search-modal-close" type="button">${i18n.translate('cancel')}</button>
  </div>
  <div class="search-form-meta">
    ${this.renderFilters()}
    <div class="search-stat"></div>
  </div>
</form>
`.trim()
    }

    renderFilters(): string {
        if (params.langs.length < 2) {
            return ''
        }

        let s = `<div class="search-filters">
<select class="search-filter search-filter-lang search-form-control">
  <option value="">${i18n.translate('languages')}</option>`
        for (let i in params.langs) {
            s += `<option value="${params.langs[i].lang}">${params.langs[i].name}</option>`
        }
        return s + '</select></div>'
    }

    renderFooter(): string {
        let s = '<div class="search-modal-footer"><div class="search-shortcuts">'

        const names = ['close', 'search']
        for (let i in names) {
            const shortcut = params['shortcut_' + names[i]]
            if (shortcut.length > 0) {
                s += '<span class="search-shortcut">'
                for (let j in shortcut) {
                    s += `<span class="search-shortcut-kbd-wrapper"><kbd class="search-shortcut-kbd">${shortcut[j]}</kbd></span>`
                }
                s += `<span class="search-shortcut-action">${i18n.translate('to_' + names[i])}</span></span>`
            }
        }

        return s + `
  <span class="search-shortcut">
    <span class="search-shortcut-kbd-wrapper">
      <kbd class="search-shortcut-kbd">↑</kbd>
      <kbd class="search-shortcut-kbd">↓</kbd>
    </span>
    <span class="search-shortcut-action">${i18n.translate('to_navigate')}</span>
  </span>
  <span class="search-shortcut">
    <span class="search-shortcut-kbd-wrapper">
      <kbd class="search-shortcut-kbd">⏎</kbd>
    </span>
    <span class="search-shortcut-action">${i18n.translate('to_select')}</span>
  </span></div></div>`.trim()
    }

    hide() {
        document.body.classList.remove('search-modal-active')
        this.container.classList.remove('active')
    }

    show() {
        document.body.classList.add('search-modal-active')
        this.container.classList.add('active')
        this.input.focus()
    }

    initModal() {
        // close the modal when losing focus.
        this.container.addEventListener('click', (e) => {
            if (!e.target.closest('.search-modal')) {
                this.hide()
                e.preventDefault()
            }

            const action = e.target.closest('.search-result-action')
            if (action && action.classList.contains('search-result-action-meta')) {
                e.preventDefault()
                const meta = action.closest('.search-result').querySelector('.search-result-meta')
                if (meta.classList.contains('show')) {
                    meta.classList.remove('show')
                } else {
                    meta.classList.add('show')
                }
            } else if (e.target.closest('.search-result')) {
                // hide current modal after selecting the search result, since the browser won't
                // redirect if the selected search result is the same as the current page.
                this.hide()
            }
        })

        // open modal when clicking toggle button.
        document.querySelectorAll('.search-modal-toggle').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                this.show()
            })
        })

        // close modal when clicking close button
        this.container.querySelectorAll('.search-modal-close').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                this.hide()
            })
        })

        this.container.querySelectorAll('.search-modal-body').forEach((body) => {
            body.addEventListener('scroll', () => {
                if (body.scrollHeight - body.scrollTop === body.clientHeight) {
                    this.loadMore()
                }
            })
        })
    }

    initForm() {
        this.form = this.container.querySelector('.search-form') as HTMLFormElement
        this.form.addEventListener('submit', (e) => {
            this.search()
            e.preventDefault()
        })

        this.input = this.container.querySelector('.search-input') as HTMLInputElement
        this.input.addEventListener('keyup', () => {
            // clear previous delayed search request if users still typing.
            clearTimeout(this.timeoutId)
            // set up a new delayed search request.
            this.timeoutId = setTimeout(() => {
                this.search()
            }, this.stallThreshold)
        })
        this.input.addEventListener('search', () => {
            this.search()
        })

        this.filterLang = this.container.querySelector('select.search-filter-lang') as HTMLSelectElement
        if (this.filterLang) {
            this.filterLang.addEventListener('change', () => {
                this.search()
            })
        }
    }

    initEngine = () => {
        const promises = new Array<Promise<any>>
        for (const i in params.indices) {
            const promise = fetch(params.indices[i])
                .then((resp) => resp.json())
            promises.push(promise)
        }

        Promise.all(promises)
            .then((resp) => {
                let pages = resp[0]
                for (let i = 1; i < resp.length; i++) {
                    pages = pages.concat(resp[i])
                }

                this.engine = new Engine(pages)
            })
            .then(() => {
                this.input.removeAttribute('disabled')
            }).catch((err) => {
                this.input.value = i18n.translate('index_fails')
                console.error(err)
            }).finally(() => {
                this.spinner.hide()
            })
    }

    search() {
        const query = this.input.value.trim()
        if (query === '') {
            this.renderer.render(query, [], 0)
            return
        }

        this.spinner.show()
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.engine.search(query, this.filterLang ? this.filterLang.value : ''))
            }, 1)
        })
        const start = (new Date()).getTime()
        promise.then((results) => {
            this.renderer.render(query, results, (new Date()).getTime() - start)
        }).finally(() => {
            this.spinner.hide()
        })
    }

    loadMore() {
        this.spinner.show()
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.renderer.loadMore())
            }, 1)
        })
        promise.finally(() => {
            this.spinner.hide()
        })
    }

    initKeyboard() {
        this.keyboard = new Keyboard()

        if (params.shortcut_close.length > 0) {
            this.keyboard.attach(params.shortcut_close, () => {
                this.hide()
            })
        }

        if (params.shortcut_search.length > 0) {
            this.keyboard.attach(params.shortcut_search, () => {
                this.show()
            })
        }
    }

    initNavigator() {
        this.navigator = new Navigator()

        this.keyboard.attach(['ArrowUp'], () => {
            this.navigator.prev()
        })

        this.keyboard.attach(['ArrowDown'], () => {
            this.navigator.next()
        })
    }
}
