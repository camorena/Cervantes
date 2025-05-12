// src/App.jsx
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events for navigation effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrolled={scrolled}
      />

      <main>
        <HeroSection darkMode={darkMode} />
        <ServicesSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <TestimonialsSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
