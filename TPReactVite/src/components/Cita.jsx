import "./Cita.css";

function Cita(props) {

  const handleEliminar = () => {
    const confirmar = confirm("¿Eliminar esta cita?");

    if (confirmar) {
      const nuevaLista = [];

      for (let i = 0; i < props.citas.length; i++) {
        if (i !== props.index) {
          nuevaLista.push(props.citas[i]);
        }
      }

      props.setCitas(nuevaLista);
    }
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{props.cita.mascota}</span></p>
      <p>Dueño: <span>{props.cita.propietario}</span></p>
      <p>Fecha: <span>{props.cita.fecha}</span></p>
      <p>Hora: <span>{props.cita.hora}</span></p>
      <p>Sintomas: <span>{props.cita.sintomas}</span></p>
      <button className="button eliminar u-full-width" onClick={handleEliminar}>
        Eliminar ×
      </button>
    </div>
  );
}

export default Cita;