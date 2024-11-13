import { useState } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0)

      return (
    <div>
        <h4>{contador}</h4>
      <button onClick={()=>setContador (contador+1)}>+</button>
      <button onClick={()=>setContador (contador-1)}>-</button>
    </div>
  )
}

export default Contador
