import { keyframes } from "@emotion/react";

export const basicProjectileMovement = keyframes`
    0% {
      offset-distance: 0%;
      opacity: 0
    }
    30% {
      opacity: 1
    }
    90% {
      opacity: 1;
    }
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
`;
