import React, { useEffect, useRef } from 'react';
import VanillaTilt from "vanilla-tilt"


function TarjetaContacto({ nombre, correo, telefono, enlaceContacto, colores }) {

    const tiltRef = useRef(null);
    const tiltInstance = useRef(null);

    useEffect(() => {
        // Inicializa Vanilla Tilt y guarda la instancia
        tiltInstance.current = VanillaTilt.init(tiltRef.current, {
            max: 20,
            // startX: 5,
            // startY: 5,
            speed: 300,
            scale: 1.05,
            transition: true,
            glare: true,
            gyroscope: true,   // Boolean to enable/disable device orientation detection,
            'max-glare': 0.5,
        });

        return () => tiltRef.current?.destroy();
    }, []);

    function asignarColor() {
        if (colores.azul) {
            return "azul"
        } else if (colores.rojo) {
            return "rojo"
        } else if (colores.morado) {
            return "morado"
        } else {
            return "verde"
        }
    }

    const color = asignarColor()

    return (
        <section ref={tiltRef} className={`tarjeta tarjeta--${color}`}>
            <div className={`tarjeta__cont tarjeta__cont--${color}`}>
                <div className="tarjeta__linkCont">
                    <span className="tarjeta__span tarjeta__span--telefono">☎ {telefono}</span>
                    <a className={`btn tarjeta__a btn--${color}`} href={enlaceContacto} target="_blank">↗ Ver CV</a>
                </div>
                <div className="tarjeta__textCont">
                    <h1 className={`tarjeta__h1 tarjeta__h1--${color}`}>{nombre}</h1>
                    <span className="tarjeta__span tarjeta__span--correo">{correo}</span>
                    <button className={`btn tarjeta__button btn--${color}`}>Ver perfil completo</button>
                </div>
            </div>
        </section>
    )
}

export default TarjetaContacto;