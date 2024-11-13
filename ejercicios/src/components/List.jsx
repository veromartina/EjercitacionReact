import { useState } from "react";
import { students } from "./dataBase";
import { SubString } from "./SubString";
import { StringRed } from "./StringRed";

export const List = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(students);

  const handleRemove = (element) => {
    setData((prev) => prev.filter((student) => student !== element));
  };

  const handleSearch = (e) => {
    //función que se ejecuta cada vez que el usuario escribe en el campo de búsqueda (es decir, cada vez que el valor del input cambia).
    setSearch(e.target.value); //Obtiene el valor que el usuario está escribiendo en el campo de búsqueda.Actualiza el estado search con el valor que el usuario ha ingresado.
    const dataFilter = students.filter((student) =>
      student.toLowerCase().includes(e.target.value.toLowerCase())
    ); //filtra el array students para que solo se incluyan los estudiantes cuyos nombres contienen la cadena ingresada, sin importar si está en mayúsculas o minúsculas

    const dataSort = dataFilter.sort((a, b) => a.localeCompare(b)); //ordena alfabéticamente los estudiantes filtrados usando localeCompare, que compara dos cadenas de texto de acuerdo con el orden local.

    setData(dataSort); //Actualiza el estado data con los estudiantes filtrados y ordenados.
  };

  return (
    <div>
      <label htmlFor="search">Search</label>{" "}
      {/*} Es un elemento de texto que sirve como etiqueta para el campo de búsqueda.*/}
      <input
        type="text"
        id="search"
        autoComplete="off" //*Desactiva la autocompletación en el campo de texto
        placeholder="Ej. Melina"
        value={search} // El valor del input está vinculado al estado search, por lo que el campo siempre muestra lo que el usuario está escribiendo
        onChange={handleSearch} //Cada vez que el valor del input cambia, se ejecuta la función handleSearch para actualizar el estado y filtrar la lista de estudiantes.
      />
      <ul>
        <SubString data={data} handleRemove={handleRemove} />
        {data.map((element) => (
          <StringRed key={element} element={element} search={search} />
        ))}{" "}
        {/* Esto recorre el array data (que contiene los estudiantes filtrados y ordenados) y por cada estudiante renderiza un componente StringRed.*/}
        {/* Cada StringRed recibe:
key={element}: El valor único para la clave del elemento (en este caso, el nombre del estudiante). Esto ayuda a React a optimizar el renderizado.
element={element}: El nombre del estudiante que se pasa como prop al componente StringRed.
search={search}: El texto de búsqueda también se pasa como prop, lo que puede ser útil dentro del componente StringRed para resaltar la coincidencia con el texto de búsqueda.*/}
      </ul>
    </div>
  );
};
