// src/components/ProjectsSection.jsx
import React from 'react'
import { ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Modern Living Room Transformation',
      category: 'Painting',
      image: '/images/project-livingroom.png',
    },
    {
      id: 2,
      title: 'Custom Textured Ceiling',
      category: 'Drywall & Texture',
      image: '/images/project-ceiling.png',
    },
    {
      id: 3,
      title: 'Home Office Renovation',
      category: 'Full Interior',
      image: '/images/project-office.png',
    },
    {
      id: 4,
      title: 'Bedroom Accent Wall',
      category: 'Custom Painting',
      image: '/images/project-bedroom.png',
    },
  ]

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent Projects
          </h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Browse through some of our recent work to see the quality and
            craftsmanship we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className={`inline-flex items-center px-8 py-3 rounded-full font-medium transition-colors ${
              darkMode
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}>
            Discuss Your Project
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
