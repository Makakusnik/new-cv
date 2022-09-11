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

export type BorderOptionsType = {
  thickness: number;
  type: BorderType;
  color: string;
  overlap: number;
};

export class BorderOptions {
  thickness: number;
  type: BorderType;
  color: string;
  overlap: number;

  constructor(borderOptionsObject: BorderOptionsType) {
    this.thickness = borderOptionsObject.thickness;
    this.type = borderOptionsObject.type;
    this.color = borderOptionsObject.color;
    this.overlap = borderOptionsObject.thickness;
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

  getThicknessInPx(): string {
    return `${this.getThickness()}px`;
  }

  getType(): BorderType {
    return this.type;
  }
}

export type PositionType = {
  top: number;
  left?: number;
  right?: number;
};

export type NodeType = Frame | Pipe | Joint;
