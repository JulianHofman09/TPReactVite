import Cita from "./Cita";

function ListaCitas({ citas, setCitas }) {
  return (
    <>
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} index={index} setCitas={setCitas} citas={citas} />
      ))}
    </>
  );
}

export default ListaCitas;