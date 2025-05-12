// src/components/ServicesSection.jsx
import React from 'react'
import ServiceCard from './ServiceCard'

const ServicesSection = ({ darkMode }) => {
  const services = [
    {
      id: 1,
      title: 'Interior Painting',
      description:
        'Professional painting services with premium quality paints and expert color consultation.',
      image: '/images/service-painting.png',
    },
    {
      id: 2,
      title: 'Drywall Installation',
      description:
        'Expert drywall installation, repair, and finishing for walls and ceilings.',
      image: '/images/service-drywall.png',
    },
    {
      id: 3,
      title: 'Texture Application',
      description:
        'Custom texture application to match existing surfaces or create new designs.',
      image: '/images/service-texture.png',
    },
    {
      id: 4,
      title: 'Drywall Repair',
      description: 'Patch and repair damaged drywall for a seamless finish.',
      image: '/images/drywall-repair.png',
    },
    {
      id: 5,
      title: 'Ceiling Work',
      description:
        'Ceiling installation, repair, and custom designs including popcorn removal.',
      image: '/images/ceiling-work.png',
    },
    {
      id: 6,
      title: 'Custom Finishes',
      description:
        'Specialty painting techniques and custom finishes for unique interior spaces.',
      image: '/images/custom-finishes.png',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            We provide comprehensive interior renovation services with a focus
            on quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
