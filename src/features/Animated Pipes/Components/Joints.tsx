import { Box } from "@chakra-ui/react";

export const KneeJoint = (props: any) => {
  return (
    <Box
      {...props}
      position="absolute"
      borderTopRightRadius="full"
      borderTop="4px solid "
      borderTopColor="primary.700"
      borderRight="4px solid "
      borderRightColor="primary.700"
      _after={{
        content: '""',
        height: "4px",
        width: "4px",
        bgColor: "primary.700",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: "50%",
      }}
      bgColor="primary.500"
      w="18px"
      h="18px"
      transform={`rotate(${props.rotate}deg)`}
    />
  );
};

export const TJoint = (props: any) => {
  return (
    <Box
      {...props}
      position="absolute"
      borderTop="4px solid "
      borderTopColor="primary.700"
      _after={{
        content: '""',
        height: "4px",
        width: "4px",
        bgColor: "primary.700",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: "50%",
      }}
      _before={{
        content: '""',
        height: "4px",
        width: "4px",
        bgColor: "primary.700",
        position: "absolute",
        bottom: 0,
        right: 0,
        borderTopLeftRadius: "50%",
      }}
      bgColor="primary.500"
      w="18px"
      h="18px"
      transform={`rotate(${props.rotate}deg)`}
    />
  );
};
