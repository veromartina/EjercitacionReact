import { useState } from "react";

// Crear un formulario con un input y renderizar el valor
export const Ejercicio = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false); //show("mostrar")

  const handlePass = (e) => {
    setPassword(e.target.value);
    // console.log(password);
    // console.log(e.target.value);
  };
  return (
    <>
      <div>Ejercicio 1-2</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ "tu contraseña es :": { password } }); // se devuelve el console.log en objeto solo para vista
        }}
      >
        <label htmlFor="password">Password</label> {/*uso el htmlFor para cuando hago click en el label(password) el cursor se posicione en el input que corresponde */}
        <input
        //   type="password"
         type={show?"text":"password"}
          id="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handlePass}
          placeholder="ingrese su contraseña"
        />
        {/* <button type="submit">Enviar</button> */}
        <button
          onClick={() => {
            setShow(!show);
            console.log(show)
          }}
          type="button"
        >
          {show ? "Ocultar Contraseña" : "Mostrar contraseña"}
        </button>
      </form>
    </>
  );
};