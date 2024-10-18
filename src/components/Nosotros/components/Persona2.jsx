import React from 'react'
import "../../Fonts.css"
import "../../Home/components/FindUs.css"

function Persona2() {
  return (
    <div >
      <div className='fu-text'>
      <h1 className='fu-title'> Carlos Antnio Rodriguez </h1>
      <a className='fu-street'> Especialista en derecho penal  </a>
      <a className='fu-build'> Mas de 10 años de espriencia</a>
      <a className='fu-office'> carlos@gmail.com</a>
      <a className='fu-country'><em>Bogotá D.C. Colombia</em></a>
      </div>
      <div className='fu-map'>
        <div className='map'></div>
      </div>
    </div>
  )
}

export default Persona2