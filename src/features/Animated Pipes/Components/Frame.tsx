import { Box } from "@chakra-ui/react";
import { FC } from "react";
import ElectricityBolt from "../Assets/ElectricityBolt";
import NodeObject from "./Node";
import { BorderOptions, BorderOptionsType, PictureOptions } from "./Types";

export type FrameSize = "sm" | "md" | "lg" | "xl" | "xl2";

class Frame extends NodeObject {
  private static numOfFrames: number = 0;
  private static DEFAULT_SIZE: FrameSize = "md";
  private static DEFAULT_BACKGROUND_COLOR: string = "blue";
  private static DEFAULT_BORDER_OPTIONS: BorderOptionsType = { color: "red", overlap: 4, thickness: 4, type: "solid" };
  private static DEFAULT_PICTURE_OPTIONS: PictureOptions = {
    color: "red",
    filterColor: "purple",
  };
  pictureElement: (props: any) => JSX.Element;
  pictureOptions: PictureOptions;
  borderOptions: BorderOptions;
  size?: FrameSize;
  backgroundColor?: string;
  path: string;
  href?: string;
  hrefTitle?: string;

  /**
   * Represents Frame object.
   *
   * @param options - Object options `backgroundColor`, `size`, `borderOptions`.
   * @param pictureElement - Optional, picture inside frame.
   */
  constructor(
    options?: FrameOptionsType,
    pictureElement?: (props: any) => JSX.Element,
    pictureOptions?: PictureOptions,
    href?: string,
    hrefTitle?: string
  ) {
    options = {
      size: Frame.DEFAULT_SIZE,
      backgroundColor: Frame.DEFAULT_BACKGROUND_COLOR,
      ...options,
      borderOptions: { ...Frame.DEFAULT_BORDER_OPTIONS, ...options?.borderOptions },
    };

    super(`frame${++Frame.numOfFrames}`, Frame.getSize(options.size!), Frame.getSize(options.size!));
    this.pictureElement = pictureElement || ElectricityBolt;
    this.backgroundColor = options.backgroundColor;
    this.size = options.size;
    this.borderOptions = new BorderOptions(options.borderOptions!);
    this.path = "";
    this.pictureOptions = { ...Frame.DEFAULT_PICTURE_OPTIONS, ...pictureOptions };
    this.href = href;
    this.hrefTitle = hrefTitle;
  }

  clone(): Frame {
    return new Frame(
      {
        backgroundColor: this.backgroundColor,
        size: this.size,
        borderOptions: this.borderOptions,
      },
      this.pictureElement,
      this.pictureOptions,
      this.href,
      this.hrefTitle
    );
  }

  /**
   * Creates Box element from Chakra.UI and sets all needed attributes on it.
   *
   * @returns `JSX.Element` with all attributes and optional picture.
   */
  getNode(): JSX.Element {
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
        {this.href ? (
          <a href={this.href} title={this.hrefTitle || "Unknown :{"} target="_blank">
            {this.pictureElement !== undefined && (
              <PicElement id={`${this.id}Picture`} {...this.pictureOptions} size={Frame.getPictureSize(this.size!)} />
            )}
          </a>
        ) : (
          this.pictureElement !== undefined && (
            <PicElement id={`${this.id}Picture`} {...this.pictureOptions} size={Frame.getPictureSize(this.size!)} />
          )
        )}
      </Box>
    );
  }

  // GETTERS

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

  // STATIC GETTERS

  /**
   * Determines what size will be returned based on switch statement.
   * @remarks
   * `sm = 40` ; `md = 60` ; `lg = 80` ; `xl = 100`
   * @param value - `FrameSize` parameter.
   * @returns size of frame.
   */
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
      case "xl2":
        return 140;
      default:
        return 60;
    }
  }

  /**
   * Determines what size of picture will be returned based on `FrameSize` parameter and switch statement.
   * @remarks
   * `sm = 20` ; `md = 30` ; `lg = 40` ; `xl = 50`
   * @param value - `FrameSize` parameter.
   * @returns size of picture.
   */
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

export type FrameOptionsType = {
  size?: FrameSize;
  borderOptions?: BorderOptionsType;
  backgroundColor?: string;
};

export default Frame;
