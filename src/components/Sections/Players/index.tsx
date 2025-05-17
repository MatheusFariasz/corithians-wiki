import { usePlayers } from "../../../hooks/usePlayers/usePlayers";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

export default function Players() {
  const { players, isLoading } = usePlayers();

  if (isLoading) {
    return (
      <Box bg="gray.900" minH="100vh" color="white" py={10}>
        <Container maxW="container.lg">
          <Text>Carregando jogadores...</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="gray.900" minH="95vh" color="white" py={10}>
      <Container maxW="container.lg">
        <RouterLink to="/">
          <Button
            bg="black"
            color="white"
            borderRadius={15}
            fontSize="1.5rem"
            w="18rem"
            h="4.5rem"
            mb={10}
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid black",
              transform: "scale(1.05)",
              shadow: "lg",
            }}
          >
            Voltar para Home
          </Button>
        </RouterLink>

        <Heading mb={10} fontSize="4rem" textAlign="center" marginBottom={55}>
          JOGADORES
        </Heading>

        <SimpleGrid columns={[2, null, 4]} gap="40px">
          {players.map((player) => (
            <Box
              h="15rem"
              key={player.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
              p={4}
              textAlign="center"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)", shadow: "lg" }}
            >
              <Image
                src={player.image}
                alt={player.name}
                boxSize="120px"
                mx="auto"
                mb={4}
                objectFit="cover"
                objectPosition="top"
              />
              <Text fontWeight="bold" fontSize="lg">
                {player.name}
              </Text>
              <Text color="gray.400">{player.position}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
