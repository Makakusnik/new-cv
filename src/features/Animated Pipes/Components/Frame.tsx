import { border, Box } from "@chakra-ui/react";
import { FC, FunctionComponentElement, ReactNode } from "react";
import { AssetProps } from "../Assets/AssetProps";
import ElectricityBolt from "../Assets/ElectricityBolt";
import NodeObject from "./Node";
import { BorderOptions, Position } from "./Types";

type FrameSize = "sm" | "md" | "lg" | "xl";

class Frame extends NodeObject {
  options: FrameOptions;
  pictureElement: FC<AssetProps>;

  constructor(
    id: string,
    options?: FrameOptions,
    positionObject?: Position,
    pictureElement?: FC<AssetProps>
  ) {
    if (!options) {
      options = new FrameOptions();
    }
    super(id, options.getSize(), options.getSize(), positionObject);
    this.options = options;
    this.pictureElement = pictureElement || ElectricityBolt;
  }

  /* 
    TODO Comment stuff
  */
  getNode() {
    let PicElement = this.pictureElement;
    let top =
      this.getTopOffset() === undefined
        ? undefined
        : this.getTopOffset() + "px";
    let right =
      this.getRightOffset() === undefined
        ? undefined
        : this.getRightOffset() + "px";
    let left =
      this.getLeftOffset() === undefined
        ? undefined
        : this.getLeftOffset() + "px";

    return (
      <Box
        key={this.id}
        width={this.options.getSizeInPx()}
        height={this.options.getSizeInPx()}
        bgColor={this.options.getBackgroundColor()}
        border={this.options.borderOptions?.getBorderString()}
        top={top}
        right={right}
        left={left}
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

  getFrameOptions(): FrameOptions {
    return this.options;
  }
}

export class FrameOptions {
  borderOptions: BorderOptions;
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

  getBorderOptions(): BorderOptions {
    return this.borderOptions;
  }
}

export default Frame;
