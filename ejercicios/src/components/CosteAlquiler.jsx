
import { Text, VStack } from "@chakra-ui/react";

const coste = 40;
const CosteAlquiler = ({ night }) => {
  let costeTotal = coste * night;
  if (night >= 3 && night < 7) {
    costeTotal = costeTotal - 20;
  } else if (night >= 7) {
    costeTotal = costeTotal - 50;
  }
  return (
    <VStack>
      <Text>Coste de Alquiler</Text>
      <Text >
        El coste de alquiler de coche por {night} noches es:
        <span > {costeTotal}</span>
      </Text>
    </VStack>
  );
};

export default CosteAlquiler;