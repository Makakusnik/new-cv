import { FrameOptionsType } from "../Components/Frame";
import { JointOptionsType } from "../Components/Joint";
import Pipe, { PipeOptionsType } from "../Components/Pipe";
import { BorderOptionsType } from "../Components/Types";

class NodeObjectFactory {
  private defaultBorderOptions: BorderOptionsType;
  private defaultJointOptions: JointOptionsType;
  private defaultFrameOptions: FrameOptionsType;
  private defaultPipeOptions: PipeOptionsType;
  private static numOfPipes: number;
  private static numOfJoints: number;
  private static numOfFrames: number;

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
    return new Pipe(`pipe${NodeObjectFactory.numOfPipes}`, {
      ...this.defaultPipeOptions,
      orientation: "horizontal",
      length: length,
    });
  }

  createVerticalPipe(length: number): Pipe {
    return new Pipe(`pipe${NodeObjectFactory.numOfPipes}`, {
      ...this.defaultPipeOptions,
      orientation: "vertical",
      length: length,
    });
  }
}

export default NodeObjectFactory;

export {};
