import Frame from "./Frame";
import Joint from "./Joint";
import Pipe from "./Pipe";

export type Position = {
  top: number;
  right?: number;
  left?: number;
};

export interface VerticalPoints {
  top: number;
  center: number;
  bottom: number;
}

export type BorderType =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export class BorderOptions {
  thickness: number;
  type: BorderType;
  color: string;
  overlap: number;
  constructor(
    thickness: number = 2,
    type: BorderType = "solid",
    color: string = "black"
  ) {
    this.thickness = thickness;
    this.type = type;
    this.color = color;
    this.overlap = this.thickness;
  }

  getBorderString(): string {
    return `${this.thickness}px ${this.type} ${this.color}`;
  }

  getColor(): string {
    return this.color;
  }

  getThickness(): number {
    return this.thickness;
  }

  getType(): BorderType {
    return this.type;
  }
}

export type NodeType = Frame | Pipe | Joint;
