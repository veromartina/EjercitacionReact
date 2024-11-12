import './EstilosComp.css'    // Importa los estilos Crear archivo

const Button = ({ children, style }) => {
    return (
    
        <button  className="button" style={style}>
            {children}
        </button>
        
    );
};

export default Button;