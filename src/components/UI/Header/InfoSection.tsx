import { Box, Container, HStack, Icon, keyframes, Link, SystemStyleObject, Text, VStack } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInfoCircle, AiFillGithub } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";

import { IconType } from "react-icons";
import { useState } from "react";
import styled from "@emotion/styled";

export const PopUp = keyframes`
    0% {
      transform: scale(0.1);
    }
    45% {
      transform: scale(1.3);
    }
     85% {
      transform: scale(0.9);
    } 
    100% {
      transform: scale(1);
    
    }
`;

export const FallDown = keyframes`
    0% {
      transform: scale(0.02,0.1);
      border-radius: 0;
    }
    50% {
      transform: scale(0.02,1);
    }
    90% {
      border-radius:0px;
    }
    100% {
      border-radius:8px;
      transform: scale(1,1);
    }
`;

const PopRight = keyframes`
  0% {
    opacity:0.3;
    transform:translateX(-200%);
}
  80% {
    opacity:0.3;
  }
  100% {
    opacity:1;
    transform:translateX(0%);
  }
`;

const PopIcon = keyframes`
  0% {
      color: #3F758B;
  }
  50% {
    color: #5196B3;
    transform:scale(1.4);
  }
  100% {
          color: #3F758B;

  } 
`;

const InfoSection = () => {
  return (
    <Container position="absolute" left="0" marginLeft={{ base: "12vw", "2xl": "12vw", xl: "4vw", md: "0vw" }} height="280px" width="400px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#BBE1F1"
        borderRadius={"full"}
        width="40px"
        height="40px"
        position={"absolute"}
        left="0px"
        top="-20px"
        zIndex="2"
        animation={`${PopUp} 0.75s  ease-in-out `}
      >
        <Icon as={AiOutlineInfoCircle} color="primary.600" width="34px" height="34px" />
      </Box>
      <VStack
        width="100%"
        height="100%"
        transform="scale(0)"
        padding="32px"
        position="relative"
        transformOrigin={"0% 0%"}
        backgroundColor={"#BBE1F1"}
        animation={`${FallDown} 0.75s  ease-in-out 0.75s 1 forwards`}
        overflow="hidden"
      >
        <VStack as="ul" spacing="16px" width="100%" height="100%" justifyContent="space-between" alignItems="start">
          <InfoItem
            hoverAnimation={`${PopIcon} 0.5s ease-in-out 0s 1 forwards`}
            animation={`${PopRight} 0.75s ease-in-out 1.3s 1 forwards`}
            icon={IoLocationSharp}
            href="https://www.google.com/maps/place/Bratislava/@48.1357803,17.1159171,11z/data=!3m1!4b1!4m5!3m4!1s0x476c89360aca6197:0x631f9b82fd884368!8m2!3d48.1485965!4d17.1077478"
          >
            Bratislava, Slovak Republic
          </InfoItem>
          <InfoItem
            hoverAnimation={`${PopIcon} 0.5s ease-in-out 0s 1 forwards`}
            animation={`${PopRight} 0.75s ease-in-out 1.4s 1 forwards`}
            icon={IoMdBriefcase}
            href="https://www.aomvsr.sk/"
          >
            Automobilove Opravarne MV SR
          </InfoItem>
          <InfoItem
            hoverAnimation={`${PopIcon} 0.5s ease-in-out 0s 1 forwards`}
            animation={`${PopRight} 0.75s ease-in-out 1.5s 1 forwards`}
            href="tel:+421915498774"
            icon={BsFillTelephoneFill}
          >
            +421 915 498 774
          </InfoItem>
          <InfoItem
            hoverAnimation={`${PopIcon} 0.5s ease-in-out 0s 1 forwards`}
            animation={`${PopRight} 0.75s ease-in-out 1.6s 1 forwards`}
            icon={FiAtSign}
            href="mailto:fodormarek5@gmail.com"
          >
            fodormarek5@gmail.com
          </InfoItem>
          <InfoItem
            hoverAnimation={`${PopIcon} 0.5s ease-in-out 0s 1 forwards`}
            animation={`${PopRight} 0.75s ease-in-out 1.7s 1 forwards`}
            icon={AiFillGithub}
            href="https://github.com/Makakusnik"
          >
            github.com/Makakusnik
          </InfoItem>
        </VStack>
      </VStack>
    </Container>
  );
};

interface InfoItemProps {
  icon: IconType;
  children: string;
  href?: string;
  animation?: string;
  hoverAnimation?: string;
}

const InfoItem = ({ icon, children, hoverAnimation, href, animation }: InfoItemProps) => {
  const [isRunning, setRunning] = useState(false);
  return (
    <HStack
      transform="translateX(-200%)"
      color="primary.600"
      fontFamily="Poppins"
      animation={animation}
      onMouseOver={() => setRunning(true)}
      onMouseOut={() => setRunning(false)}
      as="li"
    >
      <Icon
        animation={isRunning ? hoverAnimation : ""}
        css={`
          animation-play-state: ${isRunning ? "running" : "paused"};
        `}
        as={icon}
        width="24px"
        height="24px"
        marginRight={"24px"}
      />
      {href ? (
        <Link target="_blank" href={href}>
          {children}
        </Link>
      ) : (
        <Text>{children}</Text>
      )}
    </HStack>
  );
};

const ItemContainer = styled.li`
  display: flex;
`;

export default InfoSection;
