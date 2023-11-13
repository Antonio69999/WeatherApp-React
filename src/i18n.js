// Import necessary modules from react-i18next
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json'; // English translations
import translationES from './locales/es/translation.json'; // Spanish translations

// Set up i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language in case the specified language is not available
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
