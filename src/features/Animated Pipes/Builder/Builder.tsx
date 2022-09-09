import { Box } from "@chakra-ui/react";
import { MutableRefObject, ReactNode, RefObject } from "react";
import Frame, { BorderOptions, FrameOptions } from "../Components/Frame";
import NodeObject from "../Components/Node";

class Builder {
  borderDefaultOptions;
  frameDefaultOptions;
  nodes: NodeObject[];
  anchorPoint: number;

  constructor(
    anchorPoint: number,
    borderOptions?: BorderOptions,
    frameOptions?: FrameOptions
  ) {
    this.nodes = new Array<NodeObject>();
    this.anchorPoint = anchorPoint;

    if (borderOptions) {
      this.borderDefaultOptions = borderOptions;
    } else {
      this.borderDefaultOptions = new BorderOptions(4, "solid", "purple");
    }
    if (frameOptions) {
      this.frameDefaultOptions = new FrameOptions(
        frameOptions.size,
        frameOptions.backgroundColor,
        this.borderDefaultOptions
      );
    } else {
      this.frameDefaultOptions = new FrameOptions(
        "md",
        "lime",
        this.borderDefaultOptions
      );
    }
  }

  //TODO spravit aby mohol byt anchor aj v lavo alebo v pravo
  getMainFrame(): JSX.Element {
    const frame = new Frame(this.frameDefaultOptions, {
      top: this.anchorPoint,
    });

    return frame.getFrame();
  }
}

export default Builder;
