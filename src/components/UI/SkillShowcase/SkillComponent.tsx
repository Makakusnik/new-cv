import { Box, HStack, Text, useToken, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import { IconWrapper } from "../Icon";

interface SkillContainerProps {
  title: string;
  children: ReactNode;
  experience: 1 | 2 | 3 | 4 | 5;
  color: string;
}

export const SkillCompononent = ({ title, children, experience, color }: SkillContainerProps) => {
  let [secondary400, secondary700] = useToken("colors", ["secondary.400", "secondary.700"]);
  const [hover, setHover] = useState(false);
  return (
    <VStack
      minWidth="80px"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Text>{title}</Text>
      <IconWrapper activate={hover} color={color}>
        {children}
      </IconWrapper>
      <HStack spacing="4px">
        {[1, 2, 3, 4, 5].map((item, index) => {
          let color = secondary700;
          if (item > experience) {
            color = secondary400;
          }
          return <Box key={index} borderRadius="100%" width="6px" height="6px" backgroundColor={color} />;
        })}
      </HStack>
    </VStack>
  );
};
