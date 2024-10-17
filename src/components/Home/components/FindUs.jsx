import React from 'react'
import "../../Fonts.css"
import "./FindUs.css"

function FindUs() {
  return (
    <div className='findus-container'>
      <div className='fu-text'>
      <h1 className='fu-title'> Encuentrenos </h1>
      <a className='fu-street'> Calle 19 # 5 – 51 </a>
      <a className='fu-build'> Edificio Valdes</a>
      <a className='fu-office'> Oficina 1102</a>
      <a className='fu-country'><em>Bogotá D.C. – Colombia</em></a>
      </div>
      <div className='fu-map'>
        <div className='map'></div>
      </div>
    </div>
  )
}

export default FindUs
