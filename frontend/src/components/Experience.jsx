import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Solution Specialist Junior',
      company: 'ONE Group',
      period: 'July 2025 - Present',
      description: [
        'Designed an automated ads budget top-up and recommendation system for 13 marketing teams, optimizing allocation across team, brand, and agency/vendor levels, cutting manual processing time by ~85%',
        'Built an AI-powered call quality evaluation system for Sales & Customer Service using Gemini AI, analyzing call content, tone, and sentiment, and generating monthly personalized coaching actions, reducing required QA headcount by ~95%',
        'Developed a real-time business analytics chatbot using MCP + BigQuery with a custom Data Dictionary, enabling natural language queries and auto-generated action recommendations across orders, cancellations, delays, KPIs, and sales performance',
        'Automated weekly and monthly business performance reporting with AI-generated insights and time-aware recommendations for upcoming events, removing the need for manual data analysis and report writing by QA and operations teams',
        'Implemented daily order delivery status and sales performance reporting for 4 teams, enabling real-time staff performance monitoring and faster issue detection',
        'Built company-wide KPI and sales performance tracking for 13 teams, supporting real-time KPI monitoring and month-over-month performance comparison for leadership',
        'Developed an inventory shortage alert system using sales velocity, stock levels, and supplier lead time, improving replenishment planning accuracy and reducing stock-out risk by ~30–40%',
        'Designed an AI-powered event planning website, enabling generation of event concepts, agendas, content, images, videos, and slides, reducing early-stage event ideation time by ~70%'
      ]
    },
    {
      title: 'Customer Success Engineer (AI & Data Automation)',
      company: 'Gcalls',
      period: 'July 2024 - March 2025',
      description: [
        'Researched and developed an AI-powered recruitment consulting chatbot using OpenAI GPT, enabling intelligent hiring advice and candidate interaction',
        'Integrated the chatbot into the company\'s Zalo Official Account (OA) via Zalo APIs, supporting real-time engagement on a high-traffic messaging platform',
        'Designed and implemented a backend system to extract structured documents and insights from chat history, storing and managing data in MongoDB for analysis and retrieval',
        'Built backend services supporting Web and Mobile interfaces for enterprise recruitment data management, enabling centralized and scalable data operations',
        'Applied NocoDB to visualize and present recruitment and customer data, improving accessibility and usability for Business teams',
        'Designed automated workflows to synchronize and update customer and recruitment data based on business-defined conditions, reducing manual data handling',
        'Implemented an ETL pipeline to migrate and normalize data from legacy MongoDB 4.2, removing redundant fields and restructuring schemas before loading optimized datasets into MongoDB 8.0 and PostgreSQL, with Redis Queue ensuring reliable, loss-free data processing'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-content">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <h3 className="exp-title">{exp.title}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                  <span className="exp-period">{exp.period}</span>
                  <ul className="exp-description">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

