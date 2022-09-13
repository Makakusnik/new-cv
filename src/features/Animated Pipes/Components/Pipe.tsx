import { border, Box } from "@chakra-ui/react";
import { throws } from "assert";
import { FC, FunctionComponentElement, ReactNode } from "react";
import NodeObject from "./Node";
import { BorderOptions, BorderOptionsType, Position } from "./Types";

class Pipe extends NodeObject {
  private static numOfPipes = 0;
  private static DEFAULT_LENGTH: number = 1500;
  private static DEFAULT_THICKNESS: number = 20;
  private static DEFAULT_ORIENTATION: PipeOrientation = "horizontal";
  private static DEFAULT_BACKGROUND_COLOR: string = "blue";
  private static DEFAULT_BORDER_OPTIONS: BorderOptionsType = { color: "blue", overlap: 4, thickness: 4, type: "solid" };
  borderOptions: BorderOptions;
  length?: number;
  thickness?: number;
  orientation?: PipeOrientation;
  backgroundColor?: string;

  /**
   * Represents Pipe object.
   *
   * @param options - Object options `backgroundColor`, `borderOptions`, `length`, `thickness`,`orientation`.
   */
  constructor(options: PipeOptionsType) {
    options = {
      length: Pipe.DEFAULT_LENGTH,
      thickness: Pipe.DEFAULT_THICKNESS,
      orientation: Pipe.DEFAULT_ORIENTATION,
      backgroundColor: Pipe.DEFAULT_BACKGROUND_COLOR,
      ...options,
      borderOptions: { ...Pipe.DEFAULT_BORDER_OPTIONS, ...options.borderOptions },
    };

    super(`pipe${++Pipe.numOfPipes}`, Pipe.getPipeDimension(options).width, Pipe.getPipeDimension(options).height);
    this.borderOptions = new BorderOptions(options.borderOptions!);
    this.orientation = options.orientation;
    this.thickness = options.thickness;
    this.backgroundColor = options.backgroundColor;
    this.length = options.length;
  }

  clone(): Pipe {
    return new Pipe({
      backgroundColor: this.backgroundColor,
      borderOptions: this.borderOptions,
      length: this.length,
      thickness: this.thickness,
      orientation: this.orientation,
    });
  }

  // GETTERS

  getLength(): number {
    return this.length!;
  }

  getLengthInPx(): string {
    return `${this.getLength()}px`;
  }

  getThickness(): number {
    return this.thickness!;
  }
  getThicknessInPx(): string {
    return `${this.getThickness()}px`;
  }

  /**
   * Determines what dimensions will this instance of `Pipe` have based on `orientation`,`length`,`thickness`.
   *
   * @param options - `PipeOptionsType` parameter.
   * @returns Object with `width` and `height` properties.
   */
  static getPipeDimension(options: PipeOptionsType): PipeDimensions {
    let width: number, height: number;
    switch (options.orientation) {
      case "horizontal":
        width = options.length!;
        height = options.thickness!;
        return { width, height };
      case "vertical":
        width = options.thickness!;
        height = options.length!;
        return { width, height };
      default:
        return { width: 150, height: 150 };
    }
  }

  /**
   * Creates Box element from Chakra.UI and sets all needed attributes on it.
   *
   * @returns `JSX.Element` with all attributes and optional picture.
   */
  getNode() {
    let top = this.getTopOffsetInPx();
    let right = this.getRightOffsetInPx();
    let left = this.getLeftOffsetInPx();

    let height, width, borderAttributes;
    if (this.orientation === "horizontal") {
      borderAttributes = {
        borderTop: this.borderOptions?.getBorderString(),
        borderBottom: this.borderOptions?.getBorderString(),
      };
      height = this.thickness + "px";
      width = this.length + "px";
    } else {
      borderAttributes = {
        borderRight: this.borderOptions?.getBorderString(),
        borderLeft: this.borderOptions?.getBorderString(),
      };
      height = this.length + "px";
      width = this.thickness + "px";
    }
    return (
      <Box
        key={this.id}
        width={width}
        height={height}
        bgColor={this.backgroundColor}
        top={top}
        right={right}
        left={left}
        zIndex="2"
        position="absolute"
        {...borderAttributes}
        borderColor={this.borderOptions?.getColor()}
      />
    );
  }
}

type PipeDimensions = {
  width: number;
  height: number;
};

type PipeOrientation = "horizontal" | "vertical";

export type PipeOptionsType = {
  borderOptions?: BorderOptionsType;
  length?: number;
  thickness?: number;
  orientation?: PipeOrientation;
  backgroundColor?: string;
};

export default Pipe;
