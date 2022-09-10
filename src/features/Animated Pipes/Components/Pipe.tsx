import { border, Box } from "@chakra-ui/react";
import { FC, FunctionComponentElement, ReactNode } from "react";
import NodeObject from "./Node";
import { BorderOptions, Position } from "./Types";

class Pipe extends NodeObject {
  options: PipeOptions;

  constructor(id: string, options: PipeOptions, positionObject?: Position) {
    let width, height;
    switch (options.orientation) {
      case "horizontal":
        width = options.length;
        height = options.thickness;
        break;
      case "vertical":
        width = options.thickness;
        height = options.length;
    }
    super(id, width, height, positionObject);
    this.options = options;
  }

  /* 
    TODO Comment stuff
  */
  getNode() {
    let top = this.getTopOffsetInPx();
    let right = this.getRightOffsetInPx();
    let left = this.getLeftOffsetInPx();

    let height, width, borderAttributes;
    if (this.options.orientation === "horizontal") {
      borderAttributes = {
        borderTop: this.options.borderOptions?.getBorderString(),
        borderBottom: this.options.borderOptions?.getBorderString(),
      };
      height = this.options.thickness + "px";
      width = this.options.length + "px";
    } else {
      borderAttributes = {
        borderRight: this.options.borderOptions?.getBorderString(),
        borderLeft: this.options.borderOptions?.getBorderString(),
      };
      height = this.options.length + "px";
      width = this.options.thickness + "px";
    }

    return (
      <Box
        key={this.id}
        width={width}
        height={height}
        bgColor={this.options.getBackgroundColor()}
        top={top}
        right={right}
        left={left}
        zIndex="2"
        position="absolute"
        {...borderAttributes}
        borderColor={this.options.borderOptions?.getColor()}
      />
    );
  }
  getOptions(): PipeOptions {
    return this.options;
  }
}

type PipeOrientation = "horizontal" | "vertical";

export class PipeOptions {
  borderOptions?: BorderOptions;
  length: number;
  thickness: number;
  orientation: PipeOrientation;
  backgroundColor: string;

  constructor(
    length: number,
    orientation: PipeOrientation,
    thickness: number = 10,
    backgroundColor: string = "#FF0000",
    borderOptions?: BorderOptions
  ) {
    this.thickness = thickness;
    this.orientation = orientation;
    this.backgroundColor = backgroundColor;
    this.length = length;
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

export default Pipe;
