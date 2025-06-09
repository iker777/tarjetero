function EditorTarjeta({ setNombre, setCorreo, setTelefono, setLink, colores, setColores }) {

    function handleChangeNombre(e) {
        setNombre(e.target.value)
    }

    function handleChangeCorreo(e) {
        setCorreo(e.target.value)
    }

    function handleChangeTelefono(e) {
        setTelefono(e.target.value)
    }
    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function cambiarColor(e) {
        setColores({
            rojo: false,
            azul: false,
            verde: false,
            morado: false,
            [e.target.id]: true,
        })
    }


    return (
        <div className="editor">
            <div className="formContainer">
                <h1 className="formContainer__h1">Editar Tarjeta</h1>
                <form action="" className="form">
                    <label htmlFor="" className="form__label">Nombre:</label>
                    <input type="text" name="nombre" className="form__input" placeholder="Pato Kuak" onChange={handleChangeNombre} />
                    <label htmlFor="" className="form__label" >Correo:</label>
                    <input type="mail" name="correo" className="form__input" placeholder="pato@kuak.com" onChange={handleChangeCorreo} />
                    <label htmlFor="" className="form__label">Teléfono:</label>
                    <input type="tel" name="telefono" className="form__input" placeholder="+676767767" onChange={handleChangeTelefono} />
                    <label htmlFor="" className="form__label">Link CV:</label>
                    <input type="text" name="link" className="form__input" placeholder="https://github.com/iker777" onChange={handleChangeLink} />
                    <label htmlFor="" className="form__label">Color tarjeta:</label>
                    <div className="form__colorContenedor">
                        <span id="azul" className={colores.azul ? `form__colorSwitch form__colorSwitch--azul active` : `form__colorSwitch form__colorSwitch--azul`} onClick={cambiarColor}></span>
                        <span id="rojo" className={colores.rojo ? `form__colorSwitch form__colorSwitch--rojo active` : `form__colorSwitch form__colorSwitch--rojo`} onClick={cambiarColor}></span>
                        <span id="morado" className={colores.morado ? `form__colorSwitch form__colorSwitch--morado active` : `form__colorSwitch form__colorSwitch--morado`} onClick={cambiarColor}></span>
                        <span id="verde" className={colores.verde ? `form__colorSwitch form__colorSwitch--verde active` : `form__colorSwitch form__colorSwitch--verde`} onClick={cambiarColor}></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditorTarjeta;