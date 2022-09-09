import { throws } from "assert";
import { Position, VerticalPoints } from "./Types";

class NodeObject {
  position: Position;
  width: number;
  height: number;

  constructor(width: number, height: number, position: Position) {
    this.width = width;
    this.height = height;
    this.position = position;
  }

  getTopOffset(): number | undefined {
    return this.position.top;
  }

  getRightOffset(): number | undefined {
    return this.position.right;
  }

  getLeftOffset(): number | undefined {
    return this.position.left;
  }

  setTopOffset(value: number) {
    this.position.top = value;
  }

  setLeftOffset(value: number) {
    this.position.left = value;
  }

  setRightOffset(value: number) {
    this.position.right = value;
  }

  getYStart(): number {
    return this.position.top;
  }

  getYCenter(): number {
    return this.position.top + this.height / 2;
  }

  getYEnd(): number {
    return this.position.top + this.height;
  }

  getXStart(): number {
    if (this.position.right !== undefined) {
      return -this.position.right - this.width;
    } else if (this.position.left !== undefined) {
      return this.position.left;
    }
    return -this.width / 2;
  }

  getXEnd(): number {
    if (this.position.right !== undefined) {
      return -this.position.right;
    } else if (this.position.left !== undefined) {
      return this.position.left + this.width;
    }
    return this.width / 2;
  }

  getXCenter(): number {
    if (this.position.right !== undefined) {
      return this.position.right - this.width / 2;
    } else if (this.position.left !== undefined) {
      return this.position.left + this.width / 2;
    }
    return 0;
  }
}

export default NodeObject;
