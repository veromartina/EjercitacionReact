
import TrafficLight from './components/TrafficLight';  // Importamos el componente TrafficLight

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TrafficLight />  {/* Insertamos el componente TrafficLight */}
    </div>
  );
}

export default App;