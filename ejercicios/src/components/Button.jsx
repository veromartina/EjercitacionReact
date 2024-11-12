
const Button = ({ color, texto, isEnabled })  => {  {/*destructuring*/}
    console.log('Button props:', { color, texto, isEnabled });

    return (
        <button style={{ backgroundColor: color }} disabled={!isEnabled}>
            {texto}
        </button>
    );
};

export default Button;