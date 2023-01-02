export default class Spinner {
    private element: HTMLElement

    constructor(ele) {
        this.element = document.querySelector(ele)
    }

    hide() {
        this.element.classList.add('disabled')
    }

    show() {
        this.element.classList.remove('disabled')
    }
}
