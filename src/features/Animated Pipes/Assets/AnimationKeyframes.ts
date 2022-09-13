import { keyframes } from "@emotion/react";

export const basicProjectileMovement = keyframes`
    0% {
      offset-distance: 0%;
      opacity: 0
    }
    30% {
      opacity: 1
    }
    80% {
      transform:scale(1);
      opacity: 1;
    }
    100% {
      transform:scale(2);
      offset-distance: 100%;
      opacity: 0;
    }
`;
