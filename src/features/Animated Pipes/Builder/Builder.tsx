import { Box } from "@chakra-ui/react";
import { MutableRefObject, ReactNode, RefObject } from "react";
import Frame, { FrameOptionsType } from "../Components/Frame";
import NodeObject from "../Components/Node";
import Pipe from "../Components/Pipe";
import { NodeType, PositionType } from "../Components/Types";

class Builder {
  private mainFrame: Frame;
  private nodes: Array<NodeType>;
  private lastAppended: NodeType | null = null;

  /**
   * Creates builder which can be used for building pipe structure through chain functions.
   *
   * @param anchorPosition - Sets position for main frame.
   * @param mainFrameOptions - Optional, sets options for main frame.
   */
  constructor(anchorPosition: PositionType, mainFrameOptions?: FrameOptionsType) {
    this.nodes = new Array<NodeType>();
    this.mainFrame = new Frame("main-node", mainFrameOptions, { ...anchorPosition });
    this.nodes.push(this.mainFrame);
  }

  /**
   * Chain reaction for appending `NodeType` object to the left of another `NodeType` object
   *
   * @remarks
   * In case 2 parameters. First is existing object second one is object to append.
   * In case 1 parameters. There is only object to append.
   *
   * @param nodes - Can take one or two `NodeType` objects.
   * @returns Instance of this builder.
   */
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

  /**
   * Chain reaction for appending `NodeType` object to the right of another `NodeType` object
   *
   * @remarks
   * In case 2 parameters. First is existing object second one is object to append.
   * In case 1 parameters. There is only object to append.
   *
   * @param nodes - Can take one or two `NodeType` objects.
   * @returns Instance of this builder.
   */
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

  /**
   * Chain reaction for appending `NodeType` object to the bottom of another `NodeType` object
   *
   * @remarks
   * In case 2 parameters. First is existing object second one is object to append.
   * In case 1 parameters. There is only object to append.
   *
   * @param nodes - Can take one or two `NodeType` objects.
   * @returns Instance of this builder.
   */
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

  /**
   * Chain reaction for appending `NodeType` object to the top of another `NodeType` object
   *
   * @remarks
   * In case 2 parameters. First is existing object second one is object to append.
   * In case 1 parameters. There is only object to append.
   *
   * @param nodes - Can take one or two `NodeType` objects.
   * @returns Instance of this builder.
   */
  appendTop(...nodes: NodeType[]): this {
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
        this.appendTop(this.lastAppended, objectToAppend);
        this.lastAppended = objectToAppend;
      }
      return this;
    }
  }

  /**
   * Creates SVG-like path which leads from center of frist `NodeType` parameter through center of objects in between the first and last one to the center of the last one.
   *
   * @param nodes - Array of `NodeType` objects.
   * @returns SVG-like path.
   */
  buildPath(...nodes: NodeType[]): string {
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

  /**
   * Getter of nodes array.
   * @returns Array of `NodeType` objects.
   */
  getNodes(): NodeType[] {
    return this.nodes;
  }

  /**
   * Getter for main frame.
   * @returns main frame.
   */
  getMainFrame(): Frame {
    return this.mainFrame;
  }
}

export default Builder;
