function Formulario() {
    return (
      <>
        <h2>Crear mi Cita</h2>
  
        <form>
          <label>Nombre Mascota</label>
          <input type="text" className="u-full-width" />
  
          <label>Nombre Dueño</label>
          <input type="text" className="u-full-width" />
  
          <label>Fecha</label>
          <input type="date" className="u-full-width" />
  
          <label>Hora</label>
          <input type="time" className="u-full-width" />
  
          <label>Sintomas</label>
          <textarea className="u-full-width"></textarea>
  
          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </>
    );
  }
  
  export default Formulario;