import './App.css';
import BackgroundBalls from './componets/BackgroundBalls';
import ContenedorTarjetas from './componets/ContenedorTarjetas';
import EditorTarjeta from './componets/EditorTarjeta';

function App() {
  return (
    <div className="App appContainer background">
      <BackgroundBalls/>
      <EditorTarjeta />
      <ContenedorTarjetas />
    </div>
  );
}

export default App;
