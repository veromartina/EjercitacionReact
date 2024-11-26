import { Container, Input, Text } from "@chakra-ui/react";

import { useState } from 'react';
import CosteHotel from "./components/CosteHotel";
import CosteAlquiler from "./components/CosteAlquiler";

function App() {

  /* const [noches, setNoches] = useState(0); */
  const [night, setNight] = useState(0);

  return (
    <Container maxW="md" minHeight="100vh" bg="gray.400">
       <Text fontSize="lg">{night}</Text> 

      <Input
        placeholder="Ingrese el número de noches"
        type="number"
        value={night}
        onChange={(e) => setNight(e.target.value)}
      />
      <CosteHotel night={night} />
      <CosteAlquiler night={night} />
    </Container>
  );
}

export default App;