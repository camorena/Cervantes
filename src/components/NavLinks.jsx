// src/components/NavLinks.jsx
import React from 'react'
import { Home, Briefcase, Image, Users } from 'lucide-react'

const NavLinks = ({ darkMode, mobile, setMobileMenuOpen }) => {
  const links = [
    { name: 'Home', href: '#', icon: <Home size={mobile ? 20 : 16} /> },
    {
      name: 'Services',
      href: '#services',
      icon: <Briefcase size={mobile ? 20 : 16} />,
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: <Image size={mobile ? 20 : 16} />,
    },
    { name: 'About', href: '#about', icon: <Users size={mobile ? 20 : 16} /> },
  ]

  return (
    <nav
      className={
        mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'
      }>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => mobile && setMobileMenuOpen(false)}
          className={`transition-colors flex items-center ${
            mobile ? 'py-2' : ''
          } ${
            darkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-indigo-600'
          }`}>
          <span className="mr-2">{link.icon}</span>
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default NavLinks
