import TarjetaContacto from "./TarjetaContacto";


function ContenedorTarjetas({nombre, correo, telefono, link}) {
    return (
        <section className="contenedorTarjetas">
            <TarjetaContacto
                nombre={nombre}
                correo={correo}
                telefono={telefono}
                enlaceContacto={link}
            />
        </section>
    )
}

export default ContenedorTarjetas;