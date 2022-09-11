import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { AssetProps } from "../Assets/AssetProps";
import ElectricityBolt from "../Assets/ElectricityBolt";
import NodeObject from "./Node";
import { BorderOptions, BorderOptionsType, Position } from "./Types";

export type FrameSize = "sm" | "md" | "lg" | "xl";

class Frame extends NodeObject {
  private static DEFAULT_SIZE: FrameSize = "md";
  private static DEFAULT_BACKGROUND_COLOR: string = "blue";
  private static DEFAULT_BORDER_OPTIONS: BorderOptionsType = { color: "red", overlap: 4, thickness: 4, type: "solid" };
  pictureElement: FC<AssetProps>;
  borderOptions: BorderOptions;
  size?: FrameSize;
  backgroundColor?: string;
  path: string;

  constructor(id: string, options?: FrameOptionsType, positionObject?: Position, pictureElement?: FC<AssetProps>) {
    options = {
      size: Frame.DEFAULT_SIZE,
      backgroundColor: Frame.DEFAULT_BACKGROUND_COLOR,
      ...options,
      borderOptions: { ...Frame.DEFAULT_BORDER_OPTIONS, ...options?.borderOptions },
    };

    super(id, Frame.getSize(options.size!), Frame.getSize(options.size!), positionObject);
    this.pictureElement = pictureElement || ElectricityBolt;
    this.backgroundColor = options.backgroundColor;
    this.size = options.size;
    this.borderOptions = new BorderOptions(options.borderOptions!);
    this.path = "";
  }

  /* 
    TODO Comment stuff
  */
  getNode() {
    let PicElement = this.pictureElement;
    let top = this.getTopOffsetInPx();
    let right = this.getRightOffsetInPx();
    let left = this.getLeftOffsetInPx();

    return (
      <Box
        key={this.id}
        width={this.getSizeInPx()}
        height={this.getSizeInPx()}
        bgColor={this.getBackgroundColor()}
        border={this.borderOptions.getBorderString()}
        top={top}
        right={right}
        left={left}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="1"
        position="absolute"
      >
        <PicElement sizeInPx={this.getPictureSizeInPx()} />
      </Box>
    );
  }

  getSizeInPx(): string {
    return Frame.getSize(this.size!) + "px";
  }

  getBackgroundColor(): string {
    return this.backgroundColor!;
  }

  setPath(value: string): void {
    this.path = value;
  }

  getPictureSizeInPx(): string {
    return Frame.getPictureSize(this.size!) + "px";
  }

  getBorderOptions(): BorderOptions {
    return this.borderOptions;
  }

  static getSize(value: FrameSize): number {
    switch (value) {
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

  static getPictureSize(value: FrameSize): number {
    switch (value) {
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
}

export interface FrameOptionsType {
  size?: FrameSize;
  borderOptions?: BorderOptionsType;
  backgroundColor?: string;
}

export default Frame;
