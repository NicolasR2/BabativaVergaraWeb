import React from 'react'
import './ServicesStyle.css'

function AsesJuridicas() {
  return (
    <div className='srv-container'>
    <section className='srv-intro'>
      <h1 className='srv-title title'> Asesoría jurídica </h1>
    </section>
    <section className='section_blue srv-txt-intro-container'>
      <p className='srv-txt-intro'>En Babativa & Vergara Abogados ofrecemos asesoría jurídica integral a empresas y particulares en diversas áreas del derecho. Nuestro equipo especializado brinda orientación legal personalizada para ayudar a nuestros clientes a tomar decisiones informadas, garantizando el cumplimiento de la normativa vigente y la protección de sus intereses.</p>
    </section>
    <section className='section_white srv-what-is-container'>
      <h2 className='srv-what-is-h2'>Que es?</h2>
      <div className='linea-srv'></div>
      <p className='srv-what-is-p'> La asesoría jurídica es el servicio profesional que proporciona orientación legal a individuos o empresas en diversos temas relacionados con la ley. En la práctica, una asesoría jurídica puede abarcar desde consultas sobre contratos, procedimientos legales, cumplimiento normativo, hasta la prevención de conflictos y la gestión de riesgos legales. Este servicio es clave para tomar decisiones informadas y garantizar que las acciones de los clientes estén dentro del marco legal, minimizando posibles complicaciones futuras y protegiendo sus derechos e intereses en cualquier ámbito legal.</p>
    </section>
  </div>
  )
}

export default AsesJuridicas