function EditorTarjeta(){
    return(
        <div className="editor">
            <div className="formContainer">
                <h1 className="formContainer__h1">Editar Tarjeta</h1>
                <form action="" className="form">
                    <label htmlFor="" className="form__label">Nombre:</label>
                    <input type="text" name="nombre" className="form__input" placeholder="Pato Kuak"/>
                    <label htmlFor="" className="form__label" >Correo:</label>
                    <input type="mail" name="correo" className="form__input" placeholder="pato@kuak.com"/>
                    <label htmlFor="" className="form__label">Teléfono:</label>
                    <input type="tel" name="telefono" className="form__input" placeholder="+676767767"/>
                </form>
            </div>
        </div>
    )
}

export default EditorTarjeta;