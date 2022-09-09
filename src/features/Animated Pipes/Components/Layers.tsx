import { Box } from "@chakra-ui/react";

export const LayerContainer = (props: any) => {
  return (
    <Box display="flex" position="absolute" justifyContent="center" {...props}>
      {props.children}
    </Box>
  );
};
