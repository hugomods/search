import { default as params } from '@params'
import Form from './form'
import Spinner from './spinner'
import Renderer from './renderer'

export default class Search {
    private container: HTMLElement

    private form: Form

    constructor() {
        const container = document.querySelector('.search-container') as HTMLElement
        console.log(container)
        if (!container) {
            return
        }

        this.container = container

        const spinner = new Spinner('.search-container .search-spinner')
        const renderer = new Renderer('.search-container .search-results', '.search-container .search-stat', spinner)
        this.form = new Form(spinner, renderer)
        this.form.modal = false

        this.render()
    }

    render() {
        const html = `<div class="search-header">${this.form.render()}</div>
<div class="search-body"><div class="search-results"></div></div>`
        this.container.insertAdjacentHTML('beforeend', html)
        this.form.init()
    }
}

(() => {
    'use strict'

    document.addEventListener('DOMContentLoaded', () => {
        new Search()
    })
})()