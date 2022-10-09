import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Heading,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiNginx,
  SiNextdotjs,
  SiNodedotjs,
  SiLinux,
  SiTypescript,
  SiReact,
  SiDocker,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiRedux,
} from "react-icons/si";
import { IconWrapper } from "../Icon";

export const NuppModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        color="secondary.100"
        bgColor="primary.500"
        _hover={{ bgColor: "primary.400" }}
        _active={{ bgColor: "primary.600" }}
        onClick={onOpen}
      >
        Read More
      </Button>

      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="800px">
          <ModalHeader fontFamily="Poppins" minHeight={"fit-content"} color="primary.600">
            Nupp <span style={{ fontSize: "10px", fontWeight: "300" }}>Not released yet</span>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems="start">
              <HStack width="100%" spacing="16px" alignItems="start">
                <VStack width="100%" alignItems="start">
                  <Text fontFamily="Poppins" color="primary.600" fontSize="18px" fontWeight="400">
                    Description
                  </Text>
                  <Text maxWidth="fit-content" lineHeight="1.7rem">
                    <abbr title="Nutrititious Application">Nupp</abbr> is abbreviation of Nutrititious application. It aims to provide
                    customer with interface for diet planning and macronutrients tracking as well as cost planning and food product
                    database.
                  </Text>
                  <Text paddingTop="16px" fontFamily="Poppins" color="primary.600" fontSize="18px" fontWeight="400">
                    Tech Description
                  </Text>
                  <Text maxWidth="fit-content" lineHeight="1.7rem">
                    <Text fontFamily="Poppins" color="primary.600" fontSize="14px" fontWeight="400">
                      Server
                    </Text>
                    It is deployed on Linux server with Ubuntu enviroment and running on Nginx.
                    <Text paddingTop="8px" fontFamily="Poppins" color="primary.600" fontSize="14px" fontWeight="400">
                      Backend
                    </Text>
                    Express.js on top of node.js with mongoose + mongo database.
                    <Text paddingTop="8px" fontFamily="Poppins" color="primary.600" fontSize="14px" fontWeight="400">
                      Frontend
                    </Text>
                    Chakra UI library + emotion (CSS in JS) alongside with some custom components.
                    <br /> React-hook-forms for dealing with forms and client-side validation.
                    <br />
                    Api communication with SWR library.
                  </Text>
                </VStack>

                <VStack alignItems="start" maxWidth="40%">
                  <Box width="300px" height="fit-content">
                    <legend>
                      <Image src={"/nupp.png"} layout="fixed" height="200px" width="300px" alt={"Nutritious application"}></Image>
                      <fieldset style={{ fontSize: "10px", paddingLeft: "4px" }}>Screenshot from homepage.</fieldset>
                    </legend>
                  </Box>
                  <Text paddingTop="8px" fontFamily="Poppins" color="primary.600" fontSize="18px" fontWeight="400">
                    Tech Stack
                  </Text>
                  <HStack
                    color="primary.700"
                    height="fit-content"
                    width="100%"
                    flexWrap={"wrap"}
                    alignItems="center"
                    justifyContent={"center"}
                    rowGap="8px"
                  >
                    <IconWrapper color="#E44D26">
                      <AiFillHtml5 size="30px" title="HTML 5" />
                    </IconWrapper>
                    <IconWrapper color="#264DE4">
                      <IoLogoCss3 size="30px" title="CSS 3" />
                    </IconWrapper>
                    <IconWrapper color="#008E36">
                      <SiNginx size="30px" title="Nginx" />
                    </IconWrapper>
                    <IconWrapper color="black">
                      <SiNextdotjs size="30px" title="Next.js" />
                    </IconWrapper>
                    <IconWrapper color="#3B7F3A">
                      <SiNodedotjs size="30px" title="Node.js" />
                    </IconWrapper>
                    <IconWrapper color="black">
                      <SiLinux size="30px" title="Linux" />
                    </IconWrapper>
                    <IconWrapper color="#2E72BC">
                      <SiTypescript size="30px" />
                    </IconWrapper>
                    <IconWrapper color="#61DBFB">
                      <SiReact size="30px" />
                    </IconWrapper>
                    <IconWrapper color="#1197D0">
                      <SiDocker size="30px" />
                    </IconWrapper>
                    <IconWrapper color="#14A04D">
                      <SiMongodb size="30px" />
                    </IconWrapper>
                    <IconWrapper color="black">
                      <SiExpress size="30px" />
                    </IconWrapper>
                    <IconWrapper color="#67BFBF">
                      <SiChakraui size="30px" />
                    </IconWrapper>
                    <IconWrapper color="#793FB9">
                      <SiRedux size="30px" />
                    </IconWrapper>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="secondary" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
