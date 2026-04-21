import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

function App() {

  const [citas, setCitas] = useState(() => {
  const citasGuardadas = localStorage.getItem("citas");
  return citasGuardadas ? JSON.parse(citasGuardadas) : [];
});

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario citas={citas} setCitas={setCitas} />
          </div>

          <div className="one-half column">
            <ListaCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;