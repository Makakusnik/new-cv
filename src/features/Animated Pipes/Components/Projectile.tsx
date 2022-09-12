import { css, Keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimationProperties } from "./Types";

type ProjectileProps = {
  id: string;
  offsetPath: string;
} & AnimationProperties;

const ProjectileStyle = styled.div<ProjectileProps>`
  offset-path: ${({ offsetPath }) => `path("${offsetPath}")`};
  position: absolute;
  animation: ${({ keyframes }) => {
    return keyframes;
  }};
  animation-timing-function: ${({ timingFunction }) => timingFunction};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-delay: ${({ delay }) => `${delay}ms`};
  animation-iteration-count: infinite;
  top: ${({ top }) => top && `${top}px`};
  left: ${({ left }) => left && `${left}px`};
  right: ${({ right }) => right && `${right}px`};
  opacity: 0;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${({ backgroundColor }) => backgroundColor || "yellow"};
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Projectile = (props: ProjectileProps) => {
  return <ProjectileStyle {...props} />;
};
