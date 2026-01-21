import React from 'react'
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Do Tuan Duy</span>
            </h1>
            <h2 className="hero-subtitle">Solution Specialist | AI & Data Automation Engineer</h2>
            <p className="hero-description">
              I specialize in designing and developing AI solutions and data automation 
              to solve real operational and business problems. I focus on building 
              end-to-end AI systems that integrate directly into business workflows.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <a 
                href={`${import.meta.env.BASE_URL}DoTuanDuy_CV.pdf`}
                download 
                className="btn btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex' }}
              >
                <FaDownload /> Download CV
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/DTJ512" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:dotuanduy0512.work@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-container">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.jpeg`}
                alt="Avatar" 
                className="avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

