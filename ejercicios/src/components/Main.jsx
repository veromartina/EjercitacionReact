import Button from './Button';
import Button1 from './Button1';

const Main = () => {
  const titulo = "Bienvenido a Mi Proyecto";
  const descripcion = "Este es un proyecto de ejemplo utilizando Vite y React.";
  const numero = 42; // Ejemplo de variable numérica
  const texto = "¡Espero que te guste!"; // Otro string

  const estilosH1 = {  //objeto para darle estilo al tutulo h1
    color: "blue",
    fontSize: "24px",
  };

  return (
    <div style={{background:"pink", textAlign:"center", margin:"30px", padding:"20px"}}>
      <Button1 color="orange" texto="Boton 4"/>
      <h1 style={estilosH1}>{titulo}</h1>
      <p>{descripcion}</p>
      <span>visitas: {numero}</span>
      <p>{texto}</p>

      <div>
        <Button color="red" texto="Botón 1" isEnabled={true} />
        <Button color="green" texto="Botón 2" isEnabled={true} />
        <Button color="blue" texto="Botón 3" isEnabled={false} /> {/*al poner falso deshabilitaria el boton */}
      </div>
     
    </div>
  );
};

export default Main;
