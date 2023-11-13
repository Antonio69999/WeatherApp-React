import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

// Import your translation files
import translationEN from "../public/locales/en/translation.json";
import translationES from "../public/locales/es/translation.json";
import translationFR from "../public/locales/fr/translation.json";

i18next.init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
    fr: {
      translation: translationFR,
    },
  },
  lng: "es", // Set the default language
  fallbackLng: "en", // Fallback language in case the specified language is not available
  interpolation: { escapeValue: false }, // React already does escaping
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
