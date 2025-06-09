function TarjetaContacto({nombre, correo, telefono, enlaceContacto, colores}){

    function asignarColor(){
        if(colores.azul){
            return "azul"
        }else if(colores.rojo){
            return "rojo"
        }else if(colores.morado){
            return "morado"
        }else{
            return "verde"
        }
    }

    const color = asignarColor()

    return(
        <section className={`tarjeta tarjeta--${color}`}>
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