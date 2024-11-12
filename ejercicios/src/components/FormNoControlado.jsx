export const FormNoControlado = () => {

    return (
     <>
      <h3>Form NO Controlado</h3>
      <form onSubmit={(e)=>{
          e.preventDefault() // para que no se recargue la pagina y se resetee el formulario y obtener los datos.
  
          console.log({"nombre:":e.target.nombre.value, "apellido":e.target.apellido.value})
          }} >  {/*pido que me devuelva un objeto con nombre y objeto en el console.log*/}
          <label htmlFor="nombre" >Nombre</label>
          <input id="nombre" type="text" name="nombre" autoComplete="off"/>
          <label htmlFor="apellido" >apellido</label>
          <input id="apellido" type="text" name="apellido" autoComplete="off"/>  {/*para que no de las sugerencias ingresadas anteriormente*/}
          <button>Enviar </button>
      </form>
      </>
    )
  }