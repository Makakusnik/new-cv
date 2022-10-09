import { Button, Container, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ReactNode } from "react";

interface ChildProps {
  children: ReactNode;
}

export const ProjectComponent = ({ children }: ChildProps) => {
  return (
    <HStack alignItems="start" width="fit-content">
      {children}
    </HStack>
  );
};

export const ProjectMainContent = ({ children }: ChildProps) => {
  return (
    <VStack spacing="2px" alignItems="start">
      {children}
    </VStack>
  );
};

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  return (
    <ImageWrapper>
      <Image src={src} layout="fixed" height="172px" width="251px" alt={alt}></Image>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  img {
    transition: transform 0.6s ease-in-out;
    transform-origin: 100% 100%;
  }
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.07);
    }
  }
`;

interface ProjectTitleDescriptionProps {
  title: string;
  url?: string;
  info?: string;
  children: ReactNode;
}

export const ProjectTitleDescription = ({ title, url, info, children }: ProjectTitleDescriptionProps) => {
  return (
    <HStack alignItems="end" justifyContent="space-between" width="100%">
      <VStack alignItems="start" spacing="4px">
        <Text fontWeight={600} fontSize="20px">
          {title}
        </Text>
        {url ? (
          <Text as="a" href={url} lineHeight={"1rem"} fontSize="12px">
            {url}
          </Text>
        ) : (
          <Text lineHeight={"1rem"} fontSize="12px">
            {info}
          </Text>
        )}
      </VStack>
      {children}
    </HStack>
  );
};

export const ProjectSideInformations = ({ children }: ChildProps) => {
  return (
    <Grid
      gridTemplateRows="repeat(5,1fr)"
      gridTemplateColumns="1fr"
      height="100%"
      maxHeight="170px"
      gridAutoFlow="column"
      gridColumnGap="8px"
      justifyContent="start"
      alignItems="start"
    >
      {children}
    </Grid>
  );
};
