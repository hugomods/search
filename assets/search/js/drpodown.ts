(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', (e) => {
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

            // close opened dropdown when losing focus.
            document.querySelectorAll('.search-dropdown.show').forEach((dropdown) => {
                dropdown.classList.remove('show')
            })
        })
    })
})()
