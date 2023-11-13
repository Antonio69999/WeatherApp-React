// Import necessary modules from react-i18next
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      fr: {
        translation: translationFR,
      }
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language in case the specified language is not available
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
