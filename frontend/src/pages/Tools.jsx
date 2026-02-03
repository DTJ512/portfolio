import { useLanguage } from '../contexts/LanguageContext'
import toolsData from '../tools.json'
import Card from '../components/Card'
import './Tools.css'

function Tools() {
  const { t, language } = useLanguage()
  const tools = toolsData[`tools_${language}`] || toolsData.tools_vn
  const viewMore = toolsData[`viewMore_${language}`] || toolsData.viewMore_vn

  return (
    <div className="tools-page">
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <Card
            key={index}
            title={tool.title || '[title]'}
            description={tool.description || '[description]'}
            tags={tool.tags || []}
            link={tool.link || viewMore.link || '#'}
            viewMoreText={viewMore.text || t('contact.viewMore')}
          />
        ))}
      </div>
    </div>
  )
}

export default Tools

