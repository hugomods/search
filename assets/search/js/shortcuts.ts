import { translate } from './i18n'

type Kbds = Array<string | Array<string>>

type Shortcut = {
    kbds: Kbds,
    action: string
}

const Navigate = (): Shortcut => {
    return {
        kbds: ["↑", "↓"],
        action: translate('to_navigate'),
    }
}

const Select = (): Shortcut => {
    return {
        kbds: ["⏎"],
        action: translate('to_select'),
    }
}

class Shortcuts {
    constructor(private shortcuts: Array<() => Shortcut>) { }

    render(): string {
        let shortcuts = ''

        for (const i in this.shortcuts) {
            const shortcut = this.shortcuts[i]()
            shortcuts += `<span class="search-shortcut">
${this.renderKbds(shortcut.kbds)}
<span class="search-shortcut-action">${shortcut['action']}</span>
</span>`
        }

        return `<div class="search-shortcuts">${shortcuts}</div>`
    }

    private renderKbds(kbds: Kbds, wrap = false): string {
        let s = ''
        for (const kbd of kbds) {
            if (kbd instanceof Array) {
                s += this.renderKbds(kbd, true)
                continue
            }
            const temp = `<kbd class="search-shortcut-kbd">${kbd}</kbd>`
            s += wrap ? `<span class="search-shortcut-kbds">${temp}</span>` : temp
        }

        return s
    }
}

export {
    Navigate,
    Select,
    Shortcut,
    Shortcuts,
}
