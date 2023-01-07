(() => {
    document.addEventListener('click', (e) => {
        console.log(e.target.closest('.search-result-action'))
        if (!e.target || !(e.target instanceof HTMLElement)) {
            return
        }

        const action = e.target.closest('.search-result-action')
        if (action && action.classList.contains('search-result-action-meta')) {
            e.preventDefault()
            const meta = action.closest('.search-result')?.querySelector('.search-result-meta')
            if (!meta) {
                return
            }

            if (meta.classList.contains('show')) {
                meta.classList.remove('show')
            } else {
                meta.classList.add('show')
            }
            return
        }
    })
})()
