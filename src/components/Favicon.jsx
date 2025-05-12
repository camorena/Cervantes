import React from 'react'

const Favicon = ({ darkMode = false }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      {/* Simple square background for favicon */}
      <rect
        width="64"
        height="64"
        rx="0"
        fill={darkMode ? '#4338ca' : '#312e81'}
      />

      {/* Abstract C mark - simplified for favicon clarity */}
      <path
        d="M10,32 C10,20 20,10 32,10 L44,10 L44,22 L32,22 C26,22 22,27 22,32 C22,37 26,42 32,42 L44,42 L44,54 L32,54 C20,54 10,44 10,32 Z"
        fill="white"
      />

      {/* Simplified texture lines */}
      <line x1="35" y1="28" x2="50" y2="28" stroke="white" strokeWidth="2" />
      <line x1="35" y1="32" x2="50" y2="32" stroke="white" strokeWidth="2" />
      <line x1="35" y1="36" x2="50" y2="36" stroke="white" strokeWidth="2" />
    </svg>
  )
}

export default Favicon
