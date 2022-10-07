import { Text, useToken } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Footer = () => {
  const [primary500, primary700] = useToken("colors", ["primary.500", "primary.700"]);

  return (
    <FooterStyle color={primary700} backgroundColor={primary500}>
      <Text textAlign="center">
        Created and designed by<br></br> Marek Fodor
      </Text>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer<{ color: string; backgroundColor: string }>`
  display: flex;
  font-family: Poppins;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
