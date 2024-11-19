
/*
const Light = ({color}) => {
    return (
      <div>
        <div  style={{
            backgroundColor: color,
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '10px auto',
            cursor: 'pointer',
          }}></div>
      </div>
    )
  }
  export default Light
  */
 /**** ejercicio realizado en clase por compañeras***** */

 

//-----  Este componente será responsable de representar cada luz individual del semáforo. Recibirá un color y un estado para saber si está activa o no.

 const Light = ({ color, isActive, onClick }) => {
    return (
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: isActive ? color : 'gray',  // Si está activa, muestra el color; si no, gris.
          margin: '10px',
          cursor: 'pointer',
        }}
        onClick={onClick}  // Llama a onClick al hacer clic en la luz
      />
    );
  };
  
  export default Light;