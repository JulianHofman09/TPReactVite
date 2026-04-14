import { useState } from "react";
import "./Formulario.css";

function Formulario({ citas, setCitas }) {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //No se recarga la pagina cuando submiteas

    const nuevaCita = {
      mascota: mascota,
      propietario: propietario,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    };

    const nuevaLista = [];
    for (let i = 0; i < citas.length; i++) {
    nuevaLista.push(citas[i]);
    }
    nuevaLista.push(nuevaCita);
    setCitas(nuevaLista);

    setMascota("");
    setPropietario("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>

        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          className="u-full-width"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>

      </form>
    </>
  );
}

export default Formulario;