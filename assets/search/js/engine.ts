import Fuse from 'js/fuse/fuse'
import { default as params } from '@params'

export default class Engine {
    private index

    constructor(pages) {
        this.index = new Fuse(pages, {
            isCaseSensitive: params.case_sensitive ?? false,
            minMatchCharLength: params.min_match_char_length ?? 1,
            location: params.location ?? 0,
            threshold: params.threshold ?? 0,
            distance: params.distance ?? 100,
            ignoreLocation: params.ignore_location ?? false,
            keys: ['title', 'summary']
        })
    }

    search(query: string) {
        return this.index.search(query)
    }
}
