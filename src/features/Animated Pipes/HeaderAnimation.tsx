// Lib Imports
import { Container, useToken } from "@chakra-ui/react";

// My Imports
import { LayerContainer } from "./Components/Layers";
import Builder from "./Builder/Builder";
import { FrameOptionsType } from "./Components/Frame";
import { BorderOptionsType } from "./Components/Types";
import { PipeOptionsType } from "./Components/Pipe";
import { JointOptionsType } from "./Components/Joint";
import NodeObjectFactory from "./Builder/NodeFactory";
import ElectricityBolt from "./Assets/ElectricityBolt";
import YoutubeLogo from "./Assets/YoutubeLogo";
import InternetLogo from "./Assets/Internet";
import Switch from "./Assets/Switch";
import Database from "./Assets/Database";
import Coursera from "./Assets/Coursera";
import Khan from "./Assets/Khan";
import Udemy from "./Assets/Udemy";
import Gears from "./Assets/Gears";
import WebDevSimplified from "./Assets/Webdev";
import Fireship from "./Assets/Fireship";
import TraversyMedia from "./Assets/TraversyMedia";
import NetNinja from "./Assets/Netninja";
import FreeCodeCamp from "./Assets/Freedcodecamp";
import Brain from "./Assets/Brain";
import PluralSight from "./Assets/PluralSight";
import Mdn from "./Assets/Mdn";
import StackOverflow from "./Assets/StackOverflow";

