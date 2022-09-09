import { throws } from "assert";
import { Position, VerticalPoints } from "./Types";

class NodeObject {
  id: string;
  top;
  topCenter;
  right;
  rightCenter;
  left;
  leftCenter;
  width: number;
  height: number;

  constructor(id: string, width: number, height: number, position?: Position) {
    this.id = id;
    this.width = width;
    this.height = height;
    if (position) {
      if (position.top) {
        this.top = position.top;
        this.topCenter = position.top + height / 2;
      } else {
        this.top = 0;
        this.topCenter = this.top + height / 2;
      }
      if (position.left) {
        this.left = position.left;
        this.leftCenter = position.left + width / 2;
      } else if (position.right) {
        this.right = position.right;
        this.rightCenter = position.right - width / 2;
      }
    } else {
      this.top = 0;
      this.topCenter = this.top + height / 2;
    }
  }

  getTopOffset(): number | undefined {
    return this.top;
  }

  getRightOffset(): number | undefined {
    return this.right;
  }

  getLeftOffset(): number | undefined {
    return this.left;
  }

  getYStart(): number {
    return this.top;
  }

  getYCenter(): number {
    return this.top + this.height / 2;
  }

  getYEnd(): number {
    return this.top + this.height;
  }

  getXStart(): number {
    if (this.right !== undefined) {
      return -this.right - this.width;
    } else if (this.left !== undefined) {
      return this.left;
    }
    return -this.width / 2;
  }

  getXEnd(): number {
    if (this.right !== undefined) {
      return -this.right;
    } else if (this.left !== undefined) {
      return this.left + this.width;
    }
    return this.width / 2;
  }

  getXCenter(): number {
    if (this.right !== undefined) {
      return -this.right - this.width / 2;
    } else if (this.left !== undefined) {
      return this.left + this.width / 2;
    }
    return 0;
  }

  // TODO prerob undefined na pouzivanie jednotnej strany
  setXStart(value: number) {
    this.left = undefined;
    this.right = -value - this.width;
  }
  setXCenter(value: number) {
    this.left = undefined;
    this.right = -value - this.width / 2;
  }

  setXEnd(value: number) {
    this.left = undefined;
    this.right = -value;
  }

  setYStart(value: number) {
    this.top = value;
  }
  setYCenter(value: number) {
    this.top = value - this.height / 2;
  }
  setYEnd(value: number) {
    this.top = value - this.height;
  }

  getNode() {
    throw new Error("Implement this");
  }
}

export default NodeObject;
