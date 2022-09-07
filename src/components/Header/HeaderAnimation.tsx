import { Box, Container, useToken } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const HeaderAnimation = () => {
  const [yellow200] = useToken("colors", ["yellow.200"]);
  console.log(yellow200);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      minW="100%"
      height="100%"
      p="0"
    >
      <SvgFrame size="lg" top="35px">
        <svg
          width="60"
          height="60"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="iconfilter" primitiveUnits="objectBoundingBox">
            <feFlood floodColor={`${yellow200}`} />

            <feOffset>
              <animate
                attributeName="dy"
                from="1.5"
                to="0"
                dur="5s"
                repeatCount="indefinite"
              />
            </feOffset>

            <feComposite operator="in" in2="SourceGraphic" />
            <feComposite operator="over" in2="SourceGraphic" />
          </filter>
          <g clipPath="url(#clip0_4_123)" filter="url(#iconfilter)">
            <path
              d="M14.0512 1.58977H15.3205L14.3974 10.359H19.5897V11.6282L11.1666 23.7436L10.1282 24.0898L11.1666 14.3975L5.16663 13.7052L14.0512 1.58977Z"
              fill="#1C353F"
            />
            <path
              d="M14.62 2.18356H14.6242H14.62ZM14.62 2.18356L12.9277 11.0752L19.0586 11.0958L10.7133 23.1498L12.4057 13.3676L6.27518 13.3462L14.62 2.18356ZM14.6212 0.683587C14.5807 0.683587 14.5402 0.685064 14.5005 0.68804C14.2357 0.709439 14.0602 0.797939 13.8521 0.937814C13.7349 1.01594 13.6292 1.11011 13.5382 1.21756C13.5109 1.24982 13.4851 1.28335 13.4609 1.31806L5.05605 12.4417C4.72418 12.8966 4.67543 13.497 4.93043 13.9987C5.18505 14.5005 5.69992 14.8185 6.2643 14.8226L10.5941 14.8541L9.2328 22.8742C9.10343 23.5635 9.47093 24.2505 10.1178 24.5272C10.3058 24.608 10.5083 24.6496 10.7129 24.6495C11.1843 24.6495 11.5717 24.429 11.8623 24.0307L20.2777 11.9767C20.6096 11.5218 20.6579 10.9207 20.4033 10.4197C20.1487 9.91792 19.6338 9.59989 19.0694 9.59579L14.7397 9.58829L16.0863 2.53642C16.1148 2.42096 16.1292 2.30247 16.1291 2.18354C16.1291 1.37204 15.4829 0.71054 14.6744 0.68429C14.6564 0.68354 14.6388 0.68354 14.6212 0.68354L14.6212 0.683587Z"
              fill="#1C353F"
            />
          </g>
        </svg>
      </SvgFrame>
      <Bullet top="75px" />
      <LayerContainer top="15px">
        <VerticallPipe height="10px" left="-10px" top="15px" />
        <KneeJoint top="-2px" left="-10px" rotate="270" />
        <HorizontalPipe top="-2px" left="8px" width="370px" />
        <KneeJoint top="-2px" left="378px" />
        <VerticallPipe height="30px" left="378px" top="15px" />
        <LayerContainer top="45px">
          <KneeJoint left="378px" rotate="180" />
          <HorizontalPipe left="396px" width="40px" />
          <KneeJoint left="436px" />
          <VerticallPipe height="30px" left="436px" top="18px" />
        </LayerContainer>
      </LayerContainer>
      <LayerContainer top="46px">
        <SvgFrame size="md" right="170px"></SvgFrame>
        <SvgFrame size="md" top="3px" left="207px"></SvgFrame>
        <SvgFrame size="md" top="-29px" right="433px"></SvgFrame>
        <VerticallPipe top="10px" right="390px" height="10px" />
        <KneeJoint top="-8px" right="390px" />
        <HorizontalPipe top="-8px" right="408px" width="30px" />
        <SvgFrame size="sm" top="13px" left="287px"></SvgFrame>
      </LayerContainer>
      <LayerContainer top="66px">
        <HorizontalPipe top="4px" left="262px" width="30px" />
        <HorizontalPipe left="35px" width="100px" />
        <HorizontalPipe right="35px" width="140px" />
        <HorizontalPipe right="225px" width="35px" />
        <TJoint right="260px" />
        <HorizontalPipe right="278px" width="112px" />
        <KneeJoint left="135px" />
        <KneeJoint right="390px" rotate="180" />
        <LayerContainer top="18px">
          <VerticallPipe left="135px" height="40px" />
          <LayerContainer top="40px">
            <KneeJoint left="135px" rotate="180" />
            <HorizontalPipe left="153px" width="75px" />
            <TJoint left="228px" rotate="90" />
            <VerticallPipe top="18px" left="228px" height="20px" />
          </LayerContainer>
          <VerticallPipe top="20px" left="228px" height="20px" />
          <VerticallPipe right="260px" height="50px" />
        </LayerContainer>
      </LayerContainer>
    </Container>
  );
};

const move = keyframes`
    0% {
      offset-distance: 0%;
      opacity: 0
    }
    20% {
      opacity: 0
    }
    25% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
`;

interface BoxikProps {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const Boxik = styled.div<BoxikProps>`
  offset-path: path("M 0 0 h 147 v 58 h 30 h 63 v -55");
  position: absolute;
  animation: ${move} 6000ms infinite normal ease-in-out;
  animation-delay: 4300ms;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  opacity: 0;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: yellow;
  z-index: 1;
`;

const Bullet = (props: any) => {
  return (
    <Boxik
      {...props}
      id="motion-demo"
      height="3px"
      width="3px"
      bgColor="yellow.200"
    />
  );
};

const KneeJoint = (props: any) => {
  return (
    <Box
      position="absolute"
      {...props}
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

const TJoint = (props: any) => {
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

const HorizontalPipe = (props: any) => {
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

const VerticallPipe = (props: any) => {
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

// TODO Dorob poriadne Prop
const SvgFrame = (props: any) => {
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
      border="4px solid"
      borderColor="primary.700"
      w={`${size}px`}
      h={`${size}px`}
    >
      {props.children}
    </Box>
  );
};

const LayerContainer = (props: any) => {
  return (
    <Box
      position="absolute"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default HeaderAnimation;
