// src/components/ContactSection.jsx
import React from 'react'
import { Phone, Mail } from 'lucide-react'
import ContactForm from './ContactForm'

const ContactSection = ({ darkMode }) => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p
                className={`text-lg mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Ready to transform your space? Contact us today for a free
                consultation and estimate. We're here to bring your vision to
                life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${
                      darkMode
                        ? 'bg-gray-800 text-indigo-400'
                        : 'bg-indigo-100 text-indigo-600'
                    }`}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p
                      className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      (651) 263-0757
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      Monday-Friday, 8am-6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${
                      darkMode
                        ? 'bg-gray-800 text-indigo-400'
                        : 'bg-indigo-100 text-indigo-600'
                    }`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p
                      className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      humberto63382@gmail.com
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
