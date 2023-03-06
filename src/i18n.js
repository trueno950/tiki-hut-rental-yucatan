import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    hola: 'fff',
                    home: {
                        title: 'hello world'
                    }
                }
            },
            es: {
                translation: {
                    hola:'efvev',
                    home: {
                        title: 'Descubre el paraíso oculto de Yucatán en Tiki Hut Rental'
                    }
                }
            }
        }
    })