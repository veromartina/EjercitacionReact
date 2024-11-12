import Layout from "./components/Layout";
import Button from "./components/Button";
import "./components/EstilosComp.css"; // Importa los estilos

const App = () => {
  return (
    <Layout>
      <div className="card-container">
        <div className="card">
          <h2>Card 1</h2>
          <p>Este es el contenido de la primera card.</p>
          <div className="conteBoton">
            <Button style={{ backgroundColor: "blue", color: "white" }}>
              Botón Azul
            </Button>
          </div>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Este es el contenido de la segunda card.</p>
          <div className="conteBoton">
          <Button style={{ backgroundColor: "green", color: "white" }}>
            Botón Verde
          </Button>
          </div>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>Este es el contenido de la tercera card.</p>
          <div className="conteBoton">
          <Button style={{ backgroundColor: "red", color: "white" }}>
            Botón Rojo
          </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
