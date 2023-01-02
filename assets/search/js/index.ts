import Engine from "./engine"
import Modal from "./modal"
import Renderer from "./renderer"
import { default as params } from '@params'
import Spinner from "./spinner"

(() => {
    'use strict'

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
    const stallThreshold = params.stall_threshold ?? 300

    const renderer = new Renderer('.search-results')

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

    const search = (query) => {
        spinner.show()
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(engine.search(query))
            }, 1)
        })
        promise.then((results) => {
            renderer.render(results)
        }).finally(() => {
            spinner.hide()
        })
    }

    let spinner

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
            toggle.addEventListener('click', () => {
                Modal.getOrCreate(toggle.getAttribute('data-target') ?? '.search-modal').show()
            })
        })

        document.querySelectorAll('.search-modal-close').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                Modal.getOrCreate(toggle.closest('.search-modal')).hide()
            })
        })

        document.addEventListener('keydown', (e) => {
            onKeyPress(e)

            if (isKeysPressed(params.shortcut_close)) {
                document.querySelectorAll('.search-modal.active').forEach((modal) => {
                    Modal.getOrCreate(modal).hide()
                })
            }
            if (isKeysPressed(params.shortcut_search)) {
                const modal = document.querySelector('.search-modal:not(.active)')
                if (modal) {
                    Modal.getOrCreate(document.querySelector('.search-modal:not(.active)')).show()
                }
                // In order to override the same shortcut of browsers.
                e.preventDefault()
            }
        })

        document.addEventListener('keyup', onKeyPress)
    })
})()
