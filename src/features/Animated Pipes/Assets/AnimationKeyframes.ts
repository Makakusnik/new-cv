import { keyframes } from "@emotion/react";

export const basicProjectileMovement = keyframes`
    0% {
      offset-distance: 0%;
      opacity: 0;
      transform: rotate(0);
    } 
    10%{
      offset-distance: calc(0% + 20px);
      opacity: 0
    }
    15% {
      transform: rotate(360deg);
      opacity: 1
    }
    25% {
      opacity: 1;
      transform: rotate(720deg);
    }
    95% {
      offset-distance: calc(100% - 50px);
      transform: rotate(2000deg);
      opacity: 1;
    }
    98% {
      offset-distance: calc(100% - 35px);
      transform:scale(1);
      transform: rotate(2200deg);
      opacity: 1;
    }
    100% {
      transform:scale(2);
      transform: rotate(2300deg);
      offset-distance: 100%;
      opacity: 0;
    }
`;
