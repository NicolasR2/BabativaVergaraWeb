import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const links = [
  {
    name: "Inicio",
    href: "/"
  },
  {
    name: "Nosotros",
    href: "/About"
  },
  {
    name: "Servicios",
    href: "/Services"
  }
];

function HeaderVista() {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={headerRef} 
      className={`Nav-container ${isSticky ? 'is-sticky' : ''}`} 
    >
      <div className='logo-container'>
        <h2 className='He-title'>Babativa <em>&</em> Vergara</h2>
      </div>
      <div className='links-container'>
        {links.map(x => (
          <Link to={x.href} key={x.name}>{x.name}</Link>
        ))}
        
      </div>
    </div>
  );
}

export default HeaderVista;
