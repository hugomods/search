import { default as params } from '@params'

export default class Renderer {
    private container

    private stat

    private page = 1

    private paginate = 20

    private results

    private time

    constructor(container, stat) {
        this.container = document.querySelector(container)
        this.stat = document.querySelector(stat)
        // Make sure that the paginate is at least 20, so that load more event will be able to trigger.
        this.paginate = Math.max(this.paginate, params.paginate)
    }

    clean() {
        this.container.innerHTML = ''
    }

    icon(page) {
        return page.kind in params.icons ? params.icons[page.kind] : params.icons.page
    }

    // TODO: display the taxonomies, UI design is need.
    taxonomies(page) {
        let v = ''

        for (let i in page.taxonomies) {
            v += `<span class="search-result-taxonomy">${page.taxonomies[i]}</span> `
        }

        return v
    }

    date(page) {
        // TODO: localized date.
        if (page.date <= 0) {
            return ''
        }

        return (new Date(page.date * 1000)).toLocaleDateString('en-US')
    }

    title(result) {
        return this.highlight(result.item.title, 'title', result.matches)
    }

    desc(result) {
        return this.highlight(result.item.summary, 'summary', result.matches)
    }

    highlight(s: string, key: string, matches) {
        matches = matches.filter((match) => match.key === key)
        // return the original string if no matches found.
        if (matches.length === 0) {
            return s
        }

        let ret = ''
        let start = 0
        for (let i in matches) {
            const match = matches[i]
            for (let j in match.indices) {
                const idxStart = match.indices[j][0]
                const idxEnd = match.indices[j][1] + 1
                ret += `${s.substring(start, idxStart)}<mark>${s.substring(idxStart, idxEnd)}</mark>`
                start = idxEnd
            }
        }
        // append the rest of characters of s.
        ret += s.substring(start)

        return ret
    }

    render(results, time) {
        this.clean()
        // Back to top when re-rendering results.
        this.container.closest('.search-modal-body').scrollTop = 0
        this.page = 1
        this.results = results
        this.time = time
        this.renderStat()
        this.renderPage()
    }

    private renderStat() {
        this.stat.innerHTML = `Found <span class="search-stat-results">${this.results.length}</span> results in ${this.time}ms.`
    }

    loadMore() {
        this.renderPage(++this.page)
    }

    private renderPage(page = 1) {
        const max = page * this.paginate
        const min = max - this.paginate
        let temp = ''
        for (let i = min; i < this.results.length && i < max; i++) {
            const result = this.results[i]
            temp += `<a href="${result.item.url}" class="search-result">
  <div class="search-result-icon">${this.icon(result.item)}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.title(result)}</div>
    <div class="search-result-desc">${this.desc(result)}</div>
  </div>
  <div class="search-result-meta">
    <span class="search-result-date">${this.date(result.item)}</span>
  </div>
</a>`
        }
        this.container.insertAdjacentHTML('beforeend', temp)
    }
}
