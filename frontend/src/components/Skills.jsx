import React from 'react'
import { FaReact, FaNode, FaJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiGooglebigquery, SiOpenai } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'React.js', icon: <FaReact />, level: 85 },
        { name: 'Node.js', icon: <FaNode />, level: 80 },
      ]
    },
    {
      title: 'Databases & Data Systems',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'BigQuery', icon: <SiGooglebigquery />, level: 80 },
        { name: 'SQLite', icon: <FaDatabase />, level: 75 },
      ]
    },
    {
      title: 'AI & LLMs',
      skills: [
        { name: 'OpenAI GPT', icon: <SiOpenai />, level: 90 },
        { name: 'Google Gemini', icon: <SiOpenai />, level: 85 },
        { name: 'MCP (Model Context)', icon: <FaDatabase />, level: 85 },
        { name: 'RAG & Prompt Engineering', icon: <FaDatabase />, level: 85 },
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'FastAPI', icon: <FaPython />, level: 90 },
        { name: 'n8n Automation', icon: <FaNode />, level: 85 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Google Apps Script', icon: <FaJs />, level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