const HeaderAnimation = () => {
  const [primary300, primary400, primary500, primary600, primary700] = useToken("colors", [
    "primary300",
    "primary.400",
    "primary.500",
    "primary.600",
    "primary.700",
  ]);

  let defaultBorderOptions: BorderOptionsType = { thickness: 4, type: "solid", color: primary600, overlap: 4 };
  let defaultJointOptions: JointOptionsType = {
    backgroundColor: primary300,
    thickness: 18,
  };
  let defaultFrameOptions: FrameOptionsType = {
    backgroundColor: primary400,
    size: "md",
  };
  let defaultPipeOptions: PipeOptionsType = {
    backgroundColor: primary400,
    thickness: 18,
  };

  let mainFrameOptions: FrameOptionsType = {
    size: "xl",
    backgroundColor: primary400,
    borderOptions: defaultBorderOptions,
  };

  // Factory instance

  const factory = new NodeObjectFactory(defaultBorderOptions, defaultJointOptions, defaultFrameOptions, defaultPipeOptions);

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
  const vPipeCoursera6 = factory.createVerticalPipe(20);
  const vPipeCoursera7 = factory.createVerticalPipe(20);
  const vPipeCoursera8 = factory.createVerticalPipe(20);
  const vPipeCoursera9 = factory.createVerticalPipe(20);
  const vPipeCoursera10 = factory.createVerticalPipe(20);
  const vPipeCoursera11 = factory.createVerticalPipe(20);
  const vPipeCoursera12 = factory.createVerticalPipe(20);
  const vPipeCoursera13 = factory.createVerticalPipe(20);
  const vPipeCoursera14 = factory.createVerticalPipe(525);
  const vPipeCoursera15 = factory.createVerticalPipe(500);
  const vPipeCoursera16 = factory.createVerticalPipe(163);

  // khan
  const vPipeKhan1 = factory.createVerticalPipe(54);

  // pluralsight
  const vPipePluralSight1 = factory.createVerticalPipe(50);

  // gears
  const vPipeGears1 = factory.createVerticalPipe(50);
  const vPipeGears2 = factory.createVerticalPipe(114);
  const vPipeGears3 = factory.createVerticalPipe(100, { thickness: 30 });

  // youtube
  const vPipeYoutube1 = factory.createVerticalPipe(40);
  const vPipeYoutube2 = factory.createVerticalPipe(60);
  const vPipeYoutube3 = factory.createVerticalPipe(45);
  const vPipeYoutube4 = factory.createVerticalPipe(45);
  const vPipeYoutube5 = factory.createVerticalPipe(45);
  const vPipeYoutube6 = factory.createVerticalPipe(45);
  const vPipeChannel1Out1 = factory.createVerticalPipe(45);
  const vPipeChannel2Out1 = factory.createVerticalPipe(45);
  const vPipeChannel3Out1 = factory.createVerticalPipe(45);
  const vPipeChannel5Out1 = factory.createVerticalPipe(45);
  const vPipeChannelAllOut1 = factory.createVerticalPipe(27);

  // Brain
  const vPipeBrain1 = factory.createVerticalPipe(150, { thickness: 30 });

  // mdn
  const vPipeMdn1 = factory.createVerticalPipe(80);
  const vPipeMdn2 = factory.createVerticalPipe(62);

  // stack overflow
  const vPipeStack1 = factory.createVerticalPipe(20);
  const vPipeStack2 = factory.createVerticalPipe(38);

  // window
  const vPipeWindow = factory.createVerticalPipe(176);

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
  const hPipeCoursera7 = factory.createHorizontalPipe(20);
  const hPipeCoursera8 = factory.createHorizontalPipe(20);
  const hPipeCoursera9 = factory.createHorizontalPipe(20);
  const hPipeCoursera10 = factory.createHorizontalPipe(20);
  const hPipeCoursera11 = factory.createHorizontalPipe(20);
  const hPipeCoursera12 = factory.createHorizontalPipe(20);
  const hPipeCoursera13 = factory.createHorizontalPipe(20);
  const hPipeCoursera14 = factory.createHorizontalPipe(60);
  const hPipeCoursera15 = factory.createHorizontalPipe(20);
  const hPipeCoursera16 = factory.createHorizontalPipe(506);

  // khan
  const hPipeKhan1 = factory.createHorizontalPipe(24);

  // udemy
  const hPipeUdemy1 = factory.createHorizontalPipe(52);

  // pluralsight
  const hPipePluralSight1 = factory.createHorizontalPipe(110);
  const hPipePluralSight2 = factory.createHorizontalPipe(10);

  // gears
  const hPipeGears2 = factory.createHorizontalPipe(10);
  const hPipeGearsOut1 = factory.createHorizontalPipe(90, { thickness: 30 });
  const hPipeGearsOut2 = factory.createHorizontalPipe(175, { thickness: 30 });

  // youtube
  const hPipeYoutube1 = factory.createHorizontalPipe(40);
  const hPipeYoutube2 = factory.createHorizontalPipe(20);
  const hPipeYoutube3 = factory.createHorizontalPipe(20);

  const hPipeChannelIn1 = factory.createHorizontalPipe(25);
  const hPipeChannelIn2 = factory.createHorizontalPipe(25);
  const hPipeChannelIn3 = factory.createHorizontalPipe(25);
  const hPipeChannelIn4 = factory.createHorizontalPipe(25);
  const hPipeChannelIn5 = factory.createHorizontalPipe(25);
  const hPipeChannel1Out1 = factory.createHorizontalPipe(25);
  const hPipeChannel2Out1 = factory.createHorizontalPipe(25);
  const hPipeChannel3Out1 = factory.createHorizontalPipe(25);
  const hPipeChannel3Out2 = factory.createHorizontalPipe(50);
  const hPipeChannel4Out1 = factory.createHorizontalPipe(25);
  const hPipeChannel5Out1 = factory.createHorizontalPipe(25);
  const hPipeChannelAllOut1 = factory.createHorizontalPipe(144);

  // brain
  const hPipeBrain1 = factory.createHorizontalPipe(320, { thickness: 30 });

  // mdn
  const hPipeMdn1 = factory.createHorizontalPipe(20);
  const hPipeMdn2 = factory.createHorizontalPipe(10);
  const hPipeMdn3 = factory.createHorizontalPipe(40);

  // stack overflow
  const hPipeStack1 = factory.createHorizontalPipe(10);
  const hPipeStack2 = factory.createHorizontalPipe(20);

  // connector
  const hPipeConnector1 = factory.createHorizontalPipe(16);

  // window
  const hPipeWindow = factory.createHorizontalPipe(351);
  /* 
    CROSS JOINTS
  */

  // gears
  const crossJointGears1 = factory.createCrossJoint();

  // youtube
  const crossJointChannel1 = factory.createCrossJoint();

  /* 
    T JOINTS
  */

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
  const tJointChannel1 = factory.createTJoint(270);
  const tJointChannel2 = factory.createTJoint(270);

  //mdn
  const tJointMdn1 = factory.createTJoint(90);

  //stackoverflow
  const tJointStack1 = factory.createTJoint(270);

  // gears
  const tJointGears1 = factory.createTJoint(0);

  // connector
  const tJointConnector1 = factory.createTJoint(0);

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
  const kneeJointCoursera12 = factory.createKneeJoint(270);
  const kneeJointCoursera13 = factory.createKneeJoint(180);
  const kneeJointCoursera14 = factory.createKneeJoint();
  const kneeJointCoursera15 = factory.createKneeJoint(90);
  const kneeJointCoursera16 = factory.createKneeJoint(270);
  const kneeJointCoursera17 = factory.createKneeJoint(180);
  const kneeJointCoursera18 = factory.createKneeJoint();
  const kneeJointCoursera19 = factory.createKneeJoint(90);
  const kneeJointCoursera20 = factory.createKneeJoint(270);
  const kneeJointCoursera21 = factory.createKneeJoint(180);
  const kneeJointCoursera22 = factory.createKneeJoint();
  const kneeJointCoursera23 = factory.createKneeJoint(90);
  const kneeJointCoursera24 = factory.createKneeJoint(270);
  const kneeJointCoursera25 = factory.createKneeJoint(180);
  const kneeJointCoursera26 = factory.createKneeJoint(90);
  const kneeJointCoursera30 = factory.createKneeJoint(270);
  const kneeJointCoursera31 = factory.createKneeJoint(0);
  const kneeJointCoursera32 = factory.createKneeJoint(90);
  const kneeJointCoursera33 = factory.createKneeJoint(180);

  // khan
  const kneeJointKhan1 = factory.createKneeJoint(270);

  // gears
  const kneeJointGears1 = factory.createKneeJoint(90);
  const kneeJointGears2 = factory.createKneeJoint(180);
  const kneeJointGears4 = factory.createKneeJoint(270, { thickness: 30 });
  const kneeJointGears5 = factory.createKneeJoint(90, { thickness: 30 });

  // youtube
  const kneeJointYoutube1 = factory.createKneeJoint(90);
  const kneeJointYoutube2 = factory.createKneeJoint(270);
  const kneeJointYoutube3 = factory.createKneeJoint(180);
  const kneeJointYoutube4 = factory.createKneeJoint();
  const kneeJointYoutube5 = factory.createKneeJoint(90);
  const kneeJointChannel1 = factory.createKneeJoint(270);
  const kneeJointChannel2 = factory.createKneeJoint(180);
  const kneeJointChannelOut1 = factory.createKneeJoint(180);
  const kneeJointChannelOut2 = factory.createKneeJoint(0);

  // brian
  const kneeJointBrain1 = factory.createKneeJoint(180, { thickness: 30 });

  // pluralsight
  const kneeJointPluralSight = factory.createKneeJoint(180);

  // mdn
  const kneeJointMdn1 = factory.createKneeJoint(270);
  const kneeJointMdn2 = factory.createKneeJoint(0);

  // stack overflow
  const kneeJointStack1 = factory.createKneeJoint(180);
  const kneeJointStack2 = factory.createKneeJoint(90);

  // window
  const kneeJointWindow = factory.createKneeJoint(270);

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
  let khanFrame = factory.createFrame(
    "md",
    Khan,
    { filterColor: "#14BF96", color: primary700 },
    "https://www.khanacademy.org/",
    "Khan Academy"
  );
  let courseraFrame1 = factory.createFrame("md", Coursera, { width: 40, height: 40 }, "https://www.coursera.org/", "Coursera");
  let udemyFrame = factory.createFrame(
    "md",
    Udemy,
    { filterColor: "black", color: primary700, height: 40 },
    "https://www.udemy.com/",
    "Udemy"
  );
  let pluralSightFrame = factory.createFrame(
    "md",
    PluralSight,
    {
      filterColor: "black",
      color: primary700,
      height: 40,
      width: 40,
    },
    "https://www.pluralsight.com/",
    "Plural Sight"
  );
  let gearsFrame = factory.createFrame("md", Gears, { filterColor: "black", color: "#2f2f2f", height: 40 });
  let youtubeFrame = factory.createFrame("md", YoutubeLogo, { filterColor: "red", color: primary700, height: 32 });
  let channel1Frame = factory.createFrame(
    "md",
    WebDevSimplified,
    {
      filterColor: "#00aaff",
      color: primary700,
      width: 48,
      height: 48,
    },
    "https://www.youtube.com/c/WebDevSimplified",
    "Web Dev Simplified"
  );
  let channel2Frame = factory.createFrame(
    "md",
    Fireship,
    {
      color: primary700,
      width: 40,
      height: 32,
    },
    "https://www.youtube.com/c/Fireship",
    "Fireship"
  );
  let channel3Frame = factory.createFrame(
    "md",
    TraversyMedia,
    {
      color: primary700,
      width: 40,
      height: 40,
    },
    "https://www.youtube.com/c/TraversyMedia",
    "Traversy Media"
  );
  let channel4Frame = factory.createFrame(
    "md",
    NetNinja,
    {
      color: primary700,
      filterColor: "#d91b41",
      width: 40,
      height: 40,
    },
    "https://www.youtube.com/c/TheNetNinja",
    "Net Ninja"
  );
  let channel5Frame = factory.createFrame(
    "md",
    FreeCodeCamp,
    {
      color: primary700,
      filterColor: "darkblue",
      width: 40,
      height: 40,
    },
    "https://www.youtube.com/c/Freecodecamp",
    "FreeCodeCamp"
  );

  let brainFrame = factory.createFrame("xl2", Brain, {
    color: primary700,
    width: 100,
    height: 100,
  });

  let mdnFrame = factory.createFrame(
    "lg",
    Mdn,
    {
      color: primary700,
      filterColor: "white",
      width: 75,
      height: 75,
    },
    "https://developer.mozilla.org/en-US/",
    "MDN Web Docs"
  );

  let stackFrame = factory.createFrame(
    "xl",
    StackOverflow,
    {
      color: primary700,
      filterColor: "white",
      width: 100,
      height: 100,
    },
    "https://stackoverflow.com/",
    "Stack Overflow"
  );

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
    .endChain();

  const pathCourseraToLastPipe = builder
    .appendBottom(courseraFrame1, vPipeCoursera1)
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
    .appendBottom(kneeJointCoursera11)
    .appendLeft(hPipeCoursera7)
    .appendLeft(kneeJointCoursera12)
    .appendBottom(vPipeCoursera7)
    .appendBottom(kneeJointCoursera13)
    .appendRight(hPipeCoursera8)
    .appendRight(kneeJointCoursera14)
    .appendBottom(vPipeCoursera8)
    .appendBottom(kneeJointCoursera15)
    .appendLeft(hPipeCoursera9)
    .appendLeft(kneeJointCoursera16)
    .appendBottom(vPipeCoursera9)
    .appendBottom(kneeJointCoursera17) // last
    .appendRight(hPipeCoursera10)
    .appendRight(kneeJointCoursera18)
    .appendBottom(vPipeCoursera10)
    .appendBottom(kneeJointCoursera19)
    .appendLeft(hPipeCoursera11)
    .appendLeft(kneeJointCoursera20)
    .appendBottom(vPipeCoursera11)
    .appendBottom(kneeJointCoursera21)
    .appendRight(hPipeCoursera12)
    .appendRight(kneeJointCoursera22)
    .appendBottom(vPipeCoursera12)
    .appendBottom(kneeJointCoursera23)
    .appendLeft(hPipeCoursera13)
    .appendLeft(kneeJointCoursera24)
    .appendBottom(vPipeCoursera13)
    .appendBottom(kneeJointCoursera25)
    .appendRight(hPipeCoursera14)
    .appendRight(kneeJointCoursera26)
    .appendTop(vPipeCoursera15)
    .appendTop(kneeJointCoursera30)
    .appendRight(hPipeCoursera15)
    .appendRight(kneeJointCoursera31)
    .appendBottom(vPipeCoursera14)
    .appendBottom(kneeJointCoursera32)
    .appendLeft(hPipeCoursera16)
    .appendLeft(kneeJointCoursera33)
    .appendTop(vPipeCoursera16)
    .endChain();

  builder
    .appendBottom(tJointDb1, vPipeDb1Joint1) // 1 Server Joint
    .appendBottom(kneeJointDb1Joint1)
    .appendLeft(hPipeDb1Joint1)
    .appendLeft(khanFrame) // KHAN FRAME
    .appendLeft(hPipeKhan1)
    .appendLeft(kneeJointKhan1)
    .appendBottom(vPipeKhan1)
    .endChain();

  builder
    .appendBottom(tJointDb2, vPipeDb1Joint2) // 2 Server Joint
    .appendBottom(kneeJointDb1Joint2)
    .appendLeft(hPipeDb1Joint2)
    .appendLeft(udemyFrame) // Udemy Frame
    .appendLeft(hPipeUdemy1)
    .endChain();

  builder
    .appendBottom(tJointDb3, vPipeDb1Joint3) // 3 Server Joint
    .appendBottom(kneeJointGears1)
    .appendLeft(hPipePluralSight1)
    .appendLeft(pluralSightFrame)
    .appendLeft(hPipePluralSight2)
    .appendLeft(kneeJointPluralSight)
    .appendTop(vPipePluralSight1)
    .endChain();

  builder
    .appendLeft(hPipeUdemy1, crossJointGears1)
    .appendLeft(hPipeGears2)
    .appendLeft(tJointGears1)
    .appendBottom(vPipeGears2)
    .appendBottom(gearsFrame) // GEAARS
    .appendLeft(hPipeGearsOut1)
    .appendLeft(kneeJointGears4)
    .appendBottom(vPipeGears3)
    .appendBottom(kneeJointGears5)
    .appendLeft(hPipeGearsOut2)
    .appendLeft(brainFrame) // BRAIN
    .endChain();

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
    .appendBottom(tJointYoutube4) // fourth youtube channel
    .appendBottom(vPipeYoutube6)
    .appendBottom(kneeJointYoutube5) // fifth youtube channel
    .endChain();

  // First youtube channel
  builder
    .appendLeft(tJointYoutube1, hPipeChannelIn1)
    .appendLeft(channel1Frame)
    .appendLeft(hPipeChannel1Out1)
    .appendLeft(kneeJointChannel1)
    .appendBottom(vPipeChannel1Out1)
    .endChain();

  // Second youtube channel
  builder
    .appendLeft(tJointYoutube2, hPipeChannelIn2)
    .appendLeft(channel2Frame)
    .appendLeft(hPipeChannel2Out1)
    .appendLeft(tJointChannel1)
    .appendBottom(vPipeChannel2Out1)
    .endChain();

  // Third youtube channel
  builder
    .appendLeft(tJointYoutube3, hPipeChannelIn3)
    .appendLeft(channel3Frame)
    .appendLeft(hPipeChannel3Out1)
    .appendLeft(tJointChannel2)
    .appendBottom(vPipeChannel3Out1)
    .appendBottom(crossJointChannel1)
    .appendLeft(hPipeChannel3Out2)
    .appendLeft(kneeJointChannelOut1)
    .appendTop(vPipeChannelAllOut1)
    .appendTop(kneeJointChannelOut2)
    .appendLeft(hPipeChannelAllOut1)
    .endChain();

  // Fourth youtube channel
  builder.appendLeft(tJointYoutube4, hPipeChannelIn4).appendLeft(channel4Frame).appendLeft(hPipeChannel4Out1).endChain();

  // Fifth youtube channel
  builder
    .appendLeft(kneeJointYoutube5, hPipeChannelIn5)
    .appendLeft(channel5Frame)
    .appendLeft(hPipeChannel5Out1)
    .appendLeft(kneeJointChannel2)
    .appendTop(vPipeChannel5Out1)
    .endChain();

  const firstJointToSwitch = builder
    .appendBottom(tJointInternet, vPipeSwitch)
    .appendBottom(kneeJointSwitch1)
    .appendLeft(hSmallPipeSwitch1)
    .appendLeft(kneeJointSwitch2)
    .appendBottom(vSmallPipeSwitch1)
    .appendBottom(kneeJointSwitch3)
    .appendRight(hSmallPipeSwitch2)
    .appendRight(kneeJointSwitch4)
    .appendBottom(vSmallPipeSwitch2)
    .appendBottom(switchFrame1)
    .endChain(); // SWITCH path from first joint

  builder
    .appendRight(switchFrame1, hPipeMdn1)
    .appendRight(tJointMdn1)
    .appendTop(vPipeMdn1)
    .appendTop(kneeJointMdn1)
    .appendRight(hPipeMdn2)
    .appendRight(mdnFrame)
    .appendRight(hPipeMdn3)
    .appendRight(kneeJointMdn2)
    .appendBottom(vPipeMdn2)
    .endChain(); // MDN Frame

  builder
    .appendBottom(tJointMdn1, vPipeStack1)
    .appendBottom(kneeJointStack1)
    .appendRight(hPipeStack1)
    .appendRight(stackFrame)
    .appendRight(hPipeStack2)
    .appendRight(kneeJointStack2)
    .appendTop(vPipeStack2)
    .appendTop(tJointStack1)
    .appendRight(hPipeConnector1)
    .endChain(); // STACK Frame

  // prettier-ignore
  const pathMainToSwitch = [builder.getMainFrame(), hPipeInternet1, ...firstJointToSwitch];

  // prettier-ignore
  const pathMainToInternet = [builder.getMainFrame(), hPipeInternet1, tJointInternet, hPipeInternet2,internetFrame1];

  // prettier-ignore
  const pathInternetToDatabase = [internetFrame1, hPipeDb1, kneeJointDb1, vPipeDb1, kneeJointDb2, hPipeDb2, dbFrame];

  // prettier-ignore
  const pathDatabaseToCoursera = [dbFrame, hPipeDb3, tJointDb1, hPipeDb4, tJointDb2, hPipeDb5, tJointDb3, hPipeDb6, tJointDb4, hPipeCoursera1, courseraFrame1];

  // prettier-ignore
  const pathDatabaseToYoutube = [dbFrame, hPipeDb3, tJointDb1, hPipeDb4, tJointDb2, hPipeDb5, tJointDb3, hPipeDb6, tJointDb4, vPipeDb2, kneeJointYoutube1, hPipeYoutube1, kneeJointYoutube2, vPipeYoutube1, kneeJointYoutube3, hPipeYoutube2, youtubeFrame];

  // prettier-ignore
  const pathYoutubeToFirstChannel = [youtubeFrame, hPipeYoutube3, kneeJointYoutube4, vPipeYoutube2, tJointYoutube1,hPipeChannelIn1,channel1Frame];

  // prettier-ignore
  const pathYoutubeToSecondChannel = [youtubeFrame, hPipeYoutube3, kneeJointYoutube4, vPipeYoutube2, tJointYoutube1, vPipeYoutube3, tJointYoutube2, hPipeChannelIn2, channel2Frame];

  // prettier-ignore
  const pathYoutubeToThirdChannel = [youtubeFrame, hPipeYoutube3, kneeJointYoutube4, vPipeYoutube2, tJointYoutube1, vPipeYoutube3, tJointYoutube2, vPipeYoutube4, tJointYoutube3, hPipeChannelIn3, channel3Frame];

  // prettier-ignore
  const pathYoutubeToFourthChannel = [youtubeFrame, hPipeYoutube3, kneeJointYoutube4, vPipeYoutube2, tJointYoutube1, vPipeYoutube3, tJointYoutube2, vPipeYoutube4, tJointYoutube3, vPipeYoutube5, tJointYoutube4, hPipeChannelIn4, channel4Frame];

  // prettier-ignore
  const pathYoutubeToFifthChannel = [youtubeFrame, hPipeYoutube3, kneeJointYoutube4, vPipeYoutube2, tJointYoutube1, vPipeYoutube3, tJointYoutube2, vPipeYoutube4, tJointYoutube3, vPipeYoutube5, tJointYoutube4, vPipeYoutube6, kneeJointYoutube5, hPipeChannelIn5, channel5Frame];

  // prettier-ignore
  const pathFirstYoutubeChannelToGears = [channel1Frame, hPipeChannel1Out1, kneeJointChannel1, vPipeChannel1Out1, tJointChannel1, vPipeChannel2Out1, tJointChannel2, vPipeChannel3Out1, crossJointChannel1, hPipeChannel3Out2, kneeJointChannelOut1, vPipeChannelAllOut1, kneeJointChannelOut2, hPipeChannelAllOut1, gearsFrame];

  // prettier-ignore
  const pathSecondYoutubeChannelToGears = [channel2Frame, hPipeChannel2Out1, tJointChannel1, vPipeChannel2Out1, tJointChannel2, vPipeChannel3Out1, crossJointChannel1, hPipeChannel3Out2, kneeJointChannelOut1, vPipeChannelAllOut1, kneeJointChannelOut2, hPipeChannelAllOut1, gearsFrame];

  // prettier-ignore
  const pathThirdYoutubeChannelToGears = [channel3Frame, hPipeChannel3Out1, tJointChannel2, vPipeChannel3Out1, crossJointChannel1, hPipeChannel3Out2, kneeJointChannelOut1, vPipeChannelAllOut1, kneeJointChannelOut2, hPipeChannelAllOut1, gearsFrame];

  // prettier-ignore
  const pathFourthYoutubeChannelToGears = [channel4Frame, hPipeChannel4Out1, crossJointChannel1, hPipeChannel3Out2, kneeJointChannelOut1, vPipeChannelAllOut1, kneeJointChannelOut2, hPipeChannelAllOut1, gearsFrame];

  // prettier-ignore
  const pathFifthYoutubeChannelToGears = [channel5Frame, hPipeChannel5Out1, kneeJointChannel2, vPipeChannel5Out1, crossJointChannel1, hPipeChannel3Out2, kneeJointChannelOut1, vPipeChannelAllOut1, kneeJointChannelOut2, hPipeChannelAllOut1, gearsFrame];

  // prettier-ignore
  const pathGearsToBrain = [gearsFrame, hPipeGearsOut1, kneeJointGears4, vPipeGears3, kneeJointGears5, hPipeGearsOut2, brainFrame];

  // prettier-ignore
  const pathCourseraToGears = [...pathCourseraToLastPipe, gearsFrame];

  // prettier-ignore
  const pathDatabaseToKhan = [dbFrame, hPipeDb3, tJointDb1, vPipeDb1Joint1, kneeJointDb1Joint1, hPipeDb1Joint1, khanFrame];

  // prettier-ignore
  const pathDatabaseToUdemy = [dbFrame, hPipeDb3, tJointDb1, hPipeDb4, tJointDb2, vPipeDb1Joint2, kneeJointDb1Joint2, hPipeDb1Joint2, udemyFrame];

  // prettier-ignore
  const pathDatabaseToPluralSight = [dbFrame, hPipeDb3, tJointDb1, hPipeDb4, tJointDb2, hPipeDb5, tJointDb3, vPipeDb1Joint3, kneeJointGears1, hPipePluralSight1, pluralSightFrame];

  // prettier-ignore
  const pathKhanToGears = [khanFrame, hPipeKhan1, kneeJointKhan1, vPipeKhan1, crossJointGears1, hPipeGears2, tJointGears1, vPipeGears2, gearsFrame];

  // prettier-ignore
  const pathUdemyToGears = [udemyFrame, hPipeUdemy1, crossJointGears1, hPipeGears2, tJointGears1, vPipeGears2, gearsFrame];

  // prettier-ignore
  const pathPluralSightToGears = [pluralSightFrame, hPipePluralSight2, kneeJointPluralSight, vPipePluralSight1, crossJointGears1, hPipeGears2, tJointGears1, vPipeGears2, gearsFrame];

  // prettier-ignore
  const pathSwitchToMdn = [switchFrame1, hPipeMdn1, tJointMdn1, vPipeMdn1, kneeJointMdn1, hPipeMdn2, mdnFrame];

  // prettier-ignore
  const pathMdnToGears = [mdnFrame, hPipeMdn3, kneeJointMdn2, vPipeMdn2, tJointStack1, hPipeConnector1, tJointGears1, vPipeGears2, gearsFrame];

  // prettier-ignore
  const pathStackToGears = [stackFrame, hPipeStack2, kneeJointStack2, vPipeStack2, tJointStack1, hPipeConnector1, tJointGears1, vPipeGears2, gearsFrame];

  // prettier-ignore
  const pathSwitchToStack = [switchFrame1, hPipeMdn1, tJointMdn1, vPipeStack1, kneeJointStack1, hPipeStack1, stackFrame];

  // electric -> internet
  builder.createAnimation({ duration: 2000, delay: 800, backgroundColor: "yellow" }, ...pathMainToInternet);
  builder.createAnimation({ duration: 2000, delay: 800, backgroundColor: "yellow" }, ...pathMainToInternet);
  builder.createAnimation({ duration: 2000, delay: 1400, backgroundColor: "yellow" }, ...pathMainToInternet);
  builder.createAnimation({ duration: 2000, delay: 1200, backgroundColor: "yellow" }, ...pathMainToInternet);
  builder.createAnimation({ duration: 2000, delay: 1000, backgroundColor: "yellow" }, ...pathMainToInternet);

  // electric -> switch
  builder.createAnimation({ duration: 2000, delay: 900, backgroundColor: "yellow" }, ...pathMainToSwitch);
  builder.createAnimation({ duration: 2000, delay: 1100, backgroundColor: "yellow" }, ...pathMainToSwitch);
  builder.createAnimation({ duration: 2000, delay: 1200, backgroundColor: "yellow" }, ...pathMainToSwitch);

  // internet -> db
  builder.createAnimation({ duration: 2500, delay: 5500, backgroundColor: "white" }, ...pathInternetToDatabase);
  builder.createAnimation({ duration: 3000, delay: 5500, backgroundColor: "white" }, ...pathInternetToDatabase);
  builder.createAnimation({ duration: 4000, delay: 5500, backgroundColor: "white" }, ...pathInternetToDatabase);
  builder.createAnimation({ duration: 1500, delay: 5500, backgroundColor: "white" }, ...pathInternetToDatabase);
  builder.createAnimation({ duration: 1700, delay: 5500, backgroundColor: "white" }, ...pathInternetToDatabase);

  // db -> coursera
  builder.createAnimation({ duration: 1700, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToCoursera);
  builder.createAnimation({ duration: 1500, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToCoursera);
  builder.createAnimation({ duration: 1200, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToCoursera);
  builder.createAnimation({ duration: 2000, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToCoursera);

  // db -> khan
  builder.createAnimation({ duration: 2100, delay: 8100, backgroundColor: "lightgreen" }, ...pathDatabaseToKhan);
  builder.createAnimation({ duration: 2000, delay: 8200, backgroundColor: "lightgreen" }, ...pathDatabaseToKhan);
  builder.createAnimation({ duration: 2300, delay: 8300, backgroundColor: "lightgreen" }, ...pathDatabaseToKhan);
  builder.createAnimation({ duration: 1800, delay: 8100, backgroundColor: "lightgreen" }, ...pathDatabaseToKhan);
  builder.createAnimation({ duration: 1400, delay: 7900, backgroundColor: "lightgreen" }, ...pathDatabaseToKhan);
  builder.createAnimation({ duration: 3700, delay: 8500, backgroundColor: "lightgreen" }, ...pathDatabaseToKhan);

  // khan -> gears
  builder.createAnimation({ duration: 2100, delay: 12100, backgroundColor: "#14BF96" }, ...pathKhanToGears);
  builder.createAnimation({ duration: 2000, delay: 12200, backgroundColor: "#14BF96" }, ...pathKhanToGears);
  builder.createAnimation({ duration: 2300, delay: 12300, backgroundColor: "#14BF96" }, ...pathKhanToGears);
  builder.createAnimation({ duration: 1800, delay: 12100, backgroundColor: "#14BF96" }, ...pathKhanToGears);

  // db -> udemy
  builder.createAnimation({ duration: 1600, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToUdemy);
  builder.createAnimation({ duration: 2150, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToUdemy);
  builder.createAnimation({ duration: 2300, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToUdemy);
  builder.createAnimation({ duration: 3000, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToUdemy);

  // udemy -> gears
  builder.createAnimation({ duration: 1600, delay: 12000, backgroundColor: "#A435F0" }, ...pathUdemyToGears);
  builder.createAnimation({ duration: 2150, delay: 12000, backgroundColor: "#A435F0" }, ...pathUdemyToGears);
  builder.createAnimation({ duration: 2300, delay: 12000, backgroundColor: "#A435F0" }, ...pathUdemyToGears);
  builder.createAnimation({ duration: 3000, delay: 12000, backgroundColor: "#A435F0" }, ...pathUdemyToGears);

  // db -> pluralSight
  builder.createAnimation({ duration: 2700, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToPluralSight);
  builder.createAnimation({ duration: 3100, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToPluralSight);
  builder.createAnimation({ duration: 2100, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToPluralSight);
  builder.createAnimation({ duration: 1400, delay: 8000, backgroundColor: "lightgreen" }, ...pathDatabaseToPluralSight);

  // pluralSight -> gears
  builder.createAnimation({ duration: 2700, delay: 11000, backgroundColor: "#e80a88" }, ...pathPluralSightToGears);
  builder.createAnimation({ duration: 3100, delay: 11000, backgroundColor: "#e80a88" }, ...pathPluralSightToGears);
  builder.createAnimation({ duration: 2100, delay: 11000, backgroundColor: "#e80a88" }, ...pathPluralSightToGears);
  builder.createAnimation({ duration: 1400, delay: 11000, backgroundColor: "#e80a88" }, ...pathPluralSightToGears);

  // db -> ytb
  builder.createAnimation({ duration: 3200, delay: 9100, backgroundColor: "lightgreen" }, ...pathDatabaseToYoutube);
  builder.createAnimation({ duration: 2500, delay: 8700, backgroundColor: "lightgreen" }, ...pathDatabaseToYoutube);
  builder.createAnimation({ duration: 1500, delay: 8500, backgroundColor: "lightgreen" }, ...pathDatabaseToYoutube);
  builder.createAnimation({ duration: 1980, delay: 9300, backgroundColor: "lightgreen" }, ...pathDatabaseToYoutube);
  builder.createAnimation({ duration: 2300, delay: 8600, backgroundColor: "lightgreen" }, ...pathDatabaseToYoutube);

  // Ytb -> 1
  builder.createAnimation({ duration: 2300, delay: 11500, backgroundColor: "white" }, ...pathYoutubeToFirstChannel);
  builder.createAnimation({ duration: 2300, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToFirstChannel);
  builder.createAnimation({ duration: 2300, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToFirstChannel);

  // Ytb -> 2
  builder.createAnimation({ duration: 1800, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToSecondChannel);
  builder.createAnimation({ duration: 2300, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToSecondChannel);

  // Ytb -> 3
  builder.createAnimation({ duration: 2600, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToThirdChannel);
  builder.createAnimation({ duration: 2300, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToThirdChannel);
  builder.createAnimation({ duration: 1900, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToThirdChannel);

  // Ytb -> 4
  builder.createAnimation({ duration: 1200, delay: 11300, backgroundColor: "red" }, ...pathYoutubeToFourthChannel);
  builder.createAnimation({ duration: 900, delay: 11800, backgroundColor: "red" }, ...pathYoutubeToFourthChannel);
  builder.createAnimation({ duration: 2300, delay: 12000, backgroundColor: "red" }, ...pathYoutubeToFourthChannel);
  builder.createAnimation({ duration: 2300, delay: 11400, backgroundColor: "red" }, ...pathYoutubeToFourthChannel);

  // Ytb -> 5
  builder.createAnimation({ duration: 1980, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToFifthChannel);
  builder.createAnimation({ duration: 3200, delay: 11500, backgroundColor: "red" }, ...pathYoutubeToFifthChannel);

  // coursera -> gears
  builder.createAnimation({ duration: 8200, delay: 10500, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 9200, delay: 10500, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 12000, delay: 10500, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 7200, delay: 10420, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 15200, delay: 10700, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 6200, delay: 10120, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 9700, delay: 10000, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 8560, delay: 10400, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 10200, delay: 10200, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 10200, delay: 10240, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 10200, delay: 10100, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 10200, delay: 10600, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 10200, delay: 10680, backgroundColor: "#003176" }, ...pathCourseraToGears);
  builder.createAnimation({ duration: 10200, delay: 10400, backgroundColor: "#003176" }, ...pathCourseraToGears);

  // 1 Ytb -> gears
  builder.createAnimation({ duration: 2500, delay: 15600, backgroundColor: "#00aaff" }, ...pathFirstYoutubeChannelToGears);
  builder.createAnimation({ duration: 1900, delay: 15700, backgroundColor: "#00aaff" }, ...pathFirstYoutubeChannelToGears);
  builder.createAnimation({ duration: 3400, delay: 15800, backgroundColor: "#00aaff" }, ...pathFirstYoutubeChannelToGears);
  builder.createAnimation({ duration: 2000, delay: 15900, backgroundColor: "#00aaff" }, ...pathFirstYoutubeChannelToGears);

  // 2 Ytb -> gears
  builder.createAnimation({ duration: 4000, delay: 14600, backgroundColor: "#ee4658" }, ...pathSecondYoutubeChannelToGears);
  builder.createAnimation({ duration: 3700, delay: 14700, backgroundColor: "#ee4658" }, ...pathSecondYoutubeChannelToGears);
  builder.createAnimation({ duration: 4500, delay: 14800, backgroundColor: "#ee4658" }, ...pathSecondYoutubeChannelToGears);
  builder.createAnimation({ duration: 3000, delay: 14900, backgroundColor: "#ee4658" }, ...pathSecondYoutubeChannelToGears);

  // 3 Ytb -> gears
  builder.createAnimation({ duration: 2200, delay: 15400, backgroundColor: "#60aade" }, ...pathThirdYoutubeChannelToGears);
  builder.createAnimation({ duration: 3500, delay: 15200, backgroundColor: "#60aade" }, ...pathThirdYoutubeChannelToGears);
  builder.createAnimation({ duration: 2900, delay: 15600, backgroundColor: "#60aade" }, ...pathThirdYoutubeChannelToGears);
  builder.createAnimation({ duration: 2000, delay: 15450, backgroundColor: "#60aade" }, ...pathThirdYoutubeChannelToGears);

  // 4 Ytb -> gears
  builder.createAnimation({ duration: 2900, delay: 14900, backgroundColor: "white" }, ...pathFourthYoutubeChannelToGears);
  builder.createAnimation({ duration: 4500, delay: 15100, backgroundColor: "white" }, ...pathFourthYoutubeChannelToGears);
  builder.createAnimation({ duration: 1900, delay: 14800, backgroundColor: "white" }, ...pathFourthYoutubeChannelToGears);

  // 5 Ytb -> gears
  builder.createAnimation({ duration: 2500, delay: 14700, backgroundColor: "orange" }, ...pathFifthYoutubeChannelToGears);
  builder.createAnimation({ duration: 3000, delay: 14800, backgroundColor: "orange" }, ...pathFifthYoutubeChannelToGears);
  builder.createAnimation({ duration: 1900, delay: 14600, backgroundColor: "orange" }, ...pathFifthYoutubeChannelToGears);

  // switch -> mdn
  builder.createAnimation({ duration: 1200, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToMdn);
  builder.createAnimation({ duration: 1000, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToMdn);
  builder.createAnimation({ duration: 800, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToMdn);
  builder.createAnimation({ duration: 1600, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToMdn);

  // switch -> stack
  builder.createAnimation({ duration: 1400, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToStack);
  builder.createAnimation({ duration: 2100, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToStack);
  builder.createAnimation({ duration: 1800, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToStack);
  builder.createAnimation({ duration: 900, delay: 3200, backgroundColor: "lightgreen" }, ...pathSwitchToStack);

  // switch -> mdn
  builder.createAnimation({ duration: 1200, delay: 5800, backgroundColor: "white" }, ...pathMdnToGears);
  builder.createAnimation({ duration: 1000, delay: 5800, backgroundColor: "white" }, ...pathMdnToGears);
  builder.createAnimation({ duration: 800, delay: 5800, backgroundColor: "white" }, ...pathMdnToGears);
  builder.createAnimation({ duration: 1600, delay: 5800, backgroundColor: "white" }, ...pathMdnToGears);

  // switch -> stack
  builder.createAnimation({ duration: 1400, delay: 5800, backgroundColor: "orange" }, ...pathStackToGears);
  builder.createAnimation({ duration: 2100, delay: 5800, backgroundColor: "orange" }, ...pathStackToGears);
  builder.createAnimation({ duration: 1800, delay: 5800, backgroundColor: "orange" }, ...pathStackToGears);
  builder.createAnimation({ duration: 900, delay: 5800, backgroundColor: "orange" }, ...pathStackToGears);

  // Gears -> brain

  builder.createAnimation(
    {
      duration: 2500,
      delay: 6500,
      backgroundColor: "#2f2f2f",
      size: 16,
    },
    ...pathGearsToBrain
  );

  builder.createAnimation(
    {
      duration: 2000,
      delay: 6500,
      backgroundColor: "#2f2f2f",
      size: 16,
    },
    ...pathGearsToBrain
  );
  builder.createAnimation(
    {
      duration: 3000,
      delay: 6500,
      backgroundColor: "#2f2f2f",
      size: 16,
    },
    ...pathGearsToBrain
  );
  builder.createAnimation(
    {
      duration: 1800,
      delay: 6500,
      backgroundColor: "#2f2f2f",
      size: 16,
    },
    ...pathGearsToBrain
  );
  builder.createAnimation(
    {
      duration: 2700,
      delay: 6500,
      backgroundColor: "#2f2f2f",
      size: 16,
    },
    ...pathGearsToBrain
  );

  return (
    <Container
      id="animation-root"
      display={{ base: "flex", "2xl": "flex", xl: "none", lg: "none", md: "none", sm: "none" }}
      alignItems="center"
      justifyContent="center"
      position="absolute"
      minW="100%"
      height="100%"
      opacity="0.30"
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

export default HeaderAnimation;
