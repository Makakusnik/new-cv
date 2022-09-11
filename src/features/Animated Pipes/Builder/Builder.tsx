import { Box } from "@chakra-ui/react";
import { MutableRefObject, ReactNode, RefObject } from "react";
import Frame, { FrameOptionsType } from "../Components/Frame";
import NodeObject from "../Components/Node";
import Pipe from "../Components/Pipe";
import { NodeType } from "../Components/Types";

class Builder {
  private mainFrame: Frame;
  private nodes: Array<NodeType>;
  private lastAppended: NodeType | null;
  mainFrameOptions;
  anchorPoint: number;

  constructor(anchorPoint: number, mainFrameOptions?: FrameOptionsType) {
    this.nodes = new Array<NodeType>();
    this.anchorPoint = anchorPoint;
    this.lastAppended = null;

    this.mainFrameOptions = mainFrameOptions;

    this.mainFrame = new Frame("main-node", this.mainFrameOptions, {
      top: this.anchorPoint,
    });
    this.nodes.push(this.mainFrame);
  }

  //TODO spravit aby mohol byt anchor aj v lavo alebo v pravo
  getMainFrame(): Frame {
    return this.mainFrame;
  }

  appendLeft(...nodes: NodeType[]): this {
    let existingObject: NodeType, objectToAppend: NodeType;
    if (nodes[1]) {
      existingObject = nodes[0];
      objectToAppend = nodes[1];
      let overlap = 0;
      if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
        overlap = existingObject.getBorderOptions().getThickness() + 1;
      } else if (existingObject instanceof Pipe && objectToAppend instanceof Frame) {
        overlap = objectToAppend.getBorderOptions().getThickness() + 1;
      }
      let existingObjectXStart = existingObject.getXStart() + overlap;
      let existingObjectYCenter = existingObject.getYCenter();

      objectToAppend.setXEnd(existingObjectXStart);
      objectToAppend.setYCenter(existingObjectYCenter);

      this.nodes.push(objectToAppend);
      if (this.lastAppended) {
        this.lastAppended = null;
      }
      this.lastAppended = objectToAppend;
      return this;
    } else {
      objectToAppend = nodes[0];
      if (this.lastAppended) {
        this.appendLeft(this.lastAppended, objectToAppend);
        this.lastAppended = objectToAppend;
      }
      return this;
    }
  }

  appendRight(...nodes: NodeType[]): this {
    let existingObject: NodeType, objectToAppend: NodeType;
    if (nodes[1]) {
      existingObject = nodes[0];
      objectToAppend = nodes[1];
      let overlap = 0;
      if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
        overlap = -(existingObject.getBorderOptions().getThickness() + 1);
      } else if (existingObject instanceof Pipe && objectToAppend instanceof Frame) {
        overlap = -(objectToAppend.getBorderOptions().getThickness() + 1);
      }

      let existingObjectXEnd = existingObject.getXEnd() + overlap;
      let existingObjectYCenter = existingObject.getYCenter();

      objectToAppend.setXStart(existingObjectXEnd);
      objectToAppend.setYCenter(existingObjectYCenter);
      this.nodes.push(objectToAppend);
      if (this.lastAppended) {
        this.lastAppended = null;
      }
      this.lastAppended = objectToAppend;
      return this;
    } else {
      objectToAppend = nodes[0];
      if (this.lastAppended) {
        this.appendRight(this.lastAppended, objectToAppend);
        this.lastAppended = objectToAppend;
      }
      return this;
    }
  }

  appendBottom(...nodes: NodeType[]): this {
    let existingObject: NodeType, objectToAppend: NodeType;
    if (nodes[1]) {
      existingObject = nodes[0];
      objectToAppend = nodes[1];
      let overlap = 0;
      if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
        overlap = -(existingObject.getBorderOptions().getThickness() + 1);
      } else if (existingObject instanceof Pipe && objectToAppend instanceof Frame) {
        overlap = -(objectToAppend.getBorderOptions().getThickness() + 1);
      }

      let existingObjectXCenter = existingObject.getXCenter();
      let existingObjectYEnd = existingObject.getYEnd() + overlap;

      objectToAppend.setXCenter(existingObjectXCenter);
      objectToAppend.setYStart(existingObjectYEnd);
      this.nodes.push(objectToAppend);
      if (this.lastAppended) {
        this.lastAppended = null;
      }
      this.lastAppended = objectToAppend;
      return this;
    } else {
      objectToAppend = nodes[0];
      if (this.lastAppended) {
        this.appendBottom(this.lastAppended, objectToAppend);
        this.lastAppended = objectToAppend;
      }
      return this;
    }
  }

  appendUp(...nodes: NodeType[]): this {
    let existingObject: NodeType, objectToAppend: NodeType;
    if (nodes[1]) {
      existingObject = nodes[0];
      objectToAppend = nodes[1];
      let overlap = 0;
      if (existingObject instanceof Frame && objectToAppend instanceof Pipe) {
        overlap = existingObject.getBorderOptions().getThickness() + 1;
      } else if (existingObject instanceof Pipe && objectToAppend instanceof Frame) {
        overlap = objectToAppend.getBorderOptions().getThickness() + 1;
      }

      let existingObjectXCenter = existingObject.getXCenter();
      let existingObjectYStart = existingObject.getYStart() + overlap;

      objectToAppend.setXCenter(existingObjectXCenter);
      objectToAppend.setYEnd(existingObjectYStart);
      this.nodes.push(objectToAppend);
      if (this.lastAppended) {
        this.lastAppended = null;
      }
      this.lastAppended = objectToAppend;
      return this;
    } else {
      objectToAppend = nodes[0];
      if (this.lastAppended) {
        this.appendUp(this.lastAppended, objectToAppend);
        this.lastAppended = objectToAppend;
      }
      return this;
    }
  }

  buildPath(...nodes: NodeObject[]): string {
    if (nodes.length === 0) return "";
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
          throw new Error("Components should be aligned either horizontally or vertically.");
        }
        previousX = centerX;
        previousY = centerY;
      }
    });
    (nodes[0] as Frame).setPath(pathString);

    return pathString;
  }

  getNodes(): NodeType[] {
    return this.nodes;
  }
}

export default Builder;
