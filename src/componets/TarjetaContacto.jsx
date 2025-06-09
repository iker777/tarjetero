function TarjetaContacto({nombre, correo, telefono, enlaceContacto}){
    return(
        <section className="tarjeta">
            <div className="tarjeta__cont">
                <div className="tarjeta__linkCont">
                    <span className="tarjeta__span tarjeta__span--telefono">☎ {telefono}</span>
                    <a className="btn tarjeta__a" href={enlaceContacto} target="_blank">↗ Ver CV</a>
                </div>
                <div className="tarjeta__textCont">
                    <h1 className="tarjeta__h1">{nombre}</h1>
                    <span className="tarjeta__span tarjeta__span--correo">{correo}</span>
                    <button className="btn tarjeta__button">Ver perfil completo</button>
                </div>
            </div>
        </section>
    )
}

export default TarjetaContacto;