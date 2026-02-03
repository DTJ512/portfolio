import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSwitch.css'

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="language-switch">
      <button 
        className={`lang-btn ${language === 'vn' ? 'active' : ''}`}
        onClick={() => language !== 'vn' && toggleLanguage()}
      >
        VN
      </button>
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => language !== 'en' && toggleLanguage()}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitch

