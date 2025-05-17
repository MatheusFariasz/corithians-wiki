import { Box, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" py={4} textAlign="center" bg="black.000" color="white">

        <Text>
          Sport Club Corinthians Paulista — Desenvolvido por{" "}
          <Link color="white" _hover={{color: "red"}} href='https://github.com/MatheusFariasz'>Matheus Farias</Link>
          .
        </Text>

    </Box>
  );
}
