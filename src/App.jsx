import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/language-selector'
import './App.css'

function App() {
  const {t} = useTranslation();
  const {line1, line2} = t("description", {channel: "RoadsideCoder"});

  return (
    <div className='container'>
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
      <span>{line1}</span>
      <span>{line2}</span>
    </div>
  )
}

export default App
