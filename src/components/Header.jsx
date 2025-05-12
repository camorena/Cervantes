// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import NavLinks from './NavLinks'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events for navigation effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg'
            : 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Empty div for the left side to maintain spacing */}
          <div className="w-12 md:w-20 lg:w-40"></div>

          {/* Center the navigation */}
          <div className="flex items-center justify-center">
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks darkMode={darkMode} mobile={false} />
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-indigo-600'
              }`}
              aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className={`hidden md:block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                darkMode
                  ? 'bg-[#6c4ee5] hover:bg-[#5046e5] text-white'
                  : 'bg-[#6c4ee5] hover:bg-[#5046e5] text-white'
              }`}>
              Get a Quote
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                darkMode
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-indigo-600'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu">
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
          <div className="container mx-auto px-4 py-4">
            <NavLinks
              darkMode={darkMode}
              mobile={true}
              setMobileMenuOpen={setMobileMenuOpen}
            />
            <div className="mt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center px-6 py-2.5 rounded-full font-medium transition-colors ${
                  darkMode
                    ? 'bg-[#6c4ee5] hover:bg-[#5046e5] text-white'
                    : 'bg-[#6c4ee5] hover:bg-[#5046e5] text-white'
                }`}>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
