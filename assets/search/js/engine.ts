import { default as params } from '@params'
import Fuse from 'js/fuse/fuse'

/**
 * The Fuse.js search engine.
 */
class Engine {
    private index

    private initialized = false

    /**
     * Initialize the search index.
     * 
     * @returns {Promise} 
     */
    init(): Promise<any> {
        if (this.initialized) {
            return (new Promise((resolve) => { resolve(true) }))
        }

        const promises = new Array<Promise<any>>
        for (const i in params.indices) {
            const promise = fetch(params.indices[i])
                .then((resp) => resp.json())
            promises.push(promise)
        }

        return Promise.all(promises).then((resp) => {
            let pages = resp[0]
            for (let i = 1; i < resp.length; i++) {
                pages = pages.concat(resp[i])
            }

            this.index = new Fuse(pages, {
                isCaseSensitive: params.case_sensitive,
                minMatchCharLength: params.min_match_char_length,
                location: params.location,
                threshold: params.threshold,
                distance: params.distance,
                ignoreLocation: params.ignore_location,
                keys: ['title', 'summary', 'headings.title', 'lang'],
                includeMatches: true,
                useExtendedSearch: true,
                includeScore: true,
            })
        }).then(() => {
            this.initialized = true
        })
    }

    /**
     * Search by the given query and language, then return the results and time.
     * 
     * @param {string} query query string.
     * @param {string} lang language.
     * @param {string} sorting language.
     * @returns {Promise<Record<String,  Any>>}
     */
    search(query: string, sorting = '', lang = ''): Promise<any> {
        const pattern = this.pattern(query, lang)
        const start = (new Date()).getTime()
        return new Promise((resolve) => {
            setTimeout(() => {
                const results = this.index.search(pattern, {
                    limit: params.max_results
                })
                return resolve({
                    'results': this.sort(results, sorting),
                    'time': (new Date()).getTime() - start,
                })
            }, 1)
        })
    }

    /**
     * Generate the search pattern by given query and language.
     * 
     * @param {string} query 
     * @param {string} lang 
     */
    private pattern(query: string, lang: string): any {
        if (lang === '') {
            return query
        }

        let p: Array<any> = [
            {
                "$or": [
                    { title: query },
                    { summary: query },
                    {
                        "$path": "headings.title",
                        "$val": query
                    },
                ]
            },
        ]

        if (lang) {
            p.push({
                lang: '=' + lang
            })
        }

        return {
            "$and": p
        }
    }

    /**
     * Sort results.
     * 
     * @param Array results 
     * @param string sorting 
     * @returns 
     */
    private sort(results, sorting) {
        switch (sorting) {
            case 'date_asc':
                results = results.sort((a, b) => a.item.date - b.item.date);
                break;
            case 'date_desc':
                results = results.sort((a, b) => b.item.date - a.item.date);
                break;
        }

        return results
    }
}

const engine = new Engine()
export default engine
