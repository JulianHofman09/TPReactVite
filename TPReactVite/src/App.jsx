import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>

          <div className="one-half column">
            <ListaCitas />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;