import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import HeaderAnimation from "@features/Animated Pipes/HeaderAnimation";

export const Header = () => {
  return (
    <Container
      as={"header"}
      display="flex"
      size="full"
      minW="100%"
      minH="600px"
      height="600px"
      maxH="600px"
      p="0"
      alignItems="center"
      position="relative"
      justifyContent="center"
      bgGradient="linear(to-br,primary.500,primary.300)"
    >
      <HeaderAnimation />
      <Flex position="relative" alignItems="center" justifyContent="center" paddingBottom="32px" w="450px" h="100%">
        <Flex w="fit-content" direction={"column"} justifyContent="center" alignItems={"center"}>
          <Box position="relative" width="170px" height="193px" borderRadius="xl" overflow="hidden">
            <Image
              src="/MarekFodor.png"
              alt="Marek Fodor"
              objectPosition={"50% 20px"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Text fontFamily="Poppins" marginTop="16px" fontSize="36" fontWeight="200" w="fit-content">
            Hi, I&apos;m <strong style={{ fontWeight: "400" }}>Marek Fodor</strong>
          </Text>
          <Text fontFamily="Poppins" fontSize="24" fontWeight="200" w="fit-content">
            Junior Frontend Developer
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
