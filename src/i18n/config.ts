// i18n/config.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // ユーザーの言語設定を検知するために必要
  .init({
    fallbackLng: 'ja', // デフォルトの言語を設定
    returnEmptyString: false, // 空文字での定義を許可に
    resources: { 
      // 辞書情報
      en: {
        translation: {
            "Hello": "Hello",
            "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ja: {
        translation: {
            "Hello": "こんにちは",
            "Welcome to React": "Reactとreact-i18nextへようこそ"
        }
      }
    },
    interpolation: {
      escapeValue: false // 翻訳された文字列内のHTMLやReactコンポーネントをエスケープすることを無効に
    },
    react: {
      // 指定したHTMLノードを翻訳時にそのまま保持して表示するための設定
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span']
    }
  })

export default i18n