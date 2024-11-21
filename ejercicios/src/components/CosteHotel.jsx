import style from './Components.module.css'

export const CosteHotel = ({ night }) => {
  console.log(style.prueba)
  console.log(style.test)
  console.log(style)


  const coste = 140;

  let costeTotal = night * coste;
  return (
    <div>
      <h4 className={style.test}>Costo total de estadía</h4>
      <p className={style.prueba}>
        El coste de su estadía por {night} noches y alquiler de vehiculo seria : $
        <span style={{ color: "red" }}>{costeTotal}</span>
      </p>
    </div>
  );
};