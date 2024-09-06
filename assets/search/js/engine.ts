import { default as params } from '@params'
import Fuse from 'mods/fuse/fuse'

/**
 * The Fuse.js search engine.
 */
class Engine {
    private index

    private indexFailed = false

    private initialized = false

    /**
     * Initialize the search index.
     * 
     * @returns {Promise} 
     */
    init(): Promise<unknown> {
        if (this.initialized) {
            return (new Promise((resolve, reject) => {
                // create a checker that check whether the index is ready,
                // since we don't know how long the engine take to initialize the index on the first call.
                const checker = setInterval(() => {
                    if (this.index) {
                        clearInterval(checker)
                        resolve(true)
                    } else if (this.indexFailed) {
                        clearInterval(checker)
                        reject('Index fails')
                    }
                }, 50)
            }))
        }

        // change it as true immediately, avoid indexing multiple times.
        this.initialized = true

        const promises = new Array<Promise<Array<unknown>>>
        for (const i in params.indices) {
            const promise = fetch(params.indices[i]).then((resp) => resp.json())
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
                keys: this.getKeys(),
                includeMatches: true,
                useExtendedSearch: true,
                includeScore: true,
            })
        }).catch((err) => {
            this.indexFailed = true
            throw new Error(err)
        })
    }

    private keys

    private getKeys() {
        if (this.keys) {
            return this.keys
        }

        const keys = [
            {name: 'title', weight: params.key_weights.title},
            {name: 'summary', weight: params.key_weights.summary},
            {name: 'headings.title', weight: params.key_weights.headings},
            {name: 'lang', weight: params.key_weights.lang},
            {name: 'year', weight: params.key_weights.year},
        ]

        if (params.index_content) {
            keys.push({name: 'content', weight: params.key_weights.content})
        }

        for (const taxonomy in params.taxonomies) {
            keys.push({name: taxonomy, weight: params.key_weights.taxonomies})
        }

        this.keys = keys
        return this.keys
    }

    private query

    private results

    /**
     * Search by the given query and language, then return the results and time.
     * 
     * @param {string} query query string.
     * @param {string} lang language.
     * @param {string} sorting language.
     * @returns {Promise<Record<string, unknown>>}
     */
    search(query: string, sorting = '', lang = '', years: Array<string> = [], taxonomies: Record<string, Array<string>> = {}): Promise<Record<string, unknown>> {
        const pattern = this.pattern(query, lang, years, taxonomies)
        const start = (new Date()).getTime()
        return new Promise((resolve) => {
            setTimeout(() => {
                // re-sort previous results when receiving the same query
                if (JSON.stringify(this.query) === JSON.stringify(pattern)) {
                    resolve({
                        'results': this.sort(this.results, sorting),
                        'time': (new Date()).getTime() - start,
                    })
                    return
                }

                this.results = this.index.search(pattern, {
                    limit: params.max_results
                })
                this.query = pattern

                return resolve({
                    'results': this.sort(this.results, sorting),
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
    private pattern(query: string, lang: string, years: Array<string> = [], taxonomies: Record<string, Array<string>> = {}): string | Record<string, unknown> {
        const p: Array<Record<string, unknown>> = []

        if (query !== '') {
            p.push({
                "$or": [
                    { title: query },
                    { summary: query },
                    { content: query },
                    {
                        "$path": "headings.title",
                        "$val": query
                    },
                ]
             })
        }

        if (lang) {
            p.push({
                lang: '=' + lang
            })
        }

        if (years.length > 0) {
            const yearsConditions: Array<Record<string, string>> = []
            for (const year of years) {
                yearsConditions.push({
                    year: `=${year}`
                })
            }
            p.push({
                "$or": yearsConditions
            })
        }

        for (const taxonomy in taxonomies) {
            if (taxonomies[taxonomy].length === 0) {
                continue
            }

            const taxonomyConditions: Array<Record<string, string>> = []
            for (const name of taxonomies[taxonomy]) {
                taxonomyConditions.push({
                    [taxonomy]: `="${name}"`,
                })
            }
            p.push({
                "$and": taxonomyConditions
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
