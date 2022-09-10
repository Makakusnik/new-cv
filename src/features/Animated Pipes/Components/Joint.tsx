import { border, Box } from "@chakra-ui/react";
import NodeObject from "./Node";
import { BorderOptions, Position } from "./Types";

type FrameSize = "sm" | "md" | "lg" | "xl";

class Joint extends NodeObject {
  options: JointOptions;

  constructor(id: string, options: JointOptions, positionObject?: Position) {
    super(id, options.thickness, options.thickness, positionObject);
    this.options = options;
  }

  /* 
    TODO Comment stuff
  */
  getNode() {
    const after = {
      content: '""',
      height: this.options.borderOptions?.getThicknessInPx(),
      width: this.options.borderOptions?.getThicknessInPx(),
      bgColor: this.options.borderOptions?.getColor(),
      position: "absolute",
      bottom: 0,
      borderTopRightRadius: "50%",
    };
    const before = {
      ...after,
      right: 0,
    };

    let top = this.getTopOffsetInPx();
    let right = this.getRightOffsetInPx();
    let left = this.getLeftOffsetInPx();

    let borderAttributes, additionalBoxAttributes;
    if (this.options.type === "knee") {
      borderAttributes = {
        borderTopRightRadius: "50%",
        borderTop: `${this.options.borderOptions?.getThickness()}px`,
        borderRight: `${this.options.borderOptions?.getThickness()}px`,
        _after: after,
      };
    } else if (this.options.type === "T") {
      borderAttributes = {
        borderTop: `${this.options.borderOptions?.getThickness()}px`,
        _after: after,
        _before: before,
      };
    } else if (this.options.type === "cross") {
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
        bgColor={this.options.getBackgroundColor()}
        top={top}
        right={right}
        left={left}
        width={`${this.options.thickness}px`}
        height={`${this.options.thickness}px`}
        transform={`rotate(${this.options.rotation}deg)`}
        zIndex="1"
        {...borderAttributes}
        borderColor={this.options.borderOptions?.getColor()}
      >
        {this.options.type === "cross" && <Box position="relative" {...additionalBoxAttributes}></Box>}
      </Box>
    );
  }
  getOptions(): JointOptions {
    return this.options;
  }
}

type JointType = "knee" | "T" | "cross";

type JointRotation = 0 | 90 | 180 | 270;

export class JointOptions {
  thickness: number;
  type: JointType;
  rotation: JointRotation;
  backgroundColor: string;
  borderOptions?: BorderOptions;

  constructor(
    type: JointType,
    rotation: JointRotation,
    thickness: number = 10,
    backgroundColor: string = "#FF0000",
    borderOptions?: BorderOptions
  ) {
    this.type = type;
    this.thickness = thickness;
    this.rotation = rotation;
    this.backgroundColor = backgroundColor;
    if (borderOptions === undefined) {
      this.borderOptions = new BorderOptions();
    } else {
      this.borderOptions = borderOptions;
    }
  }

  getBackgroundColor(): string {
    return this.backgroundColor;
  }
}

export default Joint;
