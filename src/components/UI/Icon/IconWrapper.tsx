import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  color: string;
  activate?: boolean;
}

export const IconWrapper = ({ color, children, activate }: IconWrapperProps) => {
  return (
    <IconWrapperStyle color={color} activate={activate}>
      {children}
    </IconWrapperStyle>
  );
};

const IconWrapperStyle = styled.div<{ color: string; activate?: boolean }>`
  svg {
    transition: color 0.2s ease-in-out;
  }
  &:hover svg {
    color: ${({ color }) => color};
  }
  ${({ activate, color }) =>
    activate &&
    css`
      color: ${color};
    `}
`;
