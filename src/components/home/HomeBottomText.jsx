import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 relative z-20 pb-8 px-4'>
      <p className='absolute hidden lg:block lg:w-[17vw] lg:right-20 lg:bottom-72 font-[font1] lg:text-lg lg:leading-relaxed'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      
      {/* Mobile description text */}
      <p className='lg:hidden text-center font-[font1] text-sm leading-relaxed mb-6 px-4 max-w-md'>
        K72 est une agence qui pense chaque action pour nourrir la marque. On cherche la friction qui crée l'étincelle pour générer de l'émotion.
      </p>
      
      <div className='touch-target lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-44 h-16 sm:h-20 md:h-24 flex items-center px-4 sm:px-6 lg:px-14 border-white rounded-full uppercase transition-all duration-300 cursor-pointer group active:scale-95'>
        <Link className='responsive-text-lg sm:text-xl md:text-2xl lg:text-[6vw] lg:mt-6 group-hover:scale-105 transition-transform duration-300 whitespace-nowrap' to='/projects'>Projects</Link>
      </div>
      <div className='touch-target lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-44 h-16 sm:h-20 md:h-24 flex items-center px-4 sm:px-6 lg:px-14 border-white rounded-full uppercase transition-all duration-300 cursor-pointer group active:scale-95'>
        <Link className='responsive-text-lg sm:text-xl md:text-2xl lg:text-[6vw] lg:mt-6 group-hover:scale-105 transition-transform duration-300 whitespace-nowrap' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText