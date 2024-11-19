import { useState } from 'react';
import { elements } from  '../dataBase'

const Carrusel = () => {

    const [indexDelarray, setIndexDelarray] = useState(0);
    
    const adelante = () => {

       setIndexDelarray ((prev)=>prev + 1 < elements.length ? (prev + 1 ): (0))
        
    }
   
    const atras = () => {
         setIndexDelarray((prev) =>
           prev  === 0 ? (elements.length - 1 ): prev - 1
         );

    };

    return (
      
    <div>
      <h1>Carrusel</h1>
      <div>
        <img
          src={elements[indexDelarray].src}
          alt={elements[indexDelarray].alt}
          className="imagen"
        />
      </div>
      <button onClick={atras}>Ver anterior</button>
      <button onClick={adelante}>Ver siguiente</button>
    </div>
  );
}

export default Carrusel