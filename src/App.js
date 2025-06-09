import './App.css';
import BackgroundBalls from './componets/BackgroundBalls';
import ContenedorTarjetas from './componets/ContenedorTarjetas';
import EditorTarjeta from './componets/EditorTarjeta';
import { useState } from "react";

function App() {

  const [nombre, setNombre] = useState("Pato Kuak")
  const [correo, setCorreo] = useState("pato@kuak.com")
  const [telefono, setTelefono] = useState("+76767676")
  const [link, setLink] = useState("https://github.com/iker777")

  return (
    <div className="App appContainer background">
      <BackgroundBalls />
      <EditorTarjeta
        setNombre={setNombre}
        setCorreo={setCorreo}
        setTelefono={setTelefono}
        setLink={setLink}
      />
      <ContenedorTarjetas
        nombre={nombre}
        correo={correo}
        telefono={telefono}
        link={link}
      />
    </div>
  );
}

export default App;
