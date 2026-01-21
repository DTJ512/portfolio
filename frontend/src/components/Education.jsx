import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educations = [
    {
      degree: 'Engineer\'s Degree - Internet of Things (IoT) and Applied Artificial Intelligence',
      school: 'Industrial University of Ho Chi Minh City (IUH)',
      period: 'October 2020 - January 2025',
      gpa: 'GPA: 3.13 / 4.0 (Good Classification)',
      description: [
        'Applied engineering principles to process improvement and technology-driven solutions',
        'Focused on IoT and AI applications in real-world scenarios'
      ]
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="timeline">
            {educations.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <h4 className="edu-school">{edu.school}</h4>
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-gpa">{edu.gpa}</span>
                  <ul className="edu-description">
                    {edu.description.map((item, itemIndex) => (
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

export default Education

