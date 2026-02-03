import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import About from './pages/About'
import Project from './pages/Project'
import Tools from './pages/Tools'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/portfolio" element={<About />} />
              <Route path="/portfolio/" element={<About />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/project" element={<Project />} />
              <Route path="/portfolio/tool" element={<Tools />} />
              <Route path="/portfolio/contact" element={<Contact />} />
              <Route path="/" element={<Navigate to="/portfolio" replace />} />
              <Route path="*" element={<Navigate to="/portfolio" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

