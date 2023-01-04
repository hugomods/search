import { default as params } from '@params'

export default class Renderer {
    private container

    private lang = ''

    private stat

    private page = 1

    private paginate = 20

    private query = ''

    private results

    private time = 0

    constructor(container, stat) {
        this.container = document.querySelector(container)
        this.stat = document.querySelector(stat)
        // Make sure that the paginate is at least 20, so that load more event will be able to trigger.
        this.paginate = Math.max(this.paginate, params.paginate)
        this.lang = document.documentElement.getAttribute('lang') ?? 'en-US'
    }

    clean() {
        this.container.innerHTML = ''
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

        return (new Date(page.date * 1000)).toLocaleDateString(this.lang, { dateStyle: 'long' })
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
        this.clean()
        // Back to top when re-rendering results.
        this.container.closest('.search-modal-body').scrollTop = 0
        this.page = 1
        this.results = results
        this.time = time
        this.query = query
        this.renderStat()
        this.renderPage()
    }

    private renderStat() {
        if (this.query === '') {
            this.stat.innerHTML = ''
            return
        }
        this.stat.innerHTML = `Found <span class="search-stat-results">${this.results.length}</span> results in ${this.prettifyTime()}.`
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
        this.renderPage(++this.page)
    }

    private renderPage(page = 1) {
        const max = page * this.paginate
        const min = max - this.paginate
        let temp = ''
        for (let i = min; i < this.results.length && i < max; i++) {
            const result = this.results[i]
            temp += `<a title="${result.item.title}" href="${result.item.url}" class="search-result">
  <div class="search-result-icon">${this.icon(result.item)}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.title(result)}</div>
    ${this.desc(result)}
  </div>
  <div class="search-result-actions">
    <div class="search-result-action search-result-action-meta">${params.icons['meta']}</div>
  </div>
  <div class="search-result-meta">
    <span class="search-result-score">${this.score(result.score)}</span>
    <span class="search-result-lang">${result.item.lang}</span>
    <span class="search-result-date">${this.date(result.item)}</span>
    ${this.taxonomies(result.item)}
  </div>
</a>`
            temp += this.renderHeadings(result)
        }
        this.container.insertAdjacentHTML('beforeend', temp)
    }

    renderHeadings(result) {
        if (!result.item.headings || result.item.headings.length == 0) {
            return ''
        }

        const matches = result.matches.filter((match) => match.key === 'headings.title')
        if (matches.length == 0) {
            return ''
        }

        let temp = ''

        for (let i in result.item.headings) {
            const heading = result.item.headings[i]
            for (let j in matches) {
                if (matches[j].value !== heading.title) {
                    continue
                }

                temp += `<a title="${heading.title} - ${result.item.title}" href="${result.item.url}${heading.anchor}" class="search-result search-result-heading">
  <div class="search-result-icon search-result-heading-icon">${params.icons['heading']}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.highlight(heading.title, [matches[j]])}</div>
    <div class="search-result-desc">${result.item.title}</div>
  </div>
</a>`
            }
        }

        return temp
    }
}
