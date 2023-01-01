const modals = {}

export default class Modal {
    private element;
    private input;

    constructor(ele) {
        this.element = ele instanceof HTMLElement ? ele : document.querySelector(ele)
        this.input = this.element.querySelector('.search-input')
    }

    hide() {
        document.body.classList.remove('search-modal-active')
        this.element.classList.remove('active')
    }

    show() {
        document.body.classList.add('search-modal-active')
        this.element.classList.add('active')
        this.input.focus()
    }

    static getOrCreate(ele): Modal {
        if (!(ele in modals)) {
            modals[ele] = new Modal(ele)
        }

        return modals[ele]
    }
}
