import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Babativa &amp; Vergara. Todos los derechos reservados.</p>
        <ul className='footer-links'>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="#">Política de Privacidad</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
