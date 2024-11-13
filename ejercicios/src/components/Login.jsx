import { useState } from "react";
import "./login.css";

const Login = () => {
  // Estado para almacenar los valores del formulario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función para manejar el envío del formulario
  const handleLogin = (e) => {
    e.preventDefault();
    // Validación simple (en un caso real, iría con lógica de autenticación)
    if (usuario === "usuario" && password === "contraseña") {
      setUsuario("");  //limpio los input
      setPassword("");
      alert("¡Inicio de sesión exitoso!");
   

      // Aquí iría la redirección a otra página
    } else {
      setError("Credenciales incorrectas");
      setUsuario("");
  
 
    }
  };
  console.log(usuario, password);

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
