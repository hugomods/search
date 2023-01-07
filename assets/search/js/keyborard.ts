class Keyboard {
    private keys = {}

    private events: {
        keys: Array<string>,
        callback: CallableFunction
    }[] = []

    attach(keys: Array<string>, callback: CallableFunction) {
        this.events.push({ keys, callback })
    }

    press(e: KeyboardEvent) {
        if (e.type === 'keydown') {
            // record the pressed key.
            this.keys[e.key] = true

            for (let i in this.events) {
                const event = this.events[i]
                if (this.isPressed(event.keys)) {
                    e.preventDefault()
                    event.callback()
                }
            }

            return
        }

        // remove it when keyup, to simplify the check conditions of isPressed.
        delete this.keys[e.key]
    }

    // Check if the given keys were pressed at the same time.
    private isPressed(keys: Array<string>): boolean {
        if (keys.length === 0) {
            return false
        }

        for (let i in keys) {
            if (!(keys[i] in this.keys)) {
                return false
            }
        }

        return true
    }
}

const keyboard = new Keyboard()
export default keyboard;

(() => {
    'use strict'

    document.addEventListener('DOMContentLoaded', () => {
        const press = (e) => {
            keyboard.press(e)
        }
        document.addEventListener('keydown', press)
        document.addEventListener('keyup', press)
    })
})()
