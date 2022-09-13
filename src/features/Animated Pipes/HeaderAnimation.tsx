// Lib Imports
import { Container, useToken } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// My Imports
import { LayerContainer } from "./Components/Layers";
import Builder from "./Builder/Builder";
import { FrameOptionsType } from "./Components/Frame";
import { BorderOptionsType } from "./Components/Types";
import Pipe, { PipeOptionsType } from "./Components/Pipe";
import { JointOptionsType } from "./Components/Joint";
import NodeObjectFactory from "./Builder/NodeFactory";
import { AnimationProperties } from "./Components/Types";
import ElectricityBolt from "./Assets/ElectricityBolt";
import YoutubeLogo from "./Assets/YoutubeLogo";
import InternetLogo from "./Assets/Internet";
import Switch from "./Assets/Switch";
import Database from "./Assets/Database";
import Coursera from "./Assets/Coursera";
import Khan from "./Assets/Khan";
import Udemy from "./Assets/Udemy";
import Gears from "./Assets/Gears";

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

  let builder = new Builder({ top: 25 }, mainFrameOptions, ElectricityBolt, {
    filterColor: "yellow",
    color: primary700,
    height: 64,
    width: 64,
  });

  /* 
    VERTICAL PIPES
  */

  const vPipeSwitch = factory.createVerticalPipe(40);

  const vPipeDb1 = factory.createVerticalPipe(10);
  const vPipeDb2 = factory.createVerticalPipe(40);
  const vPipeDb1Joint1 = factory.createVerticalPipe(100);
  const vPipeDb1Joint2 = factory.createVerticalPipe(172);
  const vPipeDb1Joint3 = factory.createVerticalPipe(240);

  const vSmallPipeSwitch1 = factory.createVerticalPipe(30);
  const vSmallPipeSwitch2 = factory.createVerticalPipe(40);

  // coursera
  const vPipeCoursera1 = factory.createVerticalPipe(20);
  const vPipeCoursera2 = factory.createVerticalPipe(20);
  const vPipeCoursera3 = factory.createVerticalPipe(20);
  const vPipeCoursera4 = factory.createVerticalPipe(20);
  const vPipeCoursera5 = factory.createVerticalPipe(20);
  const vPipeCoursera6 = factory.createVerticalPipe(250);

  // khan
  const vPipeKhan1 = factory.createVerticalPipe(54);

  // gears
  const vPipeGears1 = factory.createVerticalPipe(50);
  const vPipeGears2 = factory.createVerticalPipe(114);

  // youtube
  const vPipeYoutube1 = factory.createVerticalPipe(40);
  const vPipeYoutube2 = factory.createVerticalPipe(60);
  const vPipeYoutube3 = factory.createVerticalPipe(30);
  const vPipeYoutube4 = factory.createVerticalPipe(30);
  const vPipeYoutube5 = factory.createVerticalPipe(30);
  const vPipeYoutube6 = factory.createVerticalPipe(30);
  const vPipeYoutube7 = factory.createVerticalPipe(30);
  const vPipeYoutube8 = factory.createVerticalPipe(30);
  const vPipeChannel1Out1 = factory.createVerticalPipe(30);
  const vPipeChannel2Out1 = factory.createVerticalPipe(30);
  const vPipeChannel3Out1 = factory.createVerticalPipe(30);
  const vPipeChannel4Out1 = factory.createVerticalPipe(30);
  const vPipeChannel5Out1 = factory.createVerticalPipe(30);
  const vPipeChannel6Out1 = factory.createVerticalPipe(30);

  /* 
    HORIZONTAL PIPES
  */

  const hSmallPipeSwitch1 = factory.createHorizontalPipe(20);
  const hSmallPipeSwitch2 = factory.createHorizontalPipe(20);

  // db
  const hPipeDb1 = factory.createHorizontalPipe(70);
  const hPipeDb2 = factory.createHorizontalPipe(30);
  const hPipeDb3 = factory.createHorizontalPipe(30);
  const hPipeDb4 = factory.createHorizontalPipe(10);
  const hPipeDb5 = factory.createHorizontalPipe(10);
  const hPipeDb6 = factory.createHorizontalPipe(80);
  const hPipeDb1Joint1 = factory.createHorizontalPipe(40);
  const hPipeDb1Joint2 = factory.createHorizontalPipe(40);

  // server
  const hPipeServer1 = factory.createHorizontalPipe(50);
  const hPipeServer2 = factory.createHorizontalPipe(50);
  const hPipeServer3 = factory.createHorizontalPipe(50);

  // internet
  const hPipeInternet1 = factory.createHorizontalPipe(100);
  const hPipeInternet2 = factory.createHorizontalPipe(100);

  // coursera
  const hPipeCoursera1 = factory.createHorizontalPipe(60);
  const hPipeCoursera2 = factory.createHorizontalPipe(20);
  const hPipeCoursera3 = factory.createHorizontalPipe(20);
  const hPipeCoursera4 = factory.createHorizontalPipe(20);
  const hPipeCoursera5 = factory.createHorizontalPipe(20);
  const hPipeCoursera6 = factory.createHorizontalPipe(20);
  const hPipeCoursera7 = factory.createHorizontalPipe(500);

  // khan
  const hPipeKhan1 = factory.createHorizontalPipe(24);

  // udemy
  const hPipeUdemy1 = factory.createHorizontalPipe(52);
  const hPipeUdemy2 = factory.createHorizontalPipe(20);

  // gears
  const hPipeGears1 = factory.createHorizontalPipe(170);
  const hPipeGears2 = factory.createHorizontalPipe(10);

  // youtube
  const hPipeYoutube1 = factory.createHorizontalPipe(40);
  const hPipeYoutube2 = factory.createHorizontalPipe(20);
  const hPipeYoutube3 = factory.createHorizontalPipe(20);

  const hPipeChannelIn1 = factory.createHorizontalPipe(30);
  const hPipeChannelIn2 = factory.createHorizontalPipe(30);
  const hPipeChannelIn3 = factory.createHorizontalPipe(30);
  const hPipeChannelIn4 = factory.createHorizontalPipe(30);
  const hPipeChannelIn5 = factory.createHorizontalPipe(30);
  const hPipeChannelIn6 = factory.createHorizontalPipe(30);
  const hPipeChannel1Out1 = factory.createHorizontalPipe(30);
  const hPipeChannel2Out1 = factory.createHorizontalPipe(30);
  const hPipeChannel3Out1 = factory.createHorizontalPipe(30);
  const hPipeChannel3Out2 = factory.createHorizontalPipe(222);
  const hPipeChannel4Out1 = factory.createHorizontalPipe(30);
  const hPipeChannel5Out1 = factory.createHorizontalPipe(30);
  const hPipeChannel6Out1 = factory.createHorizontalPipe(30);
  vPipeGears2;
  /* 
    CROSS JOINTS
  */

  // gears
  const crossJointGears1 = factory.createCrossJoint();

  // youtube
  const crossJointChannel1 = factory.createCrossJoint();
  const crossJointChannel2 = factory.createCrossJoint();

  /* 
    T JOINTS
  */

  const tJointServer = factory.createTJoint();
  const tJointInternet = factory.createTJoint();

  // db
  const tJointDb1 = factory.createTJoint();
  const tJointDb2 = factory.createTJoint();
  const tJointDb3 = factory.createTJoint();
  const tJointDb4 = factory.createTJoint();

  // youtube
  const tJointYoutube1 = factory.createTJoint(90);
  const tJointYoutube2 = factory.createTJoint(90);
  const tJointYoutube3 = factory.createTJoint(90);
  const tJointYoutube4 = factory.createTJoint(90);
  const tJointYoutube5 = factory.createTJoint(90);
  const tJointChannel1 = factory.createTJoint(270);
  const tJointChannel2 = factory.createTJoint(270);
  const tJointChannel3 = factory.createTJoint(270);

  /* 
    KNEE JOINTS
  */

  // switch
  const kneeJointSwitch1 = factory.createKneeJoint(90);
  const kneeJointSwitch2 = factory.createKneeJoint(270);
  const kneeJointSwitch3 = factory.createKneeJoint(180);
  const kneeJointSwitch4 = factory.createKneeJoint(0);

  // db
  const kneeJointDb1 = factory.createKneeJoint(90);
  const kneeJointDb2 = factory.createKneeJoint(270);
  const kneeJointDb1Joint1 = factory.createKneeJoint(90);
  const kneeJointDb1Joint2 = factory.createKneeJoint(90);

  // coursera
  const kneeJointCoursera1 = factory.createKneeJoint(180);
  const kneeJointCoursera2 = factory.createKneeJoint();
  const kneeJointCoursera3 = factory.createKneeJoint(90);
  const kneeJointCoursera4 = factory.createKneeJoint(270);
  const kneeJointCoursera5 = factory.createKneeJoint(180);
  const kneeJointCoursera6 = factory.createKneeJoint();
  const kneeJointCoursera7 = factory.createKneeJoint(90);
  const kneeJointCoursera8 = factory.createKneeJoint(270);
  const kneeJointCoursera9 = factory.createKneeJoint(180);
  const kneeJointCoursera10 = factory.createKneeJoint();
  const kneeJointCoursera11 = factory.createKneeJoint(90);

  // khan
  const kneeJointKhan1 = factory.createKneeJoint(270);

  // gears
  const kneeJointGears1 = factory.createKneeJoint(90);
  const kneeJointGears2 = factory.createKneeJoint(180);
  const kneeJointGears3 = factory.createKneeJoint(270);

  // youtube
  const kneeJointYoutube1 = factory.createKneeJoint(90);
  const kneeJointYoutube2 = factory.createKneeJoint(270);
  const kneeJointYoutube3 = factory.createKneeJoint(180);
  const kneeJointYoutube4 = factory.createKneeJoint();
  const kneeJointYoutube5 = factory.createKneeJoint(90);
  const kneeJointChannel1 = factory.createKneeJoint(270);
  const kneeJointChannel2 = factory.createKneeJoint(180);

  const kneeJointServer = factory.createKneeJoint();

  /* 
    FRAMES
  */

  let switchFrame1 = factory.createFrame("md", Switch, { height: 40, width: 40, color: "black" });
  let internetFrame1 = factory.createFrame("md", InternetLogo, {
    filterColor: "white",
    color: primary700,
    height: 40,
    width: 40,
  });
  let dbFrame = factory.createFrame("lg", Database, {});
  let serverFrame1 = factory.createFrame("md");
  let khanFrame = factory.createFrame("md", Khan, { filterColor: "#14BF96", color: primary700 });
  let courseraFrame1 = factory.createFrame("md", Coursera, { width: 40, height: 40 });
  let udemyFrame = factory.createFrame("md", Udemy, { filterColor: "black", color: primary700, height: 40 });
  let gearsFrame = factory.createFrame("md", Gears, { filterColor: "black", color: "lightgray", height: 40 });
  let youtubeFrame = factory.createFrame("md", YoutubeLogo, { filterColor: "black", color: primary700, height: 32 });
  let channel1Frame = factory.createFrame("sm");
  let channel2Frame = factory.createFrame("sm");
  let channel3Frame = factory.createFrame("sm");
  let channel4Frame = factory.createFrame("sm");
  let channel5Frame = factory.createFrame("sm");
  let channel6Frame = factory.createFrame("sm");

  builder
    .appendRight(builder.getMainFrame(), hPipeInternet1)
    .appendRight(tJointInternet)
    .appendRight(hPipeInternet2)
    .appendRight(internetFrame1)
    .appendRight(hPipeDb1)
    .appendRight(kneeJointDb1)
    .appendTop(vPipeDb1)
    .appendTop(kneeJointDb2)
    .appendRight(hPipeDb2)
    .appendRight(dbFrame) // DATABASE FRAME PATH
    .appendRight(hPipeDb3)
    .appendRight(tJointDb1)
    .appendRight(hPipeDb4)
    .appendRight(tJointDb2)
    .appendRight(hPipeDb5)
    .appendRight(tJointDb3)
    .appendRight(hPipeDb6)
    .appendRight(tJointDb4)
    .appendRight(hPipeCoursera1) // TOP RIGHT joint
    .appendRight(courseraFrame1) // COURSERA
    .appendBottom(vPipeCoursera1)
    .appendBottom(kneeJointCoursera1)
    .appendRight(hPipeCoursera2)
    .appendRight(kneeJointCoursera2)
    .appendBottom(vPipeCoursera2)
    .appendBottom(kneeJointCoursera3)
    .appendLeft(hPipeCoursera3)
    .appendLeft(kneeJointCoursera4)
    .appendBottom(vPipeCoursera3)
    .appendBottom(kneeJointCoursera5)
    .appendRight(hPipeCoursera4)
    .appendRight(kneeJointCoursera6)
    .appendBottom(vPipeCoursera4)
    .appendBottom(kneeJointCoursera7)
    .appendLeft(hPipeCoursera5)
    .appendLeft(kneeJointCoursera8)
    .appendBottom(vPipeCoursera5)
    .appendBottom(kneeJointCoursera9)
    .appendRight(hPipeCoursera6)
    .appendRight(kneeJointCoursera10)
    .appendBottom(vPipeCoursera6)
    .appendBottom(kneeJointCoursera11) // BOTTOM right joint
    .appendLeft(hPipeCoursera7);

  builder
    .appendBottom(tJointDb1, vPipeDb1Joint1) // 1 Server Joint
    .appendBottom(kneeJointDb1Joint1)
    .appendLeft(hPipeDb1Joint1)
    .appendLeft(khanFrame) // KHAN FRAME
    .appendLeft(hPipeKhan1)
    .appendLeft(kneeJointKhan1)
    .appendBottom(vPipeKhan1);

  builder
    .appendBottom(tJointDb2, vPipeDb1Joint2) // 2 Server Joint
    .appendBottom(kneeJointDb1Joint2)
    .appendLeft(hPipeDb1Joint2)
    .appendLeft(udemyFrame) // Udemy Frame
    .appendLeft(hPipeUdemy1);

  builder
    .appendBottom(tJointDb3, vPipeDb1Joint3) // 3 Server Joint
    .appendBottom(kneeJointGears1)
    .appendLeft(hPipeGears1)
    .appendLeft(kneeJointGears2)
    .appendTop(vPipeGears1)
    .appendTop(crossJointGears1)
    .appendLeft(hPipeGears2)
    .appendLeft(kneeJointGears3)
    .appendBottom(vPipeGears2)
    .appendBottom(gearsFrame); // GEAARS

  builder
    .appendBottom(tJointDb4, vPipeDb2) // 4 Server Joint
    .appendBottom(kneeJointYoutube1)
    .appendLeft(hPipeYoutube1)
    .appendLeft(kneeJointYoutube2)
    .appendBottom(vPipeYoutube1)
    .appendBottom(kneeJointYoutube3)
    .appendRight(hPipeYoutube2)
    .appendRight(youtubeFrame) // YOUTUBE
    .appendRight(hPipeYoutube3)
    .appendRight(kneeJointYoutube4)
    .appendBottom(vPipeYoutube2)
    .appendBottom(tJointYoutube1) // first youtube channel
    .appendBottom(vPipeYoutube3)
    .appendBottom(tJointYoutube2) // second youtube channel
    .appendBottom(vPipeYoutube4)
    .appendBottom(tJointYoutube3) // third youtube channel
    .appendBottom(vPipeYoutube5)
    .appendBottom(tJointYoutube4)
    .appendBottom(vPipeYoutube6)
    .appendBottom(tJointYoutube5)
    .appendBottom(vPipeYoutube7)
    .appendBottom(kneeJointYoutube5);

  // First youtube channel
  builder
    .appendLeft(tJointYoutube1, hPipeChannelIn1)
    .appendLeft(channel1Frame)
    .appendLeft(hPipeChannel1Out1)
    .appendLeft(kneeJointChannel1)
    .appendBottom(vPipeChannel1Out1);

  // Second youtube channel
  builder
    .appendLeft(tJointYoutube2, hPipeChannelIn2)
    .appendLeft(channel2Frame)
    .appendLeft(hPipeChannel2Out1)
    .appendLeft(tJointChannel1)
    .appendBottom(vPipeChannel2Out1);

  // Third youtube channel
  builder
    .appendLeft(tJointYoutube3, hPipeChannelIn3)
    .appendLeft(channel3Frame)
    .appendLeft(hPipeChannel3Out1)
    .appendLeft(tJointChannel2)
    .appendBottom(vPipeChannel3Out1)
    .appendBottom(crossJointChannel1)
    .appendLeft(hPipeChannel3Out2);

  // Fourth youtube channel
  builder
    .appendLeft(tJointYoutube4, hPipeChannelIn4)
    .appendLeft(channel4Frame)
    .appendLeft(hPipeChannel4Out1)
    .appendLeft(crossJointChannel2)
    .appendTop(vPipeChannel4Out1);

  // Fifth youtube channel
  builder
    .appendLeft(tJointYoutube5, hPipeChannelIn5)
    .appendLeft(channel5Frame)
    .appendLeft(hPipeChannel5Out1)
    .appendLeft(tJointChannel3)
    .appendTop(vPipeChannel5Out1);

  // Sixth youtube channel
  builder
    .appendLeft(kneeJointYoutube5, hPipeChannelIn6)
    .appendLeft(channel6Frame)
    .appendLeft(hPipeChannel6Out1)
    .appendLeft(kneeJointChannel2)
    .appendTop(vPipeChannel6Out1);

  builder
    .appendBottom(tJointInternet, vPipeSwitch)
    .appendBottom(kneeJointSwitch1)
    .appendLeft(hSmallPipeSwitch1)
    .appendLeft(kneeJointSwitch2)
    .appendBottom(vSmallPipeSwitch1)
    .appendBottom(kneeJointSwitch3)
    .appendRight(hSmallPipeSwitch2)
    .appendRight(kneeJointSwitch4)
    .appendBottom(vSmallPipeSwitch2)
    .appendBottom(switchFrame1); // SWITCH path from first joint

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
        {builder.getAnimations().map((anim) => anim)}
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
