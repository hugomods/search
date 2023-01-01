import Fuse from 'js/fuse/fuse'

export default class Engine {
    private index

    constructor(pages) {
        this.index = new Fuse(pages, {
            // TODO: allow specifying options via configuration.
            keys: ['title', 'summary']
        })
    }

    search(query: string) {
        return this.index.search(query)
    }
}
