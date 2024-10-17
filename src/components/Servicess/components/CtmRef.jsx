import React from 'react'
import bancoAgr from '../../../assets/img/LogoBancoAgrario.png'
import { partners } from '../../../assets/data'
import './Customers.css'

function CtmRef() {
  return (
    <div className='references-container'>
        <p className='ctm-desc1 desc'>Nos complace presentarte a nuestro cliente actual, una empresa que ha confiado en nosotros para alcanzar sus objetivos y superar sus desafíos.</p>
            <a href="https://www.bancoagrario.gov.co/" className='link-image'><img src={bancoAgr} alt="Banco Agrario" /></a>
            <div className='linea'></div>
        <p className='ctm-desc4'> De igual manera, a lo largo de los años hemos tenido el privilegio de colaborar con una variedad de empresas que han confiado en nosotros para llevar a cabo proyectos significativos.</p>
        <ul className='container-logos'>
            {
                partners.map((item)=>(
                    <li key={item.id} className='datos'>
                        <a href={item.url} target="_blank" rel="noopener"  className='link-image'><img src={item.logo} alt={item.title}/></a>
                    </li>
                ))
            }    
        </ul>
    </div>
  )
}

export default CtmRef