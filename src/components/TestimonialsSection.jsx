// src/components/TestimonialsSection.jsx
import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialsSection = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content:
        'Cervantes Drywall & Painting transformed our living room with impeccable workmanship. Their attention to detail and professionalism exceeded our expectations.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Interior Designer',
      content:
        'I haveve worked with Cervantes on multiple projects, and they consistently deliver exceptional quality. Their expertise in texture application is second to none.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer Lee',
      role: 'Real Estate Agent',
      content:
        'My clients are always impressed with the work Cervantes does. Their painting services add significant value to properties and help sell homes faster.',
      rating: 5,
    },
  ]

  return (
    <section
      className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
