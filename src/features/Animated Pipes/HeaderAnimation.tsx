// Lib Imports
import { Container, useToken } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// My Imports
import { LayerContainer } from "./Components/Layers";
import Builder from "./Builder/Builder";
import Frame, { FrameOptionsType } from "./Components/Frame";
import { BorderOptions, BorderOptionsType } from "./Components/Types";
import Pipe, { PipeOptionsType } from "./Components/Pipe";
import Joint, { JointOptionsType } from "./Components/Joint";

const HeaderAnimation = () => {
  const [primary500, primary600, primary700] = useToken("colors", ["primary.500", "primary.600", "primary.700"]);

  let borderDefaultOptions: BorderOptionsType = { thickness: 4, type: "solid", color: primary700, overlap: 4 };
  let frameDefaultOptions: FrameOptionsType = {
    size: "xl",
    backgroundColor: primary600,
    borderOptions: borderDefaultOptions,
  };
  let pipeDefaultOptions: PipeOptionsType = {
    thickness: 18,
    length: 50,
    backgroundColor: primary600,
    borderOptions: borderDefaultOptions,
  };

  let horizontalPipeOptions: PipeOptionsType = {
    ...pipeDefaultOptions,
    orientation: "horizontal",
  };
  let verticalPipeOptions: PipeOptionsType = {
    ...pipeDefaultOptions,
    orientation: "vertical",
  };

  let builder = new Builder(45, frameDefaultOptions);
  let frameOptionss: FrameOptionsType = { backgroundColor: "white" };
  let frame2 = new Frame("fr1", frameOptionss);

  let pipe1 = new Pipe("pipe1", horizontalPipeOptions);
  let pipe2 = new Pipe("pipe2", horizontalPipeOptions);
  let pipe3 = new Pipe("pipe3", horizontalPipeOptions);
  let pipe4 = new Pipe("pipe4", verticalPipeOptions);
  let pipe7 = new Pipe("pipe7", horizontalPipeOptions);
  let pipe30V = new Pipe("pipe30V", verticalPipeOptions);

  let TJointOptions: JointOptionsType = {
    backgroundColor: primary500,
    borderOptions: borderDefaultOptions,
    rotation: 90,
    thickness: 18,
    type: "T",
  };

  let KneeJointOptions: JointOptionsType = {
    backgroundColor: primary500,
    borderOptions: borderDefaultOptions,
    rotation: 90,
    thickness: 18,
    type: "knee",
  };

  let CrossJointOptions: JointOptionsType = {
    backgroundColor: primary500,
    borderOptions: borderDefaultOptions,
    rotation: 0,
    thickness: 18,
    type: "cross",
  };

  let tJoint = new Joint("tJoint1", { ...TJointOptions, rotation: 0 });

  let kneeJoint2 = new Joint("knee1", KneeJointOptions);

  let kneeJoint3 = new Joint("knee3", { ...KneeJointOptions, rotation: 180 });

  let kneeJoint4 = new Joint("knee4", KneeJointOptions);

  let crossJoint4 = new Joint("cross", CrossJointOptions);

  builder.getMainFrame();

  builder
    .appendLeft(builder.getNodes()[0], pipe1)
    ?.appendLeft(frame2)
    ?.appendLeft(pipe2)
    ?.appendLeft(tJoint)
    ?.appendLeft(pipe3);
  builder
    .appendBottom(tJoint, pipe4)
    .appendBottom(kneeJoint2)
    .appendLeft(pipe7)
    .appendLeft(kneeJoint3)
    .appendUp(pipe30V)
    ?.appendUp(kneeJoint4)
    ?.appendLeft(crossJoint4);

  let path = builder.buildPath(
    builder.getNodes()[0],
    pipe1,
    frame2,
    pipe2,
    tJoint,
    pipe4,
    kneeJoint2,
    pipe7,
    kneeJoint3,
    pipe30V,
    kneeJoint4
  );
  return (
    <Container
      id="animation-root"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      minW="100%"
      height="100%"
      p="0"
    >
      <LayerContainer top="0px">
        {builder.getNodes().map((node) => {
          console.log(node);

          return node.getNode();
        })}
        {path && <Bullet path={path} />}
      </LayerContainer>
      <button
        style={{
          position: "absolute",
          top: "100px",
          left: "100px",
          backgroundColor: "gray",
          padding: "8px 16px",
        }}
        onClick={() => {
          console.log(`Y S: ${frame2.getYStart()} C: ${frame2.getYCenter()} E: ${frame2.getYEnd()}`);
          console.log(`X S: ${frame2.getXStart()} C: ${frame2.getXCenter()} E: ${frame2.getXEnd()}`);
        }}
      >
        klik me
      </button>
    </Container>
  );
};

const move = keyframes`
    0% {
      offset-distance: 0%;
      opacity: 0
    }
    30% {
      opacity: 1
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
  path: string;
  bgColor: string;
}

const Boxik = styled.div<BoxikProps>`
  offset-path: ${(props) => `path("${props.path}")`};
  position: absolute;
  animation: ${move} 6000ms infinite normal ease-in-out;
  animation-delay: 4000ms;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  opacity: 0;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${(props) => props.bgColor || "yellow"};
  z-index: 2;
`;

export const Bullet = (props: any) => {
  return <Boxik {...props} left="0" right="0" path={props.path} id="motion-demo" bgColor={props.color} />;
};

export default HeaderAnimation;
