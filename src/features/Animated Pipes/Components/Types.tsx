import { SerializedStyles } from "@emotion/react";
import Frame, { FrameSize } from "./Frame";
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

export type NodeType = Frame | Pipe | Joint;

export type CubicBezier = { p1: number; p2: number; p3: number; p4: number };

export type TimingFunction = "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | CubicBezier;

export type AnimationProperties = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  backgroundColor?: string;
  keyframes?: SerializedStyles;
  duration: number; // ms
  delay?: number; // ms
  timingFunction?: TimingFunction;
};

export interface FilterProps {
  filterId: string;
  animationId: string;
  duration: number; //ms
  filterColor: string;
  begin?: string;
  calcMode?: "discrete" | "linear" | "paced" | "spline";
  values?: string;
}

export interface AssetProps {
  id: string;
}

export type PictureOptions = {
  size?: FrameSize;
  height?: number;
  width?: number;
  filterColor?: string;
  color?: string;
};
