import Translator from "mods/i18n/translator"
import { default as params } from '@params'

const i18n = new Translator(params.i18n, params.defaultLang)

export default i18n
