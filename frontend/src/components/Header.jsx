import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span>CV</span>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
              About
            </a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>
              Skills
            </a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>
              Experience
            </a>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }}>
              Education
            </a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
              Projects
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
              Contact
            </a>
          </nav>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

