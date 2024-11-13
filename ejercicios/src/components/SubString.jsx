
export const SubString = ({ data, handleRemove }) => {
// El componente recibe dos props:
//data: Un array de elementos
//handleRemove: Es una función que se usa para eliminar un elemento de la lista. Esta función se ejecutará cuando el usuario haga clic en el botón de "Eliminar".

    return (
      <div>
        {/*data.map(...): Utiliza el método map() para recorrer el array data (que es pasado como prop). Por cada elemento en el array, se genera una lista de elementos HTML (en este caso, se usa un <li> para cada uno).
element: Es el valor actual en la iteración del array data.
index: Es el índice del elemento en el array (usado para ayudar a React a identificar cada elemento de forma única).*/}
        {data.map((element, index) => (
          <li key={`${index}+${element}`}>  {/*<li key={${index}+${element}}>: Cada elemento li tiene una propiedad key que React utiliza para identificar de manera única cada elemento en una lista y optimizar su renderizado. key={${index}+${element}}: Esto genera una clave única para cada li, que es importante para la eficiencia de React cuando actualiza el DOM.*/}
            <p>{element}</p>

            <button onClick={() => handleRemove(element)}>Eliminar..</button> {/*Esto es una función de flecha que pasa el element (el elemento actual de la lista) como argumento a la función handleRemove. Esto probablemente eliminará ese elemento de la lista o realizará alguna otra acción relacionada.*/}
          </li>
        ))}
      </div>
    );
  };