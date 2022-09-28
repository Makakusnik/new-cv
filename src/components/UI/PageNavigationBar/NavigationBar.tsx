import { Button, Container, HStack, IconButton, useToken } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";

export const NavigationBar = () => {
  return (
    <Container display="flex" justifyContent="center" width="full" bgColor="transparent">
      <HStack justifyContent="center" spacing="16px" width={"fit-content"}>
        <Button
          _hover={{ transform: "scale(1.2)" }}
          bgColor="secondary.300"
          color="secondary.600"
          width="48px"
          borderRadius="2xl"
          height="48px"
          fontSize="20px"
          fontFamily={"Poppins"}
          as="a"
          href="#me"
        >
          me
        </Button>
        <IconButton
          _hover={{ transform: "scale(1.2)" }}
          bgColor="secondary.300"
          width="48px"
          borderRadius="2xl"
          height="48px"
          aria-label="Work Experince"
          color={"secondary.600"}
          icon={<IoMdBriefcase size="24px" />}
          as="a"
          href="#workexperience"
        />
        <IconButton
          _hover={{ transform: "scale(1.2)" }}
          bgColor="secondary.300"
          width="48px"
          borderRadius="2xl"
          height="48px"
          color={"secondary.600"}
          aria-label="Skills"
          icon={<BsCodeSlash size="24px" />}
          as="a"
          href="#skills"
        />
        <IconButton
          _hover={{ transform: "scale(1.2)" }}
          bgColor="secondary.300"
          width="48px"
          borderRadius="2xl"
          color={"secondary.600"}
          height="48px"
          aria-label="Work Experince"
          icon={<HiLightBulb size="24px" />}
          as="a"
          href="#projects"
        />
      </HStack>
    </Container>
  );
};
