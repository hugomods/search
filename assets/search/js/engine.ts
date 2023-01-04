import Fuse from 'js/fuse/fuse'
import { default as params } from '@params'

export default class Engine {
    private index

    constructor(pages) {
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
        })
    }

    search(query: string, lang = '') {
        let s = {}
        if (lang) {
            s["$and"] = [
                {
                    lang: '=' + lang
                },
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
        }
        return this.index.search(Object.keys(s).length ? s : query, {
            limit: params.max_results
        })
    }
}
