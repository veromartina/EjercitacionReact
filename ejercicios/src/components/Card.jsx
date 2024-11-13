import { questions } from "../components/dataBase/dataBase"; //questions es un arreglo de objetos que contiene las preguntas y sus posibles respuestas.

import { useState } from "react";  //useState: Es un hook de React que permite agregar estado a un componente funcional. Se usa para almacenar y actualizar valores en el componente.

const Card = () => {   //Este es un componente funcional de React. Dentro de este componente se gestionan los estados del cuestionario (como la pregunta actual, la respuesta seleccionada, etc.).

  const [respuesta, setRespuesta] = useState(""); //respuesta: Almacena la respuesta seleccionada por el usuario (inicialmente vacía).
  const [preguntaActual, setPreguntaActual] = useState(0);  //reguntaActual: Almacena el índice de la pregunta que se está mostrando actualmente (inicialmente 0, es decir, la primera pregunta).
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);// booleans que indican si la respuesta seleccionada es correcta o incorrecta.
  const [respuestaIncorrecta, setRespuestaIncorrecta] = useState(false); // booleans que indican si la respuesta seleccionada es correcta o incorrecta.

  const data = questions[preguntaActual];  //Aquí se obtiene la pregunta actual desde el arreglo questions. Se usa el valor de preguntaActual como índice para acceder a la pregunta correspondiente. data ahora es un objeto que contiene la información de la pregunta actual.

  const validarFormulario = (e) => {  //la función que se ejecuta cuando el usuario envía el formulario.
    e.preventDefault();   //evita que la página se recargue al enviar el formulario (el comportamiento por defecto de un formulario HTML).
    if (!respuesta) {
      alert("Debes seleccionar una opción!");
    }

    const answer = data.answers.find((answer) => answer.id === respuesta); //Se busca en las respuestas posibles (data.answers) la que tenga el mismo id que la respuesta seleccionada (respuesta).
    if (answer.correct) {   //Si la respuesta seleccionada es correcta (answer.correct), se actualizan los estados:
      setRespuestaCorrecta(true); //Marca la respuesta como correcta.
      setRespuestaIncorrecta(false); //Asegura que la respuesta incorrecta esté en false.
      
      if (preguntaActual + 1 < questions.length) {
        setPreguntaActual((preguntaActual) => preguntaActual + 1);  //si la pregunta actual no es la última se avanza a la siguiente pregunta incrementando el índice 
      } else {   //Si es la última pregunta, se muestra un mensaje de felicitación y se reinicia el cuestionario,Se restablecen los estados 
        alert("¡Felicidades! Has completado el cuestionario.");
        setPreguntaActual(0);
        setRespuestaCorrecta(false);
        setRespuestaIncorrecta(false);
      }
    } else {  //Si la respuesta seleccionada no es correcta, se actualizan los estados:

      setRespuestaIncorrecta(true)  //Marca la respuesta como incorrecta.
      setRespuestaCorrecta(false) // Asegura que la respuesta correcta esté en false.
      
    }
  };
//Renderizado del componente.Este es el JSX que define cómo se va a ver el componente en el navegador:
  return (
    <div
      style={{
        backgroundColor: "pink",
        padding: "15px",
        border: "solid 3px black",
        width: "300px",
        height: "300px",
      }}
    >
      <h3 style={{ color: "blue" }}>Preguntas y Respuestas</h3>  {/*<h3> y <p>: Muestra el título y la pregunta actual (data.question).*/}
      <p style={{ fontSize: "15px", color: "black", margin: "30px" }}>
        {data.question}
      </p>
      <form onSubmit={validarFormulario}>
       {/* select:Muestra una lista de respuestas posibles obtenidas de data.answers.*/}
        <select
          onChange={(e) => {
            setRespuesta(e.target.value);
          }}
        >
          <option>Seleccionar...</option>
          {data.answers.map((answer) => (
            <option value={answer.id} key={answer.id}>
              {answer.text}
            </option>
          ))}
        </select>

        <div style={{ marginTop: "15px" }}>
          <button
            type="submit"
            style={{ marginTop: "6px", backgroundColor: "goldenrod",width:"70px", alignItems:"center" }}
          >
            Ok
          </button>
        </div>
        {respuestaCorrecta && (
          <p style={{ color: "green", fontSize: "20px", width: "100%" }}>
            ¡Respuesta Correcta! 😁
          </p>
        )}
        {respuestaIncorrecta && (
          <p style={{ color: "red", fontSize: "20px", width: "100%" }}>
            ¡Respuesta Incorrecta! 😪
          </p>
        )}
        <br />
      </form>
    </div>
  );
};
export default Card;
