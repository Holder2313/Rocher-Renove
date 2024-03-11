import React from 'react'
import chambre from '../../assets/images/slider/chambre.webp'

export default function Banner() {
  return (
      <div className=' w-full h-[280px] bg-black mb-10 '>
          
              <img className=' h-full w-full object-cover opacity-80' src={chambre} alt="" />
          
    </div>
  )
}
