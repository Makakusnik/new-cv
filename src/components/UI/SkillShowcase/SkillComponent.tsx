import { Box, HStack, Text, useToken, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SkillContainerProps {
  title: string;
  children: ReactNode;
  experience: 1 | 2 | 3 | 4 | 5;
}

export const SkillCompononent = ({ title, children, experience }: SkillContainerProps) => {
  let [secondary400, secondary700] = useToken("colors", ["secondary.400", "secondary.700"]);

  return (
    <VStack minWidth="80px">
      <Text>{title}</Text>
      {children}
      <HStack spacing="4px">
        {[1, 2, 3, 4, 5].map((item) => {
          let color = secondary700;
          if (item > experience) {
            color = secondary400;
          }
          return <Box borderRadius="100%" width="6px" height="6px" backgroundColor={color} />;
        })}
      </HStack>
    </VStack>
  );
};
