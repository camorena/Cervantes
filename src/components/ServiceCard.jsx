// src/components/ServiceCard.jsx
import React from 'react'
import { ChevronRight } from 'lucide-react'

const ServiceCard = ({ service, darkMode }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 h-full transform hover:-translate-y-2 ${
        darkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg'
      }`}>
      <div className="relative pb-[56.25%]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
          {service.description}
        </p>
        <a
          href="#contact"
          className={`inline-flex items-center font-medium transition-colors ${
            darkMode
              ? 'text-indigo-400 hover:text-indigo-300'
              : 'text-indigo-600 hover:text-indigo-800'
          }`}>
          Request Service
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  )
}

export default ServiceCard
