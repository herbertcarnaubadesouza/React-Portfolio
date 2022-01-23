import { useEffect } from "react"
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const languages = [
  {
    code: 'br', 
    name: 'Português (BR)',
    country_code: 'br',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'Español',        
    country_code: 'es',
  },
]

function useLanguage() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t, i18n } = useTranslation()

  const setLanguage = (code) => {
    window.location.reload();
    i18n.changeLanguage(code);
  }

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return { t, setLanguage, currentLanguageCode }
}

export { languages as default, useLanguage }