import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import contentData from '../about.json'
import contactData from '../contact.json'
import './About.css'

function About() {
  const { t, language } = useLanguage()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [isExperienceVisible, setIsExperienceVisible] = useState(false)
  const [isSkillsVisible, setIsSkillsVisible] = useState(false)
  const sectionRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsExperienceVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSkillsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">
              <span className="hero-greeting">{contentData[`hero_${language}`]?.greeting || '[greeting]'}</span>
              <span className="hero-name">{contentData[`hero_${language}`]?.name || '[name]'}</span>
            </h1>
            <p className="hero-intro">{contentData[`hero_${language}`]?.intro || '[intro]'}</p>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => navigate('/portfolio/contact')}>{t('about.getInTouch')}</button>
              <div className="social-links">
                <a 
                  href={contactData[`contact_${language}`]?.items?.find(item => item.title === 'GitHub' || item.title === 'GitHub')?.link || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href={contactData[`contact_${language}`]?.items?.find(item => item.title === 'LinkedIn' || item.title === 'LinkedIn')?.link || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image">
                <img 
                  src="/avatar.jpg" 
                  alt={t('about.name')}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <span className="image-icon">👤</span>
                </div>
              </div>
              <div className="decorative-elements">
                <div className="decorative-circle circle-1"></div>
                <div className="decorative-circle circle-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Expertise Section */}
      <section className="expertise-section" ref={sectionRef}>
        <div className="section-container">
          <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
            <h3 className="section-subtitle">{t('about.mySkills')}</h3>
            <h2 className="section-title">{t('about.myExpertise')}</h2>
          </div>
          <div className="expertise-grid">
            {(contentData[`expertise_${language}`] || []).map((expertise, index) => {
              // Default icons nếu không có icon trong about.json
              const defaultIcons = [
                <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>,
                <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>,
                <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>,
                <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              ]

              // Render icon từ about.json hoặc dùng default
              const renderIcon = () => {
                if (expertise?.icon) {
                  // Nếu icon là emoji hoặc text
                  if (expertise.icon.startsWith('http') || expertise.icon.startsWith('/')) {
                    // Nếu là URL hoặc path đến image
                    return <img src={expertise.icon} alt={expertise.title || 'icon'} className="expertise-icon-image" />
                  } else if (expertise.icon.length <= 2) {
                    // Nếu là emoji
                    return <span className="expertise-icon-emoji">{expertise.icon}</span>
                  } else {
                    // Nếu là SVG string, có thể parse hoặc dùng dangerouslySetInnerHTML
                    try {
                      return <div className="expertise-icon-svg" dangerouslySetInnerHTML={{ __html: expertise.icon }} />
                    } catch {
                      return defaultIcons[index] || defaultIcons[0]
                    }
                  }
                }
                return defaultIcons[index] || defaultIcons[0]
              }

              return (
                <div key={index} className={`expertise-card ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="expertise-icon">
                    {renderIcon()}
                  </div>
                  <h3>{expertise?.title || '[expertise]'}</h3>
                  <p>{expertise?.description || '[expertise]'}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section" ref={experienceRef}>
        <div className="section-container">
          <div className={`section-header ${isExperienceVisible ? 'fade-in-up' : ''}`}>
            <h3 className="section-subtitle">{t('about.experience')}</h3>
            <h2 className="section-title">{t('about.workExperience') || 'Kinh nghiệm làm việc'}</h2>
          </div>
            <div className="experience-timeline">
              {(contentData[`experience_${language}`] || []).map((exp, index) => (
                <div key={index} className={`experience-item ${isExperienceVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="experience-date">
                    <span className="date-text">{exp.period || '[period]'}</span>
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">{exp.title || '[title]'}</h3>
                    <p className="experience-company">{exp.company || '[company]'}</p>
                    <p className="experience-description">{exp.description || '[description]'}</p>
                    {(exp.achievements && exp.achievements.length > 0) && (
                      <div className="experience-achievements">
                        <h4 className="achievements-title">{t('about.keyAchievements')}</h4>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="achievement-item">
                              {achievement || '[achievement]'}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" ref={skillsRef}>
        <div className="section-container">
          <div className={`section-header ${isSkillsVisible ? 'fade-in-up' : ''}`}>
            <h3 className="section-subtitle">{t('about.skills')}</h3>
            <h2 className="section-title">{t('about.mySkills')}</h2>
          </div>
          <div className="skills-content">
            {(contentData[`skills_${language}`] || []).map((category, index) => (
              <div key={index} className={`skills-category ${isSkillsVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <h3 className="category-title">{category.title || '[category]'}</h3>
                <div className="skills-list">
                  {category.skills && category.skills.length > 0 ? (
                    category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill || '[skill]'}</span>
                    ))
                  ) : (
                    <span className="skill-tag">[skill]</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
