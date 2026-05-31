import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en/translation.json'
import nl from '../locales/nl/translation.json'
import de from '../locales/de/translation.json'
import es from '../locales/es/translation.json'
import it from '../locales/it/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, nl: { translation: nl }, de: { translation: de }, es: { translation: es }, it: { translation: it } },
    fallbackLng: 'en',
    supportedLngs: ['en', 'nl', 'de', 'es', 'it'],
    detection: { order: ['navigator', 'htmlTag'], caches: [] },
    interpolation: { escapeValue: false },
  })

export default i18n
