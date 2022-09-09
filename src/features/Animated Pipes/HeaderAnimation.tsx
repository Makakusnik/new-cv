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

const HeaderAnimation = () => {
  const [primary600, primary700] = useToken("colors", [
    "primary.600",
    "primary.700",
  ]);

  let borderDefaultOptions = new BorderOptions(4, "solid", primary700);
  let frameDefaultOptions = new FrameOptions(
    "md",
    primary600,
    borderDefaultOptions
  );
  let pipeDefaultOptions = new PipeOptions(
    50,
    "horizontal",
    18,
    primary600,
    borderDefaultOptions
  );
  let pipe4Options = new PipeOptions(
    50,
    "vertical",
    18,
    primary600,
    borderDefaultOptions
  );

  let longPipeOptions = new PipeOptions(
    150,
    "horizontal",
    18,
    primary600,
    borderDefaultOptions
  );

  let pipe5Options = new PipeOptions(
    100,
    "horizontal",
    18,
    primary600,
    borderDefaultOptions
  );

  let builder = new Builder(180, frameDefaultOptions);
  let frame2 = new Frame("fr1", frameDefaultOptions);
  let frame4 = new Frame("fr2", frameDefaultOptions);
  let frame6 = new Frame("fr3", frameDefaultOptions);
  let frame7 = new Frame("fr4", frameDefaultOptions);
  let frame3 = new Frame("fr5");
  let frame5 = new Frame("fr6");
  let frame8 = new Frame("fr8", frameDefaultOptions);
  let frame9 = new Frame("fr9", frameDefaultOptions);

  let pipe1 = new Pipe("pipe1", pipeDefaultOptions);
  let pipe2 = new Pipe("pipe2", longPipeOptions);
  let pipe3 = new Pipe("pipe3", longPipeOptions);
  let pipe4 = new Pipe("pipe4", pipe4Options);
  let pipe5 = new Pipe("pipe5", pipe5Options);
  let pipe6 = new Pipe("pipe6", pipe4Options);

  builder.getMainFrame();
  builder.appendLeft(builder.getNodes()[0], pipe1);
  builder.appendBottom(builder.getNodes()[0], frame3);
  builder.appendUp(builder.getNodes()[0], frame5);
  builder.appendLeft(pipe1, frame2);
  builder.appendLeft(frame2, pipe2);
  builder.appendLeft(pipe2, frame7);
  builder.appendRight(builder.getNodes()[0], pipe3);
  builder.appendRight(pipe3, frame4);
  builder.appendBottom(frame4, pipe4);
  builder.appendBottom(pipe4, frame6);
  builder.appendRight(frame6, pipe5);
  builder.appendRight(pipe5, frame8);
  builder.appendUp(frame8, pipe6);
  builder.appendUp(pipe6, frame9);

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
      <SvgFrame size="lg" top="35px">
        <ElectricityBolt sizeInPx="50px" />
      </SvgFrame>
      <LayerContainer top="0px" zIndex="1">
        {builder.getNodes().map((node) => {
          return node.getNode();
        })}
      </LayerContainer>
      <Bullet top="75px" path="M 0 0 h 147 v 58 h 30 h 63 v -55" />
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
        <SvgFrame size="md" top="3px" left="207px">
          <YoutubeLogo sizeInPx="30" />
        </SvgFrame>
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
      <button
        style={{
          position: "absolute",
          top: "100px",
          left: "100px",
          backgroundColor: "gray",
          padding: "8px 16px",
        }}
        onClick={() => {
          console.log(
            `Y S: ${frame2.getYStart()} C: ${frame2.getYCenter()} E: ${frame2.getYEnd()}`
          );
          console.log(
            `X S: ${frame2.getXStart()} C: ${frame2.getXCenter()} E: ${frame2.getXEnd()}`
          );
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
  path: string;
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
  background: yellow;
  z-index: 1;
`;

const Bullet = (props: any) => {
  return (
    <Boxik
      {...props}
      path={props.path}
      id="motion-demo"
      height="3px"
      width="3px"
      bgColor={props.color}
    />
  );
};

export default HeaderAnimation;
