// src/components/LogoCompact.jsx
import React from 'react'

const LogoCompact = ({ className = '', darkMode = false }) => {
  // Colors from the website screenshot - updated with vibrant colors
  const colors = {
    mainBlue: '#1e3a8a', // Dark blue for house structure
    accentPurpleBlue: '#5046e5', // Vibrant purple-blue for horizontal line
    accentPurple: '#6c4ee5', // Purple for service text

    // Color adjustments for dark mode
    darkModeMainBlue: '#4361ee',
    darkModeAccentBlue: '#6c4ee5',
  }

  // Get the appropriate colors based on mode
  const mainColor = darkMode ? colors.darkModeMainBlue : colors.mainBlue
  const lineColor = darkMode
    ? colors.darkModeAccentBlue
    : colors.accentPurpleBlue
  const textColor = darkMode ? colors.darkModeAccentBlue : colors.accentPurple

  return (
    <div className={className}>
      <div className="w-full flex flex-col items-center">
        {/* SVG for house icon only */}
        <svg
          viewBox="0 0 100 70"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="mb-1">
          {/* House Icon - Using updated vibrant colors */}
          <g>
            {/* Roof */}
            <path
              d="M10,40 L50,10 L90,40"
              fill="none"
              stroke={mainColor}
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Vertical Supports */}
            <line
              x1="25"
              y1="40"
              x2="25"
              y2="70"
              stroke={mainColor}
              strokeWidth="6"
              strokeLinecap="round"
            />

            <line
              x1="75"
              y1="40"
              x2="75"
              y2="70"
              stroke={mainColor}
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Horizontal Line - Now using vibrant purple-blue */}
            <line
              x1="15"
              y1="50"
              x2="85"
              y2="50"
              stroke={lineColor}
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Bottom Line */}
            <line
              x1="25"
              y1="70"
              x2="75"
              y2="70"
              stroke={mainColor}
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* Company Name as HTML */}
        <div
          className="text-center font-bold text-sm mb-0.5"
          style={{ color: mainColor }}>
          CERVANTES
        </div>

        {/* Services text using purple color */}
        <div
          className="text-center text-[7px] font-semibold tracking-wide flex items-center justify-center space-x-0.5"
          style={{ color: textColor }}>
          <span>RENOVATION</span>
          <span>•</span>
          <span>PAINTING</span>
          <span>•</span>
          <span>DRYWALL</span>
        </div>
      </div>
    </div>
  )
}

export default LogoCompact
