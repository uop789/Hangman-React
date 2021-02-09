import React from 'react'

const Figure = ({ missLetters }) => {
  const errors = missLetters.length

  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="60" y1="20" x2="60" y2="50" />
      <line x1="140" y1="20" x2="140" y2="230" />
      <line x1="60" y1="230" x2="180" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 &&
        <circle cx="60" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {errors > 1 &&
        <line x1="60" y1="90" x2="60" y2="150" />
      }
      {/* <!-- Arms --> */}
      {errors > 2 &&
         <line x1="60" y1="120" x2="40" y2="100" />
      }
      {errors > 3 &&
        <line x1="60" y1="120" x2="80" y2="100" />
      }
      {/* <!-- Legs --> */}
      {errors > 4 &&
        <line x1="60" y1="150" x2="40" y2="180" />
      }
      {errors > 5 &&
        <line x1="60" y1="150" x2="80" y2="180" />
      }
    </svg>
  )
}

export default Figure