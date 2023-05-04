import { default as params } from '@params'
import i18n from './i18n'
import keyboard from './keyboard'
import Form from './form'
import Spinner from './spinner'
import Renderer from './renderer'
import { Navigate, Select, Shortcut, Shortcuts } from './shortcuts'

const searchShortcut: Shortcut = {
    kbds: [params.shortcut_search],
    action: i18n.translate('to_search'),
}

const closeShortcut: Shortcut = {
    kbds: [params.shortcut_close],
    action: i18n.translate('to_close'),
}

export default class Modal {
    private wrapper: HTMLElement

    private container: HTMLElement

    private form: Form

    private shortcuts: Shortcuts

    constructor() {
        const spinner = new Spinner('.search-modal .search-spinner')
        const renderer = new Renderer('.search-modal .search-results', '.search-modal .search-stat', spinner)
        this.form = new Form(spinner, renderer)
        this.shortcuts = new Shortcuts([
            closeShortcut,
            searchShortcut,
            Navigate,
            Select,
        ])
    }

    init() {
        this.wrapper = document.querySelector(params.modal_container) as HTMLElement

        this.render()

        params.lazy_loading === false && this.form.init()

        // close the modal when losing focus.
        this.container.addEventListener('click', (e) => {
            if (!e.target || !(e.target instanceof HTMLElement)) {
                return
            }

            if (!e.target.closest('.search-modal')) {
                this.hide()
                e.preventDefault()
            }

            if (e.target.closest('.search-result')) {
                // hide current modal after selecting the search result, since the browser won't
                // redirect if the selected search result is the same as the current page.
                this.hide()
            }
        })

        // open modal when clicking toggle button.
        document.querySelectorAll(params.modal_toggle_selector).forEach((toggle) => {
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

        if (params.shortcut_close.length > 0) {
            keyboard.attach(params.shortcut_close, () => {
                this.hide()
            })
        }

        if (params.shortcut_search.length > 0) {
            keyboard.attach(params.shortcut_search, (e) => {
                e.preventDefault()
                this.show()
            })
        }
    }

    render() {
        this.container = document.createElement('div')
        this.container.className = 'search-modal-container'
        this.container.innerHTML = `<div class="search-modal">
  <div class="search-modal-header">${this.form.render()}</div>
  <div class="search-modal-body"><div class="search-results"></div></div>
  ${this.renderFooter()}
</div>`
        this.wrapper.appendChild(this.container)
    }

    renderFooter(): string {
        return `<div class="search-modal-footer">${this.shortcuts.render()}</div>`
    }

    hide() {
        document.body.classList.remove('search-modal-active')
        this.container.classList.remove('active')
    }

    show() {
        this.form.init()

        document.body.classList.add('search-modal-active')
        this.container.classList.add('active')
        this.form.focus()
    }
}

(() => {
    'use strict'

    document.addEventListener('DOMContentLoaded', () => {
        if (params.modal_container !== '') {
            (new Modal()).init()
        }
    })
})()
