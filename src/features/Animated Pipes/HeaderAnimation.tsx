// Lib Imports

import { background, border, Box, Container, useToken } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// My Imports

import { SvgFrame } from "./Components/Frames";
import { HorizontalPipe, VerticallPipe } from "./Components/Pipes";
import { KneeJoint, TJoint } from "./Components/Joints";
import { LayerContainer } from "./Components/Layers";
import Builder from "./Builder/Builder";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Frame, { FrameOptions } from "./Components/Frame";
import ElectricityBolt from "./Assets/ElectricityBolt";
import YoutubeLogo from "./Assets/YoutubeLogo";
import { BorderOptions, Position } from "./Components/Types";
import Pipe, { PipeOptions } from "./Components/Pipe";
import Joint, { JointOptions } from "./Components/Joint";

const HeaderAnimation = () => {
  const [primary500, primary600, primary700] = useToken("colors", ["primary.500", "primary.600", "primary.700"]);

  let borderDefaultOptions = new BorderOptions(4, "solid", primary700);
  let frameDefaultOptions = new FrameOptions("xl", primary600, borderDefaultOptions);
  let pipeDefaultOptions = new PipeOptions(50, "horizontal", 18, primary600, borderDefaultOptions);
  let pipe4Options = new PipeOptions(50, "vertical", 18, primary600, borderDefaultOptions);

  let longPipeOptions = new PipeOptions(150, "horizontal", 18, primary600, borderDefaultOptions);

  let pipe7Options = new PipeOptions(50, "horizontal", 18, primary600, borderDefaultOptions);

  let f4Options = new FrameOptions("md", primary600, borderDefaultOptions);

  let builder = new Builder(45, frameDefaultOptions);
  let frame2 = new Frame("fr1", f4Options);

  let pipe30VOptions = new PipeOptions(30, "vertical", 18, primary600, borderDefaultOptions);

  let pipe1 = new Pipe("pipe1", pipeDefaultOptions);
  let pipe2 = new Pipe("pipe2", longPipeOptions);
  let pipe3 = new Pipe("pipe3", longPipeOptions);
  let pipe4 = new Pipe("pipe4", pipe4Options);
  let pipe7 = new Pipe("pipe7", pipe7Options);
  let pipe30V = new Pipe("pipe30V", pipe30VOptions);

  let jointOptions = new JointOptions("T", 0, 18, primary500, borderDefaultOptions);
  let kneeJoint = new Joint("knee1", jointOptions);

  let jointOptions2 = new JointOptions("knee", 90, 18, primary500, borderDefaultOptions);
  let kneeJoint2 = new Joint("knee2", jointOptions2);

  let jointOptions3 = new JointOptions("knee", 180, 18, primary500, borderDefaultOptions);
  let kneeJoint3 = new Joint("knee3", jointOptions3);

  let jointOptions4 = new JointOptions("knee", 0, 18, primary500, borderDefaultOptions);
  let kneeJoint4 = new Joint("knee4", jointOptions4);

  let crossJointOptions = new JointOptions("cross", 0, 18, primary500, borderDefaultOptions);
  let crossJoint4 = new Joint("cross", crossJointOptions);

  builder.getMainFrame();

  builder
    .appendLeft(builder.getNodes()[0], pipe1)
    ?.appendLeft(frame2)
    ?.appendLeft(pipe2)
    ?.appendLeft(kneeJoint)
    ?.appendLeft(pipe3);
  builder
    .appendBottom(kneeJoint, pipe4)
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
    kneeJoint,
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
