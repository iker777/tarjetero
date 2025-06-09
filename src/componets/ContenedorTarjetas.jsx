import TarjetaContacto from "./TarjetaContacto";


function ContenedorTarjetas() {
    return (
        <section className="contenedorTarjetas">
            <TarjetaContacto
                nombre="Iker"
                correo="iker@gmail.com"
                telefono="676676676"
                enlaceContacto="https://github.com/iker777"
            />
        </section>
    )
}

export default ContenedorTarjetas;