import { useState } from "react";
import "./Formulario.css";

function Formulario(props) {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  // VALIDACIÓN
  if (
    mascota.trim() === "" ||
    propietario.trim() === "" ||
    fecha.trim() === "" ||
    hora.trim() === "" ||
    sintomas.trim() === ""
  ) {
    setError(true);
    return;
  }

  setError(false);

  const nuevaCita = {
    mascota,
    propietario,
    fecha,
    hora,
    sintomas
  };

  const nuevaLista = props.citas.concat(nuevaCita);
  props.setCitas(nuevaLista);


  setMascota("");
  setPropietario("");
  setFecha("");
  setHora("");
  setSintomas("");
};

  return (
    <>
      <h2>Crear mi Cita</h2>
      {error && <p className="alerta-error">Todos los campos son obligatorios</p>}
      <form onSubmit={handleSubmit}>

        <label>Nombre Mascota</label>
        <input type="text" className="u-full-width" value={mascota}
          onChange={(e) => setMascota(e.target.value)} />

        <label>Nombre Dueño</label>
        <input type="text" className="u-full-width" value={propietario}
          onChange={(e) => setPropietario(e.target.value)} />

        <label>Fecha</label>
        <input type="date" className="u-full-width" value={fecha}
          onChange={(e) => setFecha(e.target.value)} />

        <label>Hora</label>
        <input type="time" className="u-full-width" value={hora}
          onChange={(e) => setHora(e.target.value)} />

        <label>Sintomas</label>
        <textarea className="u-full-width" value={sintomas}
          onChange={(e) => setSintomas(e.target.value)} />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>

      </form>
    </>
  );
}

export default Formulario;