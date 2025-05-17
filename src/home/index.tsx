import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Image, Heading, Button, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction={["column", "row"]}
      align="center"
      justify="space-between"
      px={8}
      py={6}
      minH="100vh"
      bg="gray.900"
      color="white"
    >
      <Box mb={[8, 0]} maxW={["100%", "50%"]} pl="10rem">
        <Image
          src="/assets/icons/corinthians.svg"
          alt="Corinthians Logo"
          width="45rem"
          height="auto"
          objectFit="contain"
        />
      </Box>

      <Box textAlign="center" flex={1} ml={70}>
        <Heading as="h2" mb={10} fontSize="4rem">
          MENU
        </Heading>

        <VStack direction={{ base: "column", md: "row" }} gap="5">
          <RouterLink to="/players">
            <Button
              bg="black"
              color="white"
              borderRadius={15}
              fontSize="1.5rem"
              w="25rem"
              h="4.5rem"
              _hover={{ bg: "white", color: "black", border: "1px solid black", transform: "scale(1.05)", shadow: "lg"  }}
            >
              Ver Jogadores
            </Button>
          </RouterLink>

          <RouterLink to="/titles">
            <Button
              bg="black"
              color="white"
              borderRadius={15}
              fontSize="1.5rem"
              w="25rem"
              h="4.5rem"
              _hover={{ bg: "white", color: "black", border: "1px solid black", transform: "scale(1.05)", shadow: "lg" }}
            >
              Ver Títulos
            </Button>
          </RouterLink>
        </VStack>
      </Box>
    </Flex>
  );
}
