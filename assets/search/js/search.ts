import Form from './form'
import Spinner from './spinner'
import Renderer from './renderer'
import { Navigate, Select, Shortcuts } from './shortcuts'

export default class Search {
    private container: HTMLElement

    private form: Form

    private shortcuts: Shortcuts

    private renderer: Renderer

    constructor() {
        const container = document.querySelector('.search-container') as HTMLElement
        if (!container) {
            return
        }

        this.container = container

        const spinner = new Spinner('.search-container .search-spinner')
        this.renderer = new Renderer('.search-container .search-results', '.search-container .search-stat', spinner)
        this.form = new Form(spinner, this.renderer)
        this.form.modal = false

        this.shortcuts = new Shortcuts([Navigate, Select])

        this.render()
    }

    render() {
        const html = `<div class="search-header">${this.form.render()}</div>
<div class="search-body"><div class="search-results"></div></div>
<div class="search-footer">${this.shortcuts.render()}</div>`
        this.container.insertAdjacentHTML('beforeend', html)
        this.form.init()
        this.renderer.renderHistories()
    }
}
