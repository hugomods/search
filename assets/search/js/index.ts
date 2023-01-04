import Engine from "./engine"
import Modal from "./modal"
import Renderer from "./renderer"
import { default as params } from '@params'
import Spinner from "./spinner"
import Navigator from "./navigator"

(() => {
    'use strict'

    const navigator = new Navigator()

    let engine

    const initEngine = () => {
        const promises = []
        for (const i in params.indices) {
            const promise = fetch(params.indices[i])
                .then((resp) => resp.json())
            promises.push(promise)
        }

        return Promise.all(promises)
            .then((resp) => {
                let pages = resp[0]
                for (let i = 1; i < resp.length; i++) {
                    pages = pages.concat(resp[i])
                }

                engine = new Engine(pages)
            })
    }

    let timeoutId = 0

    // How many milliseconds must elapse before considering the autocomplete experience stalled.
    const stallThreshold = params.stall_threshold

    const renderer = new Renderer('.search-results', '.search-stat')

    const pressedKeys = {}

    const onKeyPress = (e: KeyboardEvent) => {
        if (e.type === 'keydown') {
            // record the pressed key.
            pressedKeys[e.key] = true
        } else {
            // remove it when keyup, to simplify the check conditions of isKeysPressed.
            delete pressedKeys[e.key]
        }
    }

    // Check if the given keys were pressed at the same time.
    const isKeysPressed = (keys: Array<string>): boolean => {
        if (keys.length === 0) {
            return false
        }

        for (let i in keys) {
            if (!(keys[i] in pressedKeys)) {
                return false
            }
        }

        return true
    }

    let langFilter

    const lang = () => {
        return langFilter ? langFilter.value : ''
    }

    const search = (query) => {
        query = query.trim()
        if (query === '') {
            renderer.render(query, [], 0)
            return
        }

        spinner.show()
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(engine.search(query, lang()))
            }, 1)
        })
        const start = (new Date()).getTime()
        promise.then((results) => {
            renderer.render(query, results, (new Date()).getTime() - start)
        }).finally(() => {
            spinner.hide()
        })
    }

    const loadMore = () => {
        spinner.show()
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(renderer.loadMore())
            }, 1)
        })
        promise.finally(() => {
            spinner.hide()
        })
    }

    let spinner

    const currentModal = () => {
        return document.querySelector('.search-modal-container.active')
    }

    const isModalOpened = () => {
        return currentModal() !== null
    }

    document.addEventListener('DOMContentLoaded', () => {
        spinner = new Spinner('.search-spinner')

        const form = document.querySelector('.search-form') as HTMLFormElement
        form?.addEventListener('submit', (e) => {
            e.preventDefault()
        })

        const input = document.querySelector('.search-input') as HTMLInputElement
        input.addEventListener('keyup', () => {
            // clear previous delayed search request if users still typing.
            clearTimeout(timeoutId)
            // set up a new delayed search request.
            timeoutId = setTimeout(() => {
                search(input.value)
            }, stallThreshold)
        })

        initEngine().then(() => {
            input.removeAttribute('disabled')
            spinner.hide()
        }).catch((err) => {
            input.value = 'failed to initial index.'
            console.error(err)
        })

        document.querySelectorAll('.search-modal-toggle').forEach((toggle) => {
            toggle.addEventListener('click', (e) => {
                Modal.getOrCreate(toggle.getAttribute('data-target') ?? '.search-modal-container').show()
            })
        })

        document.querySelectorAll('.search-modal-close').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                Modal.getOrCreate(toggle.closest('.search-modal-container')).hide()
            })
        })

        document.addEventListener('keydown', (e) => {
            onKeyPress(e)

            if (isKeysPressed(params.shortcut_close)) {
                document.querySelectorAll('.search-modal-container.active').forEach((modal) => {
                    Modal.getOrCreate(modal).hide()
                })
            }
            if (isKeysPressed(params.shortcut_search)) {
                const modal = document.querySelector('.search-modal-container:not(.active)')
                if (modal) {
                    Modal.getOrCreate(document.querySelector('.search-modal-container:not(.active)')).show()
                }
                // In order to override the same shortcut of browsers.
                e.preventDefault()
            }
            if (isModalOpened() && isKeysPressed(['ArrowUp'])) {
                e.preventDefault()
                navigator.prev()
            }
            if (isModalOpened() && isKeysPressed(['ArrowDown'])) {
                e.preventDefault()
                navigator.next()
            }
        })

        document.addEventListener('keyup', onKeyPress)

        document.querySelectorAll('.search-modal-body').forEach((body) => {
            body.addEventListener('scroll', () => {
                if (body.scrollHeight - body.scrollTop === body.clientHeight) {
                    loadMore()
                }
            })
        })

        document.addEventListener('click', (e) => {
            const action = e.target.closest('.search-result-action')
            if (action && action.classList.contains('search-result-action-meta')) {
                e.preventDefault()
                const meta = action.closest('.search-result').querySelector('.search-result-meta')
                if (meta.classList.contains('show')) {
                    meta.classList.remove('show')
                } else {
                    meta.classList.add('show')
                }
            } else if (e.target.closest('.search-result')) {
                // hide current modal after selecting the search result, since the browser won't
                // redirect if the selected search result is the same as the current page.
                Modal.getOrCreate(currentModal()).hide()
            }
        })

        document.querySelector('.search-modal-container')?.addEventListener('click', (e) => {
            // close the modal when losing focus.
            const modal = currentModal()
            if (modal && !e.target.closest('.search-modal')) {
                Modal.getOrCreate(modal).hide()
            }
        })

        // Language filter
        langFilter = document.querySelector('select.search-filter-lang')
        if (langFilter) {
            langFilter.addEventListener('change', () => {
                search(input.value)
            })
        }
    })
})()
