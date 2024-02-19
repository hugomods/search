import params from '@params'

class Historiographer {
  private key = 'search-histories'

  get() {
    let histories = JSON.parse(localStorage.getItem(this.key) ?? '[]')
    if (!(histories instanceof Array)) {
        histories = []
    }

    return histories.slice(0, params.historiesCount)
  }

  save(query: string): void {
    if (query === '') {
      return
    }

    let histories = this.get()
    histories = histories.filter((history) => history.query !== query)
    histories.unshift({
      query: query,
      date: (new Date()),
    })

    if (histories.length > params.historiesCount) {
      histories.pop()
    }

    localStorage.setItem(this.key, JSON.stringify(histories))
  }
}

export default (new Historiographer())
