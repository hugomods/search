export default class Navigator {
    current() {
        return document.querySelector('.search-result.active')
    }

    active(result: Element | null, dir) {
        if (!result) {
            return
        }
        dir === 'prev' && result?.nextElementSibling?.classList.remove('active')
        dir === 'next' && result?.previousElementSibling?.classList.remove('active')
        result.focus()
        result.classList.add('active')
    }

    first() {
        return document.querySelector('.search-result')
    }

    prev() {
        const current = this.current()
        this.active(current ? current.previousElementSibling : this.first(), 'prev')
    }

    next() {
        const current = this.current()
        this.active(current ? current.nextElementSibling : this.first(), 'next')
    }
}
