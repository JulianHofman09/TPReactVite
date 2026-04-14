import Cita from "./Cita";

function ListaCitas(props) {
  return (
    <>
      <h2>Administra tus citas</h2>
      {props.citas.map((cita, index) => (
        <Cita key={index} cita={cita} index={index} setCitas={props.setCitas} citas={props.citas} />
      ))}
    </>
  );
}

export default ListaCitas;