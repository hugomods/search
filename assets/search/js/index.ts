import { default as params } from '@params'
import "./dropdown"
import "./navigator"
import Modal from "./modal"
import Search from "./search"
import { init as i18nInit } from "./i18n"

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', () => {
    i18nInit().then(() => {
      new Search()
    
      if (params.modal_container !== '') {
        (new Modal()).init()
      }
    })
  })
})()
