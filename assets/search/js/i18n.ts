import Translator from "mods/i18n/translator"
import { default as params } from '@params'

let i18n: Translator = undefined

export const init = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const lang = document.documentElement.getAttribute('lang') ?? params.lang
    const locale = params.locales[lang] ?? Object.values(params.locales)[0]
    fetch(locale).then((resp) => resp.json()).then((messages) => {
      i18n = new Translator({[lang]: messages}, lang)
      resolve(true)
    })
  })
}

export const translate = (s: string, ctx: null|Record<string, string>): string => {
  return i18n.translate(s, ctx)
}
