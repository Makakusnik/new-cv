// Lib Imports
import { Container, useToken } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// My Imports
import { LayerContainer } from "./Components/Layers";
import Builder from "./Builder/Builder";
import { FrameOptionsType } from "./Components/Frame";
import { BorderOptionsType } from "./Components/Types";
import { PipeOptionsType } from "./Components/Pipe";
import { JointOptionsType } from "./Components/Joint";
import NodeObjectFactory from "./Builder/NodeFactory";

const HeaderAnimation = () => {
  const [primary500, primary600, primary700] = useToken("colors", ["primary.500", "primary.600", "primary.700"]);

  let defaultBorderOptions: BorderOptionsType = { thickness: 4, type: "solid", color: primary700, overlap: 4 };
  let defaultJointOptions: JointOptionsType = {
    backgroundColor: primary500,
    thickness: 18,
  };
  let defaultFrameOptions: FrameOptionsType = {
    backgroundColor: primary600,
    size: "md",
  };
  let defaultPipeOptions: PipeOptionsType = {
    backgroundColor: primary600,
    thickness: 18,
  };

  let mainFrameOptions: FrameOptionsType = {
    size: "xl",
    backgroundColor: primary600,
    borderOptions: defaultBorderOptions,
  };

  // Factory instance

  const factory = new NodeObjectFactory(
    defaultBorderOptions,
    defaultJointOptions,
    defaultFrameOptions,
    defaultPipeOptions
  );

  // Builder instance

  let builder = new Builder({ top: 45 }, mainFrameOptions);

  // Vertical Pipes

  let leftUp1Pipe = factory.createVerticalPipe(30);
  let leftUp4Pipe = factory.createVerticalPipe(100);
  let downPipe = factory.createVerticalPipe(30);
  let downFrame1Pipe = factory.createVerticalPipe(30);
  let downFrame2Pipe = factory.createVerticalPipe(30);
  let downFrame3Pipe = factory.createVerticalPipe(30);

  // Horizontal Pipes

  let left1Pipe = factory.createHorizontalPipe(10);
  let left2Pipe = factory.createHorizontalPipe(25);
  let leftUp2Pipe = factory.createHorizontalPipe(50);
  let leftUp3Pipe = factory.createHorizontalPipe(30);
  let pipeFromJoint1 = factory.createHorizontalPipe(50);
  let pipeFromJoint2 = factory.createHorizontalPipe(50);
  let pipeFromJoint3 = factory.createHorizontalPipe(50);

  // T Joints

  let left1Joint = factory.createTJoint(0);
  let left4Joint = factory.createTJoint(0);
  let jointFromFrame1 = factory.createTJoint(90);
  let jointFromFrame2 = factory.createTJoint(90);
  let jointFromFrame3 = factory.createTJoint(90);

  // Knee Joints

  let left2Joint = factory.createKneeJoint(180);
  let left3Joint = factory.createKneeJoint(0);

  // Frames

  let frame1 = factory.createFrame("md");
  let frame2 = factory.createFrame("sm");
  let frame3 = factory.createFrame("sm");
  let frame4 = factory.createFrame("sm");

  builder.getMainFrame();

  builder.appendLeft(builder.getMainFrame(), left1Pipe).appendLeft(left1Joint).appendBottom(downPipe);
  builder
    .appendLeft(left1Joint, left2Pipe)
    .appendLeft(left2Joint)
    .appendTop(leftUp1Pipe)
    .appendTop(left3Joint)
    .appendLeft(leftUp2Pipe)
    .appendLeft(left4Joint)
    .appendLeft(leftUp3Pipe)
    .appendLeft(frame1)
    .appendBottom(downFrame1Pipe)
    .appendBottom(jointFromFrame1)
    .appendBottom(downFrame2Pipe)
    .appendBottom(jointFromFrame2)
    .appendBottom(downFrame3Pipe)
    .appendBottom(jointFromFrame3);

  builder.appendLeft(jointFromFrame1, pipeFromJoint1);
  builder.appendLeft(jointFromFrame2, pipeFromJoint2);
  builder.appendLeft(jointFromFrame3, pipeFromJoint3);

  builder.appendLeft(pipeFromJoint1, frame2);
  builder.appendLeft(pipeFromJoint2, frame3);
  builder.appendLeft(pipeFromJoint3, frame4);

  builder.appendBottom(left4Joint, leftUp4Pipe);

  builder.buildPath();

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
          return node.getNode();
        })}
      </LayerContainer>
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
