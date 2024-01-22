import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "hi",
        fallbackLng: "en",
        returnObjects: true,
        resources: {
            en: {
                translation: {
                    greeting: "Hello, reactant",
                    description: {
                        line1: "I am trying to use i18next.",
                        line2: "Let's connect",
                    },
                },
            },
            fr: {
                translation: {
                    greeting: "Bonjour, réactif",
                    description: {
                        line1: "J'essaie d'utiliser i18next",
                        line2: "Connectons-nous",
                    },
                },
            },
            hi: {
                translation: {
                    greeting: "नमस्ते, प्रतिक्रियाशील",
                    description: {
                        line1: "मैं i18next का उपयोग करने का प्रयास कर रहा हूँ",
                        line2: "आओ जुड़ें",
                    },
                },
            },
            ar: {
                translation: {
                    greeting: "مرحبًا، مرحبًا",
                    description: {
                        line1: "أحاول استخدام i18next",
                        line2: "لنتصل",
                    },
                },
            },
            zh: {
                translation: {
                    greeting: "你好，反应剂",
                    description: {
                        line1: "我正在尝试使用 i18next。",
                        line2: "让我们连接",
                    },
                    tryingToUseI18next: "我正在尝试使用 i18next",
                },
            },
        },
    },);
