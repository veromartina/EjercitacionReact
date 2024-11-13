import { useState } from "react"
const Titulo1 = () =>{
    const [titulo1, setTitulo1] = useState("Chau")
  
    return(
      
  <div>
  <h3>{titulo1}</h3>
  <button 
      onClick={() => setTitulo1(titulo1 === "Chau" ? "hola" : "Chau")}
  >
      Modificar
  </button>
  </div>
    )
  }
export default Titulo1  