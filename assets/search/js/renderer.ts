import { default as params } from '@params'

export default class Renderer {
    private container

    constructor(container) {
        this.container = document.querySelector(container)
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

        let temp = ''

        for (let i in results) {
            const result = results[i]
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
        this.container.innerHTML = temp;
    }
}
