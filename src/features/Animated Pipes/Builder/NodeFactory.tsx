import Frame, { FrameOptionsType, FrameSize } from "../Components/Frame";
import Joint, { JointOptionsType, JointRotation } from "../Components/Joint";
import Pipe, { PipeOptionsType } from "../Components/Pipe";
import { BorderOptionsType, PictureOptions } from "../Components/Types";

class NodeObjectFactory {
  private defaultBorderOptions: BorderOptionsType;
  private defaultJointOptions: JointOptionsType;
  private defaultFrameOptions: FrameOptionsType;
  private defaultPipeOptions: PipeOptionsType;

  /**
   * Creates factory instance with default options that can be modified through factory functions.
   *
   * @param defaultBorderOptions - Default options for every created object.
   * @param defaultJointOptions - Default options for every `Joint` object.
   * @param defaultFrameOptions - Default options for every `Frame` object.
   * @param defaultPipeOptions - Default options for every `Pipe` object.
   */
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

  /**
   * Creates horizontal pipe with default parameters passed to factory constructor.
   * @param length - Length of horziontal pipe.
   * @returns New `Pipe` object.
   */
  createHorizontalPipe(length: number): Pipe {
    return new Pipe({
      ...this.defaultPipeOptions,
      borderOptions: this.defaultBorderOptions,
      orientation: "horizontal",
      length: length,
    });
  }

  /**
   * Creates vertical pipe with default parameters passed to factory constructor.
   * @param length - Length of vertical pipe.
   * @returns New `Pipe` object.
   */
  createVerticalPipe(length: number): Pipe {
    return new Pipe({
      ...this.defaultPipeOptions,
      borderOptions: this.defaultBorderOptions,
      orientation: "vertical",
      length: length,
    });
  }

  /**
   * Creates knee type joint with default parameters passed to factory constructor.
   * @param rotation - Sets rotation of joint.
   * @returns New knee type `Joint` object.
   */
  createKneeJoint(rotation?: JointRotation): Joint {
    return new Joint({
      ...this.defaultJointOptions,
      borderOptions: this.defaultBorderOptions,
      type: "knee",
      rotation: rotation,
    });
  }

  /**
   * Creates T type joint with default parameters passed to factory constructor.
   * @param rotation - Sets rotation of joint.
   * @returns New T type `Joint` object.
   */
  createTJoint(rotation?: JointRotation): Joint {
    return new Joint({
      ...this.defaultJointOptions,
      borderOptions: this.defaultBorderOptions,
      type: "T",
      rotation: rotation,
    });
  }

  /**
   * Creates cross type joint with default parameters passed to factory constructor.
   * @returns New cross type `Joint` object.
   */
  createCrossJoint(): Joint {
    return new Joint({
      ...this.defaultJointOptions,
      borderOptions: this.defaultBorderOptions,
      type: "cross",
    });
  }

  /**
   * Creates frame with default parameters passed to factory constructor.
   * @param size - Sets size of this frame.
   * @returns New `Frame` object.
   */
  createFrame(size?: FrameSize, picture?: (props: any) => JSX.Element, pictureOptions?: PictureOptions): Frame {
    return new Frame(
      {
        ...this.defaultFrameOptions,
        borderOptions: this.defaultBorderOptions,
        size: size,
      },
      picture,
      pictureOptions
    );
  }
}

export default NodeObjectFactory;
