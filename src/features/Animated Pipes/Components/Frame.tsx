import { border, Box } from "@chakra-ui/react";
import { FC, FunctionComponentElement, ReactNode } from "react";
import { AssetProps } from "../Assets/AssetProps";
import ElectricityBolt from "../Assets/ElectricityBolt";
import NodeObject from "./Node";
import { Position } from "./Types";

type FrameSize = "sm" | "md" | "lg" | "xl";

class Frame extends NodeObject {
  options: FrameOptions;
  pictureElement: FC<AssetProps>;

  constructor(
    options: FrameOptions,
    positionObject: Position,
    pictureElement?: FC<AssetProps>
  ) {
    super(options.getSize(), options.getSize(), positionObject);
    this.options = options;
    this.pictureElement = pictureElement || ElectricityBolt;
  }

  /* 
    TODO Comment stuff
  */
  getFrame() {
    let PicElement = this.pictureElement;
    return (
      <Box
        width={this.options.getSizeInPx()}
        height={this.options.getSizeInPx()}
        bgColor={this.options.getBackgroundColor()}
        border={this.options.borderOptions?.getBorderString()}
        top={
          this.getTopOffset() === undefined
            ? undefined
            : this.getTopOffset() + "px"
        }
        right={
          this.getRightOffset() === undefined
            ? undefined
            : this.getRightOffset()
        }
        left={
          this.getLeftOffset() === undefined ? undefined : this.getLeftOffset()
        }
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
      >
        <PicElement sizeInPx={this.options.getPictureSizeInPx()} />
      </Box>
    );
  }
}

export class FrameOptions {
  borderOptions?: BorderOptions;
  size: FrameSize;
  backgroundColor: string;

  constructor(
    size: FrameSize = "md",
    backgroundColor: string = "#FF0000",
    borderOptions?: BorderOptions
  ) {
    this.backgroundColor = backgroundColor;
    this.size = size;
    if (borderOptions === undefined) {
      this.borderOptions = new BorderOptions();
    } else {
      this.borderOptions = borderOptions;
    }
  }

  getPictureSizeInPx(): string {
    return this.getPictureSize() + "px";
  }

  getPictureSize(): number {
    switch (this.size) {
      case "sm":
        return 20;
      case "md":
        return 30;
      case "lg":
        return 40;
      case "xl":
        return 50;
      default:
        return 30;
    }
  }

  getSizeInPx(): string {
    return this.getSize() + "px";
  }

  getSize(): number {
    switch (this.size) {
      case "sm":
        return 40;
      case "md":
        return 60;
      case "lg":
        return 80;
      case "xl":
        return 100;
      default:
        return 60;
    }
  }

  getBackgroundColor(): string {
    return this.backgroundColor;
  }
}

type BorderType =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export class BorderOptions {
  thickness: number;
  type: BorderType;
  color: string;

  constructor(
    thickness: number = 2,
    type: BorderType = "solid",
    color: string = "black"
  ) {
    this.thickness = thickness;
    this.type = type;
    this.color = color;
  }

  getBorderString(): string {
    return `${this.thickness}px ${this.type} ${this.color}`;
  }
}

export default Frame;
