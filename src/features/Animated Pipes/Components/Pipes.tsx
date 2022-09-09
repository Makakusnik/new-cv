import { Box } from "@chakra-ui/react";

export const VerticallPipe = (props: any) => {
  return (
    <Box
      position="absolute"
      {...props}
      margin="auto"
      w="18px"
      bgColor="primary.600"
      borderLeft="4px solid "
      borderLeftColor="primary.700"
      borderRight="4px solid "
      borderRightColor="primary.700"
    />
  );
};

export const HorizontalPipe = (props: any) => {
  return (
    <Box
      {...props}
      position="absolute"
      margin="auto"
      h="18px"
      bgColor="primary.600"
      borderTop="4px solid "
      borderTopColor="primary.700"
      borderBottom="4px solid "
      borderBottomColor="primary.700"
    ></Box>
  );
};
