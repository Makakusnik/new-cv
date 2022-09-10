import { Position } from "./Types";

class NodeObject {
  id: string;
  top;
  right;
  left;
  width: number;
  height: number;

  constructor(id: string, width: number, height: number, position?: Position) {
    this.id = id;
    this.width = width;
    this.height = height;
    if (position) {
      this.top = position.top;
      if (position.left) {
        this.left = position.left;
      } else if (position.right) {
        this.right = position.right;
      }
    } else {
      this.top = 0;
    }
  }

  getTopOffset(): number {
    return this.top;
  }

  getTopOffsetInPx(): string {
    return `${this.top}px`;
  }

  getRightOffset(): number | undefined {
    return this.right;
  }

  getRightOffsetInPx(): string | undefined {
    return this.right ? `${this.right}px` : undefined;
  }

  getLeftOffset(): number | undefined {
    return this.left;
  }

  getLeftOffsetInPx(): string | undefined {
    return this.left ? `${this.left}px` : undefined;
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
