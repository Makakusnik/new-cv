import { Container, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode | ReactNode[];
  direction?: "column" | "row";
}

export const SectionContent = ({ children, direction = "column" }: SectionContentProps) => {
  return (
    <Container display="flex" m={0} minWidth="full" columnGap={"32px"} flexDirection={direction} padding="0 16px" lineHeight="1.8rem">
      {children}
    </Container>
  );
};
