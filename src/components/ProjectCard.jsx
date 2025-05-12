// src/components/ProjectCard.jsx
import React from 'react'

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
        darkMode ? 'shadow-xl bg-gray-900' : 'shadow-xl bg-white'
      }`}>
      <div className="relative pb-[75%]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-2 ${
              darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white'
            }`}>
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
