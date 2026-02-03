import { useLanguage } from '../contexts/LanguageContext'
import projectData from '../project.json'
import Card from '../components/Card'
import './Project.css'

function Project() {
  const { t, language } = useLanguage()
  const projects = projectData[`projects_${language}`] || projectData.projects_vn
  const viewMore = projectData[`viewMore_${language}`] || projectData.viewMore_vn

  return (
    <div className="project-page">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title || '[title]'}
            description={project.description || '[description]'}
            tags={project.tags || []}
            link={project.link || viewMore.link || '#'}
            viewMoreText={viewMore.text || t('contact.viewMore')}
          />
        ))}
      </div>
    </div>
  )
}

export default Project

