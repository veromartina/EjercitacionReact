

export const StringRed = ({ element, search }) => {
    if(!search || search.length === 0){   //Si no hay un término de búsqueda (!search) o si el término de búsqueda tiene longitud 0 (search.length === 0), se devuelve simplemente el nombre del estudiante (element) dentro de un párrafo (<p>).Esto significa que si el campo de búsqueda está vacío, el nombre del estudiante se muestra sin modificaciones.
      
        return <p>{element}</p>
    }
    //Aquí, el nombre del estudiante (element) se divide en una lista de fragmentos (textArray) usando el término de búsqueda (search).
  const textArray = element.split(new RegExp(`(${search})`, "i"));
//RegExp(${search}): Se crea una expresión regular que busca el término search. El paréntesis alrededor de search en la expresión regular indica que el texto coincidente (el término de búsqueda) debe ser parte de los fragmentos resultantes. Es decir, el término de búsqueda será "capturado" en la división."i": Es una bandera de la expresión regular que indica que la búsqueda será insensible a mayúsculas y minúsculas. El método split() divide el texto en un array, separando el texto por el término de búsqueda, manteniendo las coincidencias como fragmentos por separado.
  return (
    <li>
      {textArray.map((fragment, index) => (
        //Itera sobre los fragmentos resultantes de la división del nombre del estudiante. Por cada fragmento, se genera un <span> que envuelve el texto.
        <span
          key={index}
          style={
            fragment.toLowerCase() === search.toLowerCase()  
              ? { color: "red", fontWeight: "bold" }
              : {} //Si el fragmento no coincide con el término de búsqueda, se aplica un estilo vacío {}, es decir, no se modifica.
          }  //Si el fragmento de texto (fragment) coincide (insensible a mayúsculas/minúsculas) con el término de búsqueda (search), se aplica el estilo { color: "red", fontWeight: "bold" } al <span>. Esto resalta el fragmento de texto en rojo y lo pone en negrita. 
        >
          {fragment}
        </span>
      ))}
    </li>
  );
};