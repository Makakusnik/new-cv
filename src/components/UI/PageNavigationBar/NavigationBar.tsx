import { Button, Container, HStack, IconButton, Text, useToken, VStack } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import styled from "@emotion/styled";

export const NavigationBar = () => {
  return (
    <Container display="flex" justifyContent="center" width="full" bgColor="transparent">
      <HStack fontFamily="Poppins" justifyContent="center" spacing="16px" width={"fit-content"}>
        <ButtonWrapper>
          <Button
            bgColor="secondary.300"
            color="secondary.600"
            _hover={{}}
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
          <Text fontSize="10px" color="secondary.600" textAlign="center">
            about me
          </Text>
        </ButtonWrapper>
        <ButtonWrapper>
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
          <Text fontSize="10px" color="secondary.600" textAlign="center">
            work
          </Text>
        </ButtonWrapper>
        <ButtonWrapper>
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
          <Text fontSize="10px" color="secondary.600" textAlign="center">
            skills
          </Text>
        </ButtonWrapper>
        <ButtonWrapper>
          <IconButton
            _hover={{ transform: "scale(1.2)" }}
            bgColor="secondary.300"
            width="48px"
            borderRadius="2xl"
            color={"secondary.600"}
            height="48px"
            aria-label="Projects"
            icon={<HiLightBulb size="24px" />}
            as="a"
            href="#projects"
          />
          <Text fontSize="10px" color="secondary.600" textAlign="center">
            projects
          </Text>
        </ButtonWrapper>
      </HStack>
    </Container>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  transition: transform 0.3s ease-in-out;
  p {
    transition: font-weight 0.2s ease-in-out;
    font-weight: 300;
  }

  &:hover a {
    transform: scale(1.13);
  }

  &:hover p {
    font-weight: 600;
  }
`;
