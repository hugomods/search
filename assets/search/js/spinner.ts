export default class Spinner {
    constructor(private ele: string | HTMLElement) {
    }

    getElement(): HTMLElement {
        if (!(this.ele instanceof HTMLElement)) {
            this.ele = document.querySelector(this.ele) as HTMLElement
        }

        return this.ele
    }

    private searchIcon: HTMLElement

    getSearchIcon(): HTMLElement {
        if (!this.searchIcon) {
            this.searchIcon = this.getElement().previousElementSibling as HTMLElement
        }

        return this.searchIcon
    }

    hide() {
        // delay the action to make the spinner more obvious.
        setTimeout(() => {
            this.getSearchIcon().classList.remove('disabled')
            this.getElement().classList.add('disabled')
        }, 200)

    }

    show() {
        this.getSearchIcon().classList.add('disabled')
        this.getElement().classList.remove('disabled')
    }
}
