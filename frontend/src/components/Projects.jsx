import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Call Quality Evaluation System',
      description: 'Call quality evaluation system using Gemini AI, analyzing content, tone, and sentiment, automatically generating personalized coaching actions. Reduced QA headcount by ~95%.',
      technologies: ['Python', 'Google Gemini', 'FastAPI', 'MongoDB'],
      github: 'https://github.com/DTJ512',
      demo: '#',
      image: '🤖'
    },
    {
      title: 'Real-time Business Analytics Chatbot',
      description: 'Real-time business analytics chatbot using MCP + BigQuery with custom Data Dictionary, enabling natural language queries and auto-generated action recommendations.',
      technologies: ['Python', 'MCP', 'BigQuery', 'OpenAI GPT'],
      github: 'https://github.com/DTJ512',
      demo: '#',
      image: '💬'
    },
    {
      title: 'Automated Ads Budget System',
      description: 'Automated ads budget top-up and recommendation system for 13 marketing teams, optimizing allocation across multiple levels. Reduced manual processing time by ~85%.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'n8n'],
      github: 'https://github.com/DTJ512',
      demo: '#',
      image: '📊'
    },
    {
      title: 'AI-Powered Event Planning Website',
      description: 'AI-powered event planning website, enabling generation of event concepts, agendas, content, images, videos, and slides. Reduced ideation time by ~70%.',
      technologies: ['React', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      github: 'https://github.com/DTJ512',
      demo: '#',
      image: '🎉'
    },
    {
      title: 'Recruitment Consulting Chatbot',
      description: 'AI-powered recruitment consulting chatbot integrated into Zalo Official Account, providing intelligent hiring advice and real-time candidate interaction.',
      technologies: ['Python', 'OpenAI GPT', 'Zalo API', 'MongoDB'],
      github: 'https://github.com/DTJ512',
      demo: '#',
      image: '👥'
    },
    {
      title: 'Inventory Shortage Alert System',
      description: 'Inventory shortage alert system using sales velocity, stock levels, and supplier lead time, improving replenishment planning accuracy and reducing stock-out risk by ~30-40%.',
      technologies: ['Python', 'BigQuery', 'PostgreSQL', 'n8n'],
      github: 'https://github.com/DTJ512',
      demo: '#',
      image: '📦'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

