(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', (e: Event) => {
            const toggle = e.target.closest('.search-dropdown-toggle')
            if (toggle) {
                const dropdown = toggle.closest('.search-dropdown')
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show')
                } else {
                    dropdown.classList.add('show')
                }
                e.preventDefault()
                return
            }

            const item = e.target.closest('.search-dropdown-item')
            if (item) {
                const dropdown = item.closest('.search-dropdown')
                const multiple = dropdown.hasAttribute('multiple')
                const value = item.getAttribute('data-value')

                if (multiple) {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active')
                    } else {
                        item.classList.add('active')
                    }
                    if (dropdown.querySelector('.search-dropdown-item.active')) {
                        dropdown.classList.add('active')
                    } else {
                        dropdown.classList.remove('active')
                    }
                } else {
                    if (value) {
                        dropdown.setAttribute('data-value', value)
                        dropdown.classList.add('active')
                    } else {
                        dropdown.removeAttribute('data-value')
                        dropdown.classList.remove('active')
                    }
                    dropdown.querySelector('.search-dropdown-label').innerText = item.innerText
    
                    dropdown.querySelectorAll('.search-dropdown-item').forEach((lang) => {
                        lang.classList.remove('active')
                    })
                    item.classList.add('active')
                }

                // fire a change event.
                const e = new CustomEvent('change', {
                    detail: {
                        value: value,
                    }
                })
                dropdown.dispatchEvent(e)
            }

            // close opened dropdown when losing focus.
            document.querySelectorAll('.search-dropdown.show').forEach((dropdown) => {
                dropdown.classList.remove('show')
            })
        })
    })
})()
