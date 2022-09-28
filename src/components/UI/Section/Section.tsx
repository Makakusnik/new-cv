import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps {
  type: "blue" | "brown";
  children: ReactNode | ReactNode[];
}

export const Section = ({ children, type }: SectionProps) => {
  const color = type === "blue" ? "primary.100" : "secondary.100";
  return (
    <Container as="section" color="black" bgColor={color} minWidth="full" height="fit-content" padding="24px">
      <Container minWidth="container.lg">{children}</Container>
    </Container>
  );
};
