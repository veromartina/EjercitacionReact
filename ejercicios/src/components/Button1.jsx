const Button1 = (props) => {
    const {texto, color} = props;  //{mis props}
  
    return (
      <button type="submit" style={{ backgroundColor: color }}>
        {texto}
        {/*accedo directamente a las propiedades de props*/}
      </button>
    );
  };
  export default Button1;

  {/* 
   const Button3 = (props) =>{
    console.log(props)

  return (
    <Button type="submit" style={{backgroundColor:props.color}}>

    {props.title}
    
    </Button>
)

}
export default Button*/}