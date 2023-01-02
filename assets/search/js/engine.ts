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
            keys: ['title', 'summary']
        })
    }

    search(query: string) {
        return this.index.search(query)
    }
}
