import { Box } from "@chakra-ui/react";

export const SvgFrame = (props: any) => {
  let size = 40;
  switch (props.size) {
    case "sm":
      size = 40;
      break;
    case "md":
      size = 60;
      break;
    case "lg":
      size = 80;
      break;
    case "xl":
      size = 100;
      break;
    default:
      size = 40;
  }

  return (
    <Box
      {...props}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      borderRadius="full"
      bgColor="primary.600"
      borderColor="primary.700"
      border="4px solid"
      w={`${size}px`}
      h={`${size}px`}
    >
      {props.children}
    </Box>
  );
};
