import { Container, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode | ReactNode[];
}

export const SectionContent = ({ children }: SectionContentProps) => {
  return (
    <Container m={0} minWidth="full" padding="0 16px" lineHeight="1.8rem">
      <Text>{children}</Text>
    </Container>
  );
};
