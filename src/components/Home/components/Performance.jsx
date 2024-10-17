import React from 'react'
import "./Performance.css"
import "../../Fonts.css"
import { services1, services2 } from '../../../assets/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'



function Performance() {
  return (
    <div className='performance-containe'>
      
      <h3><span>Campos</span><em>de</em><span>desempeño</span></h3>

      <p>Como firma de abogados nos desenvolvemos de distintas formas en el area legal, todo para brindarle un servicio de la mejor calidad a nuestros clientes y asociados.
      Estos son algunos de los campos en los que le podemos brindar ayuda, pulse en <em> Saber mas </em> para profundizar en ellos.</p>
      <div className='container-services'>
        <ul className='main-info-container services1'>
          {
            services1.map((item)=>(
                      <li key={item.id} className='info-container'>
                          <FontAwesomeIcon icon={item.icon} className='icon'/>
                          <a className='service-title Per-Title title'>{item.title}</a>
                          <a className='service-desc Per-desc desc'>{item.desc}</a>
                      </li>
                  ))
          }
        </ul>
        <ul className='main-info-container services2'>
          {
            services2.map((item)=>(
                      <li key={item.id} className='info-container'>
                          <FontAwesomeIcon icon={item.icon} className='icon'/>
                          <a className='service-title Per-Title title'>{item.title}</a>
                          <a className='service-desc Per-desc desc'>{item.desc}</a>
                      </li>
                  ))
          }
        </ul>
      </div>

      <button className='btn btn-performance'> <em> Saber mas </em> </button>
    </div>
  )
}

export default Performance