import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitch from './LanguageSwitch'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  // Đảm bảo header luôn hiển thị khi đổi ngôn ngữ
  useEffect(() => {
    setIsVisible(true)
    // Reset scroll position reference khi đổi ngôn ngữ
    lastScrollY.current = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }, [language])

  useEffect(() => {
    let timeoutId = null

    const handleScroll = () => {
      // Clear timeout nếu có
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      const scrollDifference = currentScrollY - lastScrollY.current

      // Luôn hiện khi ở đầu trang
      if (currentScrollY < 10) {
        setIsVisible(true)
        lastScrollY.current = currentScrollY
        return
      }

      // Nếu scroll xuống và đã scroll quá 100px → ẩn header
      if (scrollDifference > 0 && currentScrollY > 100) {
        setIsVisible(false)
      }
      // Nếu scroll lên (bất kỳ vị trí nào) → hiện header ngay
      else if (scrollDifference < 0) {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    // Initial check
    handleScroll()

    // Listen to scroll event với throttle
    const throttledHandleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll()
          timeoutId = null
        }, 10)
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    document.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      document.removeEventListener('scroll', throttledHandleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  const isActive = (path) => {
    if (path === '/about' || path === '/') {
      return location.pathname === '/portfolio' || location.pathname === '/portfolio/' || location.pathname === '/portfolio/about'
    }
    // So sánh với path đầy đủ có prefix /portfolio/
    return location.pathname === `/portfolio${path}`
  }

  return (
    <nav className={`navigation ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="nav-container">
        <Link to="/portfolio" className="logo">
          Portfolio
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/portfolio/about" 
              className={isActive('/about') ? 'active' : ''}
            >
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio/project" 
              className={isActive('/project') ? 'active' : ''}
            >
              {t('nav.project')}
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio/tool" 
              className={isActive('/tool') ? 'active' : ''}
            >
              {t('nav.tools')}
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio/contact" 
              className={isActive('/contact') ? 'active' : ''}
            >
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
        <LanguageSwitch />
      </div>
    </nav>
  )
}

export default Navigation

