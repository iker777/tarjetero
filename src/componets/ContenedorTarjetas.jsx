import TarjetaContacto from "./TarjetaContacto";


function ContenedorTarjetas({nombre, correo, telefono, link, colores}) {
    return (
        <section className="contenedorTarjetas">
            <TarjetaContacto
                nombre={nombre}
                correo={correo}
                telefono={telefono}
                enlaceContacto={link}
                colores={colores}
            />
        </section>
    )
}

export default ContenedorTarjetas;