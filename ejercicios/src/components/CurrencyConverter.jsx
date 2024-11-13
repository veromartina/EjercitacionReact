import { useState } from "react";
import "./cover.css";
const CurrencyConverter = () => {
  // Estado para almacenar los valores en ARS y USD
  const [ars, setArs] = useState('');
  const [usd, setUsd] = useState('');
  // Tasa de conversión fija: 1 ARS = 0,0010 USD
  const exchangeRate = 0.0010 ;


  // Función para manejar el cambio en el campo ARS
  const handleArsChange = (event) => {
    const arsValue = event.target.value;
    setArs(arsValue);

    // Si el valor es un número válido, actualizar el valor en USD
    if (!isNaN(arsValue) && arsValue !== '') {
        setUsd((arsValue * exchangeRate).toFixed(2));  // Convertimos ARS a USD.  toFixed método de JavaScript que redondea el número a 2 decimales y lo convierte en una cadena de texto.
      } else {
        setUsd('');
      }
    };


  // Función para manejar el cambio en el campo USD
  const handleUsdChange = (event) => {
    const usdValue = event.target.value;
    setUsd(usdValue);
    
    // Si el valor es un número válido, actualizar el valor en ARS
    if (!isNaN(usdValue) && usdValue !== '') {
      setArs((usdValue / exchangeRate).toFixed(2));  // Convertimos USD a ARS
    } else {
      setArs('');
    }
  };
  
  //justify-content: space-evenly;
  //align-items: center;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Converter (ARS to USD)</h2>
      <div className="divInput">
        <label>Monto en Pesos: </label>
        <input
          type="number"
          value={ars}
          onChange={handleArsChange}
          placeholder="Enter amount in ARS"
        />
      </div>

      <div className="divInput">
        <label>Monto en Dolares: </label>
        <input
          type="number"
          value={usd}
          onChange={handleUsdChange}
          placeholder="Converted amount in USD"
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
