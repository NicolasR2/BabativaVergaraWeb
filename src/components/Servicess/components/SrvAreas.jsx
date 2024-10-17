import React from 'react'
import { services1 } from '../../../assets/data'
import { services2 } from '../../../assets/data'

import './SrvAreas.css'
import { Link } from 'react-router-dom';

const groupedServices = {
    "Asesoramiento Legal": [
        services1.find(service => service.title === "Derecho laboral"),
        services1.find(service => service.title === "Derecho Tributario"),
        services2.find(service => service.title === "Asesorías Jurídicas")
    ],
    "Gestión y Administración": [
        services2.find(service => service.title === "Administración y Cobro de Cartera")
    ],
    "Resolución de Conflictos": [
        services2.find(service => service.title === "Prevención \ny Resolución de Controversias")
    ],
    "Regulación y Cumplimiento": [
        services1.find(service => service.title === "Derecho administrativo"),
        services2.find(service => service.title === "Superintendencias")
    ]
};

function SrvAreas() {
    const groupedServices = {
      "Asesoramiento Legal": [
        { id: 'DerLaboral', title: "Derecho Laboral" },
        { id: 2, title: "Derecho Tributario" },
        { id: 3, title: "Asesorías Jurídicas" }
      ],
      "Gestión y Administración": [
        { id: 4, title: "Administración y Cobro de Cartera" }
      ],
      "Resolución de Conflictos": [
        { id: 5, title: "Prevención y Resolución de Controversias" }
      ],
      "Regulación y Cumplimiento": [
        { id: 6, title: "Superintendencias" },
        { id: 7, title: "Derecho Administrativo" }
      ]
    };
  
    return (
      <div className='container-areas'>
          <div>
              <p areas-title title>Áreas de práctica</p>
          </div>
          <div className='areas'>
              <div className='Areas-1 A'>
                  <h2>Asesoramiento Legal</h2>
                  <ul className='areas-container'>
                      {groupedServices["Asesoramiento Legal"].map(service => (
                        <li key={service.id}>
                          <Link to={`/servicios/${service.id}`}>{service.title}</Link>
                        </li>
                      ))}
                  </ul>
              </div>

              <div className='Areas-2 B'>
                  <h2>Gestión y Administración</h2>
                  <ul className='areas-container'>
                      {groupedServices["Gestión y Administración"].map(service => (
                        <li key={service.id}>
                          <Link to={`/servicios/${service.id}`}>{service.title}</Link>
                        </li>
                      ))}
                  </ul>
              </div>

              <div className='Areas-3 A'>
                  <h2>Resolución de Conflictos</h2>
                  <ul className='areas-container'>
                      {groupedServices["Resolución de Conflictos"].map(service => (
                        <li key={service.id}>
                          <Link to={`/servicios/${service.id}`}>{service.title}</Link>
                        </li>
                      ))}
                  </ul>
              </div>

              <div className='Areas-4 B'>
                  <h2>Regulación y Cumplimiento</h2>
                  <ul className='areas-container'>
                      {groupedServices["Regulación y Cumplimiento"].map(service => (
                        <li key={service.id}>
                          <Link to={`/servicios/${service.id}`}>{service.title}</Link>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
    );
  }

export default SrvAreas