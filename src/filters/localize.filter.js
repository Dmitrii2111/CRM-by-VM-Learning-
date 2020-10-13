import store from '../store'
import ru from '../langueges/ru.json'
import en from '../langueges/en.json'

const locales = {
  'ru-RU': ru,
  'en-US': en
}

export default function localizeFilter(key) {
  const lang = store.getters.info.Local || 'ru-RU'
  return locales[lang][key] || `[Localize error]: key ${key} not found`
}
