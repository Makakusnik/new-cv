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

  buildPath(...nodes: NodeObject[]): string {
    let pathString = "";
    let previousX: number, previousY: number;
    nodes.forEach((node, index) => {
      let centerX = node.getXCenter();
      let centerY = node.getYCenter();

      if (index === 0) {
        pathString = pathString.concat(`M ${centerX} ${centerY} `);
        previousX = centerX;
        previousY = centerY;
      } else {
        if (previousX === centerX) {
          pathString = pathString.concat(`v ${centerY - previousY} `);
        } else if (previousY === centerY) {
          pathString = pathString.concat(`h ${centerX - previousX} `);
        } else {
          throw new Error(
            "Components should be aligned either horizontally or vertically."
          );
        }
        previousX = centerX;
        previousY = centerY;
      }
    });
    (nodes[0] as Frame).getFrameOptions().setPath(pathString);
    console.log(pathString);

    return pathString;
  }

  getNodes(): NodeType[] {
    return this.nodes;
  }
}

export default Builder;
