import React from 'react';
import { services1, services2 } from '../../../assets/data';
import './SrvAreas.css';
import { Link } from 'react-router-dom';

const groupedServices = {
  "Asesoramiento Legal": [
    { id: 'DerLaboral', title: "Derecho Laboral" },
    { id: 'DerTributario', title: "Derecho Tributario" },
    { id: 'AsesJuridicas', title: "Asesorías Jurídicas" }
  ],
  "Gestión y Administración": [
    { id: 'AdminCobro', title: "Administración y Cobro de Cartera" }
  ],
  "Resolución de Conflictos": [
    { id: 'PrevResolucion', title: "Prevención y Resolución de Controversias" }
  ],
  "Regulación y Cumplimiento": [
    { id: 'DerechoAdmin', title: "Derecho Administrativo" },
    { id: 'Superintenl', title: "Superintendencias" }
  ]
};

function SrvAreas() {
  return (
    <div className='container-areas'>
      <h1 className="areas-title">Áreas de práctica</h1>
      <div className='areas'>
        {Object.keys(groupedServices).map((category, index) => (
          <div key={index} className={`area-box ${index % 2 === 0 ? 'A' : 'B'}`}>
            <h2>{category}</h2>
            <ul className='areas-container'>
              {groupedServices[category].map(service => (
                <li key={service.id} className="service-item">
                  <Link to={`/servicios/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SrvAreas;
