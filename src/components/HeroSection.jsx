// src/components/HeroSection.jsx
import React from 'react'
import { ChevronRight } from 'lucide-react'
import Logo from './Logo'
import LogoCompact from './LogoCompact'

const HeroSection = ({ darkMode }) => {
  return (
    <section id="home" className="pt-20 pb-16 md:pb-24 relative">
      <div className="container mx-auto px-4">
        {/* Logo Row - Separate from content flow */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-12 lg:mb-16">
          <div className="hidden md:block w-40 lg:w-44 xl:w-48">
            <Logo darkMode={darkMode} />
          </div>
          <div className="block md:hidden w-32 sm:w-36">
            <LogoCompact darkMode={darkMode} />
          </div>
        </div>

        {/* Content Row - With proper spacing from logo */}
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text Column - Fixed padding and responsive text handling */}
          <div className="md:w-1/2 md:pr-8 lg:pr-12 mb-8 md:mb-0 z-10">
            <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="block md:inline">Premier </span>
                <span className="text-[#5046e5] block md:inline">Paint </span>
                <span className="text-[#5046e5] block md:inline">
                  Solutions
                </span>
              </h1>
              <p
                className={`text-lg sm:text-xl mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Since 2007, Cervantes has delivered quality interior painting
                and remodeling services throughout the Twin Cities. Local
                homeowners and businesses trust our skilled team for reliable,
                professional results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full font-medium transition-colors text-center bg-[#6c4ee5] hover:bg-[#5046e5] text-white">
                  Get a Free Quote
                </a>
                <a
                  href="#projects"
                  className={`px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}>
                  See Our Work
                  <ChevronRight size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Image Column - Improved responsive handling */}
          <div className="md:w-1/2">
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-[#f0f5ff]'
              }`}>
              <div className="relative pb-[56.25%]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5046e5]/20 to-[#6c4ee5]/20"></div>
                <img
                  src="/images/hero.png"
                  alt="Professional painting and drywall services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
