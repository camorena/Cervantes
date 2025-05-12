// src/components/AboutSection.jsx
import React from 'react'

const AboutSection = ({ darkMode }) => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl relative ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
              <div className="relative pb-[125%]">
                <img
                  src="/images/founder.jpg"
                  alt="Humberto Cervantes - Founder"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Humberto Cervantes
                  </h3>
                  <p className="text-gray-300">Founder & Master Craftsman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p
                className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Founded by Humberto Cervantes in 2007, our company has grown
                from a small family business to one of the most trusted names in
                interior renovation services in the region.
              </p>
              <p
                className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                With over 18 years of experience, we've perfected our craft and
                built a reputation for exceptional quality, reliability, and
                customer service. Our team of skilled professionals brings
                expertise and precision to every project.
              </p>
              <p
                className={`text-lg mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                As a family-owned business, we treat every project with personal
                care and attention to detail, ensuring the highest standards of
                quality and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  className={`p-4 rounded-lg text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <p className="text-3xl font-bold text-indigo-600">18+</p>
                  <p
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Years Experience
                  </p>
                </div>
                <div
                  className={`p-4 rounded-lg text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <p className="text-3xl font-bold text-indigo-600">200+</p>
                  <p
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Projects Completed
                  </p>
                </div>
                <div
                  className={`p-4 rounded-lg text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <p className="text-3xl font-bold text-indigo-600">100%</p>
                  <p
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
