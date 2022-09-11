import Frame, { FrameOptionsType, FrameSize } from "../Components/Frame";
import Joint, { JointOptionsType, JointRotation } from "../Components/Joint";
import Pipe, { PipeOptionsType } from "../Components/Pipe";
import { BorderOptionsType } from "../Components/Types";

class NodeObjectFactory {
  private defaultBorderOptions: BorderOptionsType;
  private defaultJointOptions: JointOptionsType;
  private defaultFrameOptions: FrameOptionsType;
  private defaultPipeOptions: PipeOptionsType;
  private static numOfPipes: number = 0;
  private static numOfJoints: number = 0;
  private static numOfFrames: number = 0;

  constructor(
    defaultBorderOptions: BorderOptionsType,
    defaultJointOptions: JointOptionsType,
    defaultFrameOptions: FrameOptionsType,
    defaultPipeOptions: PipeOptionsType
  ) {
    this.defaultBorderOptions = defaultBorderOptions;
    this.defaultJointOptions = defaultJointOptions;
    this.defaultFrameOptions = defaultFrameOptions;
    this.defaultPipeOptions = defaultPipeOptions;
  }

  createHorizontalPipe(length: number): Pipe {
    NodeObjectFactory.numOfPipes++;
    return new Pipe(`pipe${NodeObjectFactory.numOfPipes++}`, {
      ...this.defaultPipeOptions,
      borderOptions: this.defaultBorderOptions,
      orientation: "horizontal",
      length: length,
    });
  }

  createVerticalPipe(length: number): Pipe {
    NodeObjectFactory.numOfPipes++;
    return new Pipe(`pipe${NodeObjectFactory.numOfPipes++}`, {
      ...this.defaultPipeOptions,
      borderOptions: this.defaultBorderOptions,
      orientation: "vertical",
      length: length,
    });
  }

  createKneeJoint(rotation?: JointRotation): Joint {
    return new Joint(`joint${NodeObjectFactory.numOfJoints++}`, {
      ...this.defaultJointOptions,
      borderOptions: this.defaultBorderOptions,
      type: "knee",
      rotation: rotation,
    });
  }

  createTJoint(rotation?: JointRotation): Joint {
    return new Joint(`joint${NodeObjectFactory.numOfJoints++}`, {
      ...this.defaultJointOptions,
      borderOptions: this.defaultBorderOptions,
      type: "T",
      rotation: rotation,
    });
  }

  createCrossJoint(): Joint {
    return new Joint(`joint${NodeObjectFactory.numOfJoints++}`, {
      ...this.defaultJointOptions,
      borderOptions: this.defaultBorderOptions,
      type: "cross",
    });
  }

  createFrame(size?: FrameSize): Frame {
    return new Frame(`frame${NodeObjectFactory.numOfFrames++}`, {
      ...this.defaultFrameOptions,
      borderOptions: this.defaultBorderOptions,
      size: size,
    });
  }
}

export default NodeObjectFactory;

export {};
