import "./Cita.css";
function Cita({ cita, index, citas, setCitas }) {

  const handleEliminar = () => {
    const confirmar = confirm("¿Eliminar esta cita?");

    if (confirmar) {
      const nuevaLista = [];

      for (let i = 0; i < citas.length; i++) {
        if (i !== index) {
          nuevaLista.push(citas[i]);
        }
      }

      setCitas(nuevaLista);
    }
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>
      <button className="button eliminar u-full-width" onClick={handleEliminar}>
        Eliminar ×
      </button>
    </div>
  );
}

export default Cita;