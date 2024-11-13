import { useState } from "react"

const Accordion = () => {
const [accordion, setAccordion]= useState(true)

  return (
    <div>
        <button onClick={()=>setAccordion(!accordion)} >{ accordion ? 'Ocultar' : "Mostrar"}</button>
        {accordion && (
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius, iure facere neque est magnam tempora praesentium odio aut quibusdam itaque suscipit earum porro cupiditate qui ipsa nostrum dolorem eos.</p>
        )}
     
    </div>
    
  )
}

export default Accordion
