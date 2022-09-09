import { Box } from "@chakra-ui/react";
import { MutableRefObject, ReactNode, RefObject } from "react";
import Frame, { FrameOptions } from "../Components/Frame";
import NodeObject from "../Components/Node";
import Pipe from "../Components/Pipe";
import { BorderOptions, NodeType } from "../Components/Types";

class Builder {
  private static mainNode: Frame;
  private nodes: Array<NodeType>;
  borderDefaultOptions;
  frameDefaultOptions;
  anchorPoint: number;

  constructor(anchorPoint: number, frameOptions?: FrameOptions) {
    this.nodes = new Array<NodeType>();
    this.anchorPoint = anchorPoint;

    if (frameOptions?.borderOptions) {
      this.borderDefaultOptions = frameOptions?.borderOptions;
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
  getMainFrame(): Frame {
    if (!Builder.mainNode) {
      Builder.mainNode = new Frame("main-node", this.frameDefaultOptions, {
        top: this.anchorPoint,
      });
    }
    this.nodes.push(Builder.mainNode);
    return Builder.mainNode;
  }

  appendLeft(existingObject: NodeType, objectToAppend: NodeType) {
    let overlap = 0;
    if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
      overlap =
        existingObject.getFrameOptions().getBorderOptions().getThickness() + 1;
    } else if (
      existingObject instanceof Pipe &&
      objectToAppend instanceof Frame
    ) {
      overlap =
        objectToAppend.getFrameOptions().getBorderOptions().getThickness() + 1;
    }
    let existingObjectXStart = existingObject.getXStart() + overlap;
    let existingObjectYCenter = existingObject.getYCenter();

    objectToAppend.setXEnd(existingObjectXStart);
    objectToAppend.setYCenter(existingObjectYCenter);
    this.nodes.push(objectToAppend);
  }

  appendRight(existingObject: NodeType, objectToAppend: NodeType) {
    let overlap = 0;
    if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
      overlap = -(
        existingObject.getFrameOptions().getBorderOptions().getThickness() + 1
      );
    } else if (
      existingObject instanceof Pipe &&
      objectToAppend instanceof Frame
    ) {
      overlap = -(
        objectToAppend.getFrameOptions().getBorderOptions().getThickness() + 1
      );
    }

    let existingObjectXEnd = existingObject.getXEnd() + overlap;
    let existingObjectYCenter = existingObject.getYCenter();

    objectToAppend.setXStart(existingObjectXEnd);
    objectToAppend.setYCenter(existingObjectYCenter);
    this.nodes.push(objectToAppend);
  }

  appendBottom(existingObject: NodeType, objectToAppend: NodeType) {
    let overlap = 0;
    if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
      overlap = -(
        existingObject.getFrameOptions().getBorderOptions().getThickness() + 1
      );
    } else if (
      existingObject instanceof Pipe &&
      objectToAppend instanceof Frame
    ) {
      overlap = -(
        objectToAppend.getFrameOptions().getBorderOptions().getThickness() + 1
      );
    }

    let existingObjectXCenter = existingObject.getXCenter();
    let existingObjectYEnd = existingObject.getYEnd() + overlap;

    objectToAppend.setXCenter(existingObjectXCenter);
    objectToAppend.setYStart(existingObjectYEnd);
    this.nodes.push(objectToAppend);
  }

  appendUp(existingObject: NodeType, objectToAppend: NodeType) {
    let overlap = 0;
    if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
      overlap =
        existingObject.getFrameOptions().getBorderOptions().getThickness() + 1;
    } else if (
      existingObject instanceof Pipe &&
      objectToAppend instanceof Frame
    ) {
      overlap =
        objectToAppend.getFrameOptions().getBorderOptions().getThickness() + 1;
    }

    let existingObjectXCenter = existingObject.getXCenter();
    let existingObjectYStart = existingObject.getYStart() + overlap;

    objectToAppend.setXCenter(existingObjectXCenter);
    objectToAppend.setYEnd(existingObjectYStart);
    this.nodes.push(objectToAppend);
  }

  getNodes(): NodeType[] {
    return this.nodes;
  }
}

export default Builder;
