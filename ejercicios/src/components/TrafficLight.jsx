

/*
import { useState } from "react"
import Light from "./Light"


const TrafficLight = () => {
const [active, setActive] = useState('grey')

  return (
    <div>
     <Light onClick={()=>setActive('red')} color='red'/>
     <Light onClick={()=>setActive('yellow')} color='yellow'/>
     <Light onClick={()=>setActive('green')} color='green'/>      
    </div>
  )
}

export default TrafficLight

*** ejercicio que realizaron en clase compañeras ***
*/


//---Este componente gestionará el estado de cuál luz está activada. Cuando se haga clic en una luz, se cambiará el estado para reflejar qué luz se está mostrando. Además, cuando se haga clic en otra luz, la anterior se desactivará (se pondrá gris).

import { useState } from 'react';
import Light from './Light';  // Importamos el componente Light

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);  // Estado para gestionar la luz activa

  // Función que se ejecuta cuando se hace clic en una luz
  const handleClick = (color) => {
    // Si la luz clickeada ya está activa, la apagamos, si no, la activamos
    setActiveLight(activeLight === color ? null : color);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '2px solid black',
        borderRadius: '10px',
      }}
    >
      <h2>Semáforo</h2>
      {/* Renderizamos las luces */}
      {['red', 'yellow', 'green'].map((color) => (
        <Light
          key={color}
          color={color}  // El color correspondiente (rojo, amarillo, verde)
          isActive={activeLight === color}  // Si la luz es la activa, estará encendida
          onClick={() => handleClick(color)}  // Llama a handleClick con el color
        />
      ))}
    </div>
  );
};

export default TrafficLight;