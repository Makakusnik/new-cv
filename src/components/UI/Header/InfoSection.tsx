import { Box, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInfoCircle, AiFillGithub } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";

import { IconType } from "react-icons";
const InfoSection = () => {
  return (
    <VStack
      position="absolute"
      borderRadius="16px"
      left="0"
      marginLeft={{ base: "12vw", "2xl": "12vw", xl: "4vw", md: "0vw" }}
      backgroundColor={"#BBE1F1"}
      padding="32px"
      height="280px"
      width="400px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#BBE1F1"
        borderRadius={"full"}
        width="40px"
        height="40px"
        position={"absolute"}
        left="-20px"
        top="-20px"
      >
        <Icon as={AiOutlineInfoCircle} color="primary.600" width="34px" height="34px" />
      </Box>
      <VStack as="ul" spacing="16px" width="100%" height="100%" justifyContent="space-between" alignItems="start">
        <InfoItem icon={IoLocationSharp}>Bratislava, Slovak Republic</InfoItem>
        <InfoItem icon={IoMdBriefcase}>Automobilove Opravarne MV SR</InfoItem>
        <InfoItem href="tel:+421915498774" icon={BsFillTelephoneFill}>
          +421 915 498 774
        </InfoItem>
        <InfoItem icon={FiAtSign} href="mailto:fodormarek5@gmail.com">
          fodormarek5@gmail.com
        </InfoItem>
        <InfoItem icon={AiFillGithub} href="https://github.com/Makakusnik">
          github.com/Makakusnik
        </InfoItem>
      </VStack>
    </VStack>
  );
};

interface ItemProps {
  icon: IconType;
  children: string;
  href?: string;
}

const InfoItem = ({ icon, children, href }: ItemProps) => {
  return (
    <HStack as="li" color="primary.600" fontFamily="Poppins">
      <Icon as={icon} width="24px" height="24px" marginRight={"24px"} />
      {href ? <Link target="_blank">{children}</Link> : <Text>{children}</Text>}
    </HStack>
  );
};

export default InfoSection;
