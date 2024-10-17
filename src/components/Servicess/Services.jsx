import React from 'react'
import CtmIntro from './components/CtmIntro.jsx'
import CtmRef from './components/CtmRef.jsx'
import SrvIntro from './components/SrvIntro.jsx'
import SrvAreas from './components/SrvAreas.jsx'

function Services() {
  return (
    <div>
      <section className='ctm-title'>
        <div>
            <p className='Cus-title title' >Conoce a <em> nuestro </em> equipo</p>
        </div>
      </section>
      <section className="section_blue section-intro">
        <SrvIntro/>
      </section>
      <section className="section_white section-">
        <SrvAreas/>
      </section>
      <section className="section_blue section-intro">
        <CtmIntro/>
      </section>
      <section className="section_white section-intro">
        <CtmRef/>
      </section>
    </div>
  )
}

export default Services