import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am seeking to join a product-driven organization where AI and data are applied to solve 
              real operational and business problems. My goal is to design and scale AI-powered automation 
              and decision-support systems that reduce manual workload, improve efficiency, and deliver 
              actionable insights with measurable impact.
            </p>
            <p>
              I focus on building end-to-end AI solutions that directly integrate with real business workflows 
              rather than isolated models or dashboards. I emphasize automation, reliability, and scalability, 
              ensuring systems operate consistently in production environments.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>13+</h3>
                <p>Teams Using Solutions</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Manual Work Reduction</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years AI Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

