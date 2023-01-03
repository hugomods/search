document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-toggle').addEventListener('click', () => {
        if (document.documentElement.hasAttribute('data-theme')) {
            document.documentElement.removeAttribute('data-theme')
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
        }
    })
})
