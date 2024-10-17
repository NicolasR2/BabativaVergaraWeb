import React, { useEffect, useRef, useState } from 'react'
import { data } from '../../../assets/data';
import './Carousel.css';
import "../../Fonts.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft, faCircle } from '@fortawesome/free-solid-svg-icons'

function Carousel() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);  // Para almacenar el intervalo

    // Desplazamiento suave cuando cambia la imagen
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        
        if (imgNode) {
            const imgLeftPosition = imgNode.offsetLeft;
            listNode.scrollTo({
                left: imgLeftPosition,
                behavior: "smooth"
            });
        }
    }, [currentIndex]);

    // Función para avanzar a la siguiente imagen
    const scrollToImage = (direction) => {
        setCurrentIndex(curr => {
            if (direction === 'prev') {
                const isFirstSlide = curr === 0;
                return isFirstSlide ? data.length - 1 : curr - 1;
            } else {
                const isLastSlide = curr === data.length - 1;
                return isLastSlide ? 0 : curr + 1;
            }
        });
    }
    
    // Función para ir a una imagen específica
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    // Configura el cambio automático de imágenes
    useEffect(() => {
        // Establecer un intervalo para cambiar de imagen cada 3 segundos (ajustable)
        intervalRef.current = setInterval(() => {
            scrollToImage('next');
        }, 5000);  // Cambia cada 3000ms = 3 segundos

        // Limpiar el intervalo cuando se desmonte el componente
        return () => clearInterval(intervalRef.current);
    }, []);

    // Opción para pausar el cambio automático si se hace clic en los botones
    const handleManualChange = (direction) => {
        clearInterval(intervalRef.current);  // Limpiar el intervalo
        scrollToImage(direction);            // Cambiar manualmente
        // Reiniciar el intervalo después de un tiempo tras la interacción
        intervalRef.current = setInterval(() => {
            scrollToImage('next');
        }, 3000);
    };

    return (
        <div className='main-main-container'>
            <div className='slider-container'>
                <div className='leftArrow' onClick={() => handleManualChange('prev')}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <div className='rightArrow' onClick={() => handleManualChange('next')}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>
                <div className='container-images'>
                    <ul ref={listRef}>
                        <div className='texts'>
                            <h1 className='Car-title'>{data[currentIndex].title}</h1>
                            <p className='Car-desc'>{data[currentIndex].desc}</p>
                        </div>
                        {
                            data.map((item) => (
                                <li key={item.id}>
                                    <img src={item.imgUrl} alt={item.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='dots-container'>
                    {
                        data.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`dot-container-item ${idx === currentIndex ? "active" : "inactive"}`}
                                onClick={() => goToSlide(idx)}
                            >
                                <FontAwesomeIcon className='pepita' icon={faCircle} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;
