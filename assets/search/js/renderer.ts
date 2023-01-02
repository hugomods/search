import { default as params } from '@params'

export default class Renderer {
    private container

    private stat

    private page = 1

    private paginate = 20

    private results

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

    desc(page) {
        return page.summary
    }

    render(results) {
        this.clean()
        this.page = 1
        this.results = results
        this.renderStat()
        this.renderPage()
    }

    private renderStat() {
        this.stat.innerHTML = `Found <span class="search-stat-results">${this.results.length}</span> results.`
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
    <div class="search-result-title">${result.item.title}</div>
    <div class="search-result-desc">${this.desc(result.item)}</div>
  </div>
  <div class="search-result-meta">
    <span class="search-result-date">${this.date(result.item)}</span>
  </div>
</a>`
        }
        this.container.insertAdjacentHTML('beforeend', temp)
    }
}
