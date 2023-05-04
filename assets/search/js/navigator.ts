import keyboard from "./keyboard"

class Navigator {
    private modal() {
        return document.querySelector('.search-modal-container.active')
    }

    private current(): null | HTMLElement {
        const modal = this.modal()
        return modal ? 
          modal.querySelector('.search-result[aria-selected="true"]') : 
          document.querySelector('.search-container .search-result[aria-selected="true"]')
    }

    private go(dir) {
        const current = this.current()
        let target
        if (current) {
            current.ariaSelected = 'false'
            target = dir === 'prev' ? current.previousElementSibling : current.nextElementSibling
        }
        target = target ?? this.first()

        target.focus()
        target.ariaSelected = 'true'
    }

    private first() {
        const modal = this.modal()
        return modal ? modal.querySelector('.search-result') : document.querySelector('.search-container .search-result')
    }

    prev() {
        this.go('prev')
    }

    next() {
        this.go('next')
    }
}

(() => {
    'use strict'

    document.addEventListener('DOMContentLoaded', () => {
        const navigator = new Navigator()

        keyboard.attach(['ArrowUp'], () => {
            navigator.prev()
        })

        keyboard.attach(['ArrowDown'], () => {
            navigator.next()
        })
    })
})()
