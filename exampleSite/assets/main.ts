(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.theme-toggle').addEventListener('click', () => {
            if (document.documentElement.hasAttribute('data-bs-theme')) {
                document.documentElement.removeAttribute('data-bs-theme')
                localStorage.removeItem('theme')
            } else {
                document.documentElement.setAttribute('data-bs-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            }
        })
    })
})()
