// src/components/TestimonialCard.jsx
import React from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial, darkMode }) => {
  return (
    <div
      className={`rounded-xl p-6 h-full transition-all duration-300 transform hover:-translate-y-2 ${
        darkMode ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg'
      }`}>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-current text-yellow-400" />
        ))}
      </div>
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-medium">{testimonial.name}</h4>
          <p
            className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
