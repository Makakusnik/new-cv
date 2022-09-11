import { border, Box } from "@chakra-ui/react";
import NodeObject from "./Node";
import { BorderOptions, BorderOptionsType, Position } from "./Types";

type FrameSize = "sm" | "md" | "lg" | "xl";

class Joint extends NodeObject {
  private static DEFAULT_THICKNESS: number = 20;
  private static DEFAULT_ROTATION: JointRotation = 90;
  private static DEFAULT_BACKGROUND_COLOR: string = "blue";
  private static DEFAULT_BORDER_OPTIONS: BorderOptionsType = { color: "blue", overlap: 4, thickness: 4, type: "solid" };
  private static DEFAULT_TYPE: JointType = "knee";
  thickness?: number;
  type?: JointType;
  rotation?: JointRotation;
  backgroundColor?: string;
  borderOptions: BorderOptions;

  constructor(id: string, options: JointOptionsType, positionObject?: Position) {
    options = {
      thickness: Joint.DEFAULT_THICKNESS,
      rotation: Joint.DEFAULT_ROTATION,
      type: Joint.DEFAULT_TYPE,
      backgroundColor: Joint.DEFAULT_BACKGROUND_COLOR,
      ...options,
      borderOptions: { ...Joint.DEFAULT_BORDER_OPTIONS, ...options.borderOptions },
    };
    super(id, options.thickness!, options.thickness!, positionObject);
    this.rotation = options.rotation;
    this.type = options.type;
    this.backgroundColor = options.backgroundColor;
    this.thickness = options.thickness;
    this.borderOptions = new BorderOptions(options.borderOptions!);
  }

  /* 
    TODO Comment stuff
  */
  getNode() {
    const after = {
      content: '""',
      height: this.borderOptions?.getThicknessInPx(),
      width: this.borderOptions?.getThicknessInPx(),
      bgColor: this.borderOptions?.getColor(),
      position: "absolute",
      bottom: 0,
      borderTopRightRadius: "50%",
    };
    const before = {
      ...after,
      right: 0,
      transform: "rotate(270deg)",
    };

    let top = this.getTopOffsetInPx();
    let right = this.getRightOffsetInPx();
    let left = this.getLeftOffsetInPx();

    let borderAttributes, additionalBoxAttributes;
    if (this.type === "knee") {
      borderAttributes = {
        borderTopRightRadius: "50%",
        borderTop: this.borderOptions?.getThicknessInPx(),
        borderRight: this.borderOptions?.getThicknessInPx(),
        _after: after,
      };
    } else if (this.type === "T") {
      borderAttributes = {
        borderTop: this.borderOptions?.getThicknessInPx(),
        _after: after,
        _before: before,
      };
    } else if (this.type === "cross") {
      borderAttributes = {
        _after: after,
        _before: before,
      };
      additionalBoxAttributes = {
        bgColor: "transparent",
        transform: "rotate(180deg)",
        _after: { ...after },
        _before: { ...before },
      };
    }

    return (
      <Box
        key={this.id}
        position="absolute"
        bgColor={this.backgroundColor}
        top={top}
        right={right}
        left={left}
        width={this.getThicknessInPx()}
        height={this.getThicknessInPx()}
        transform={`rotate(${this.getRotationInDeg()})`}
        zIndex="1"
        {...borderAttributes}
        borderColor={this.borderOptions?.getColor()}
      >
        {this.type === "cross" && <Box position="relative" {...additionalBoxAttributes}></Box>}
      </Box>
    );
  }

  getThickness(): number {
    return this.thickness!;
  }
  getThicknessInPx(): string {
    return `${this.getThickness()}px`;
  }

  getRotationInDeg() {
    return `${this.rotation}deg`;
  }
}

type JointType = "knee" | "T" | "cross";

export type JointRotation = 0 | 90 | 180 | 270;

export type JointOptionsType = {
  thickness?: number;
  type?: JointType;
  rotation?: JointRotation;
  backgroundColor?: string;
  borderOptions?: BorderOptionsType;
};

export default Joint;
