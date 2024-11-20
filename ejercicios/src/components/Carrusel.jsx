import { useState } from 'react';
import { elements } from  '../dataBase'

const Carrusel = () => {

    const [indexDelarray, setIndexDelarray] = useState(0);  //indexDelarray es el valor actual del estado, y en este caso, es un número que se usará para llevar un registro del índice de la imagen que se está mostrando,"setIndexDelarray" es la función que se usa para actualizar el valor de indexDelarray.
    //El valor inicial del estado se establece en 0, lo que significa que al principio se mostrará la primera imagen del array.
    
    const adelante = () => { // función que se ejecuta cuando el usuario hace clic en el botón de "Ver siguiente".

       setIndexDelarray ((prev)=>prev + 1 < elements.length ? (prev + 1 ): (0)) //setIndexDelarray actualiza el valor del estado indexDelarray.función que utiliza el valor anterior (prev) de indexDelarray para calcular el nuevo valor.
       //Si el índice anterior (prev) es menor que la longitud del array elements, se incrementa en 1.
      // Si prev es igual o mayor a la longitud de elements (es decir, estamos en la última imagen), se reinicia a 0 para volver al principio del carrusel.
        
    }
   
    const atras = () => {
         setIndexDelarray((prev) =>
           prev  === 0 ? (elements.length - 1 ): prev - 1
         ); //Si el índice actual es 0 (es decir, estamos mostrando la primera imagen), se establece el índice a elements.length - 1, lo que significa que se mostrará la última imagen.Si no estamos en la primera imagen, simplemente se decrementa el valor del índice en 1 para mostrar la imagen anterior.
        
    };
//Renderizado del componente:
    return (
      
    <div>
      <h1>Carrusel</h1>
      <div>
        <img
          src={elements[indexDelarray].src} //toma la propiedad src del objeto de la imagen correspondiente en el array elements. Esto determina la URL de la imagen que se va a mostrar.
          alt={elements[indexDelarray].alt}
          className="imagen" //Se asigna una clase CSS a la imagen para darle estilo.

        />
      </div>
      <button onClick={atras}>Ver anterior</button>  {/*botón con el texto "Ver anterior", tiene un evento onClick que llama a la función atras para mostrar la imagen anterior. */}
      <button onClick={adelante}>Ver siguiente</button>   {/*botón con el texto "Ver siguiente", tiene un evento onClick que llama a la función atras para mostrar la siguiente imagen . */}
    </div>
  );
}

export default Carrusel