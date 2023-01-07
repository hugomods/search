export default class Spinner {
    constructor(private ele: string | HTMLElement) {
    }

    getElement(): HTMLElement {
        if (!(this.ele instanceof HTMLElement)) {
            this.ele = document.querySelector(this.ele) as HTMLElement
        }

        return this.ele
    }

    hide() {
        // delay the action to make the spinner more obvious.
        setTimeout(() => {
            this.getElement().classList.add('disabled')
        }, 200)

    }

    show() {
        this.getElement().classList.remove('disabled')
    }
}
