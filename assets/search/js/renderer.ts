import { default as params } from '@params'
import i18n from './i18n'
import Spinner from './spinner'

export default class Renderer {
    private initialized = false

    private lang

    private page = 1

    private paginate = 20

    private query = ''

    private results

    private time = 0

    private metaClasses = 'search-result-meta'

    constructor(
        private container: string | HTMLElement,
        private statistics: string | HTMLElement,
        private spinner: Spinner
    ) {
        // Make sure that the paginate is at least 20, so that load more event will be able to trigger.
        this.paginate = Math.max(this.paginate, params.paginate)
        if (params.expand_results_meta) {
            this.metaClasses += ' show'
        }
    }

    private getContainer(): HTMLElement {
        if (!(this.container instanceof HTMLElement)) {
            this.container = document.querySelector(this.container) as HTMLElement
        }

        return this.container
    }

    private getStatistics(): HTMLElement {
        if (!(this.statistics instanceof HTMLElement)) {
            this.statistics = document.querySelector(this.statistics) as HTMLElement
        }

        return this.statistics
    }

    private getLang(): string {
        if (!this.lang) {
            this.lang = document.documentElement.getAttribute('lang') ?? params.defaultLang
        }

        return this.lang
    }

    clean() {
        this.getContainer().innerHTML = ''
    }

    icon(page) {
        return page.kind in params.icons ? params.icons[page.kind] : params.icons.page
    }

    taxonomies(page) {
        let v = ''

        for (let i in page.taxonomies) {
            v += `<span class="search-result-taxonomy">${page.taxonomies[i]}</span> `
        }

        return v
    }

    date(page) {
        if (page.date <= 0) {
            return ''
        }

        return (new Date(page.date * 1000)).toLocaleDateString(this.getLang(), { dateStyle: 'long' })
    }

    title(result) {
        return this.highlight(result.item.title, result.matches.filter((match) => match.key === 'title'))
    }

    desc(result) {
        if (!result.item.summary || result.item.summary === '') {
            return ''
        }

        return '<div class="search-result-desc">'
            + this.highlight(result.item.summary, result.matches.filter((match) => match.key === 'summary'))
            + '</div>'
    }

    highlight(s: string, matches) {
        // return the original string if no matches found.
        if (matches.length === 0) {
            return s
        }

        let ret = ''
        let start = 0
        for (let i in matches) {
            const match = matches[i]
            for (let j in match.indices) {
                // Ignore the matched characters that have been highlighted already.
                // Since Fuse.js may return duplicate pieces of matches, such as [[0,4], [2,4]].
                const idxStart = Math.max(start, match.indices[j][0])
                const idxEnd = match.indices[j][1] + 1
                if (idxStart >= idxEnd) {
                    continue
                }
                ret += `${s.substring(start, idxStart)}<mark>${s.substring(idxStart, idxEnd)}</mark>`
                start = idxEnd
            }
        }
        // append the rest of characters of s.
        ret += s.substring(start)

        return ret
    }

    render(query, results, time) {
        this.init()
        this.clean()
        // back to top when re-rendering results.
        this.getContainer().parentElement.scrollTop = 0
        this.page = 1
        this.results = results
        this.time = time
        this.query = query
        this.renderStat()
        this.renderPage()
    }

    private init() {
        if (this.initialized) {
            return
        }

        this.initialized = true
        const container = this.getContainer()
        const wrapper = container.parentElement
        wrapper?.addEventListener('scroll', () => {
            if (wrapper.scrollHeight - wrapper.scrollTop === wrapper.clientHeight) {
                this.loadMore()
            }
        })

        const observe = (mutations, observer) => {
            for (let mutation of mutations) {
                if (mutation.type === 'childList') {
                    for (let node of mutation.addedNodes) {
                        const action = node.querySelector('.search-result-action-meta')
                        action?.addEventListener('click', (e) => {
                            this.toggleMeta(node.querySelector('.search-result-meta'))
                            e.preventDefault()
                        })
                    }
                }
            }
        };

        const observer = new MutationObserver(observe);
        observer.observe(container, { childList: true });
    }

    private toggleMeta(meta: HTMLElement) {
        if (meta.classList.contains('show')) {
            meta.classList.remove('show')
            return
        }

        meta.classList.add('show')
    }

    private renderStat() {
        const stat = this.getStatistics()
        if (this.query === '') {
            stat.innerHTML = ''
            return
        }
        stat.innerHTML = i18n.translate('search_stat', {
            count: this.results.length,
            total: `<span class="search-stat-results">${this.results.length}</span>`,
            time: this.prettifyTime(),
        })
    }

    prettifyTime() {
        if (this.time >= 100) {
            return parseFloat((this.time / 1000).toFixed(2)) + 's'
        }

        return this.time + 'ms'
    }

    score(score) {
        return ((1 - score) * 100).toFixed(0) + '%';
    }

    loadMore() {
        if (this.page * this.paginate > this.results.length) {
            return
        }

        this.spinner.show()
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.renderPage(++this.page))
            }, 1)
        }).finally(() => {
            this.spinner.hide()
        })

    }

    private renderPage(page = 1) {
        const max = page * this.paginate
        const min = max - this.paginate
        let results = ''
        for (let i = min; i < this.results.length && i < max; i++) {
            const result = this.results[i]
            results += `<a title="${result.item.title}" href="${result.item.url}" class="search-result">
  <div class="search-result-icon">${this.icon(result.item)}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.title(result)}</div>
    ${this.desc(result)}
  </div>
  <div class="${this.metaClasses}">
    <span class="search-result-score">${this.score(result.score)}</span>
    <span class="search-result-lang">${result.item.lang}</span>
    <span class="search-result-date">${this.date(result.item)}</span>
    ${this.taxonomies(result.item)}
  </div>
  <div class="search-result-actions">
    <div class="search-result-action search-result-action-meta">${params.icons['meta']}</div>
  </div>
</a>`
            results += this.renderHeadings(result)
        }
        this.getContainer().insertAdjacentHTML('beforeend', results)
    }

    renderHeadings(result) {
        if (!result.item.headings || result.item.headings.length == 0) {
            return ''
        }

        const matches = result.matches.filter((match) => match.key === 'headings.title')
        if (matches.length == 0) {
            return ''
        }

        let headings = ''

        for (let i in result.item.headings) {
            const heading = result.item.headings[i]
            for (let j in matches) {
                if (matches[j].value !== heading.title) {
                    continue
                }

                headings += `<a title="${heading.title} - ${result.item.title}" href="${result.item.url}${heading.anchor}" class="search-result search-result-heading">
  <div class="search-result-icon search-result-heading-icon">${params.icons['heading']}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.highlight(heading.title, [matches[j]])}</div>
    <div class="search-result-desc">${result.item.title}</div>
  </div>
</a>`
            }
        }

        return headings
    }
}
