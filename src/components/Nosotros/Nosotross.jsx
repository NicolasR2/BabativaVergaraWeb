
import React from 'react';
import Persona1 from "./components/Persona1.jsx";
import Persona2 from "./components/Persona2.jsx";
import Persona3 from "./components/Persona3.jsx";

import './components/estilosNosotros.css'


function Nosotross() {
  return (
    <div>
      <section className='nos-head'>
        
      </section>
      <section className='section_white srv-what-is-container'>
        <h2 className='srv-what-is-h2'>Babativa & Vergara</h2>
        <div className='linea-srv'></div>
        <p className='srv-what-is-p'> Somos una firma familiar con años de trayectoria en el ámbito jurídico. Nuestra experiencia y compromiso nos han permitido consolidarnos como un referente en el sector, ofreciendo servicios legales de alta calidad a una amplia variedad de clientes. Nos enorgullece contar con un equipo de profesionales dedicados que comprenden las necesidades de nuestros clientes y brindan soluciones personalizadas. Nuestra filosofía se basa en la confianza, la ética y el acompañamiento constante, asegurando que cada cliente reciba la atención y el apoyo legal que merece.</p>
      </section>
      <section className='section_white srv-what-is-container'>
          <div>
              <h2 areas-title title > Nuestro equipo</h2>
          </div>
          </section>
          <div>
            <section className="section_white srv-what-is-container">
            <Persona1/>
            </section>
          </div>
          <div>
            <section className="section_white srv-what-is-container">
            <Persona2/>
            </section>
          </div>
          
        
        
        
          
        

    </div>
  )
}

export default Nosotross;
