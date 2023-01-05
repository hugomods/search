import { default as params } from '@params'

export default class Spinner {
    private element: HTMLElement

    private search: HTMLDivElement

    constructor(ele, search) {
        this.element = document.querySelector(ele)

        this.search = document.querySelector(search)
    }

    hide() {
        // delay the action to make the spinner more obvious.
        setTimeout(() => {
            this.element.classList.add('disabled')
            this.search.classList.remove('disabled')
        }, 300)

    }

    show() {
        this.search.classList.add('disabled')
        this.element.classList.remove('disabled')
    }
}
