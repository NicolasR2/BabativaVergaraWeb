import React from 'react'
import "../../Fonts.css"
import "../../Home/components/FindUs.css"
import './estilosNosotros.css'


function Persona1() {
  return (
    <div className="fu-container">
      <div className='fu-text'>
      <h1 className='fu-title'> Luis Antoncio Babativa Vergara </h1>
      <a className='fu-street'> Especialista en derecho judicial</a>
      <a className='fu-build'> Mas de 15 años de experiencia</a>
      <a className='fu-office'> BabativayVergara@gmail.com</a>
      <a className='fu-country'><em>Bogotá D.C. Colombia</em></a>
      </div>
      <div className='fu-map'>
        <div className='map'></div>
      </div>
    </div>
  )
}

export default Persona1