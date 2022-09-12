import { useToken } from "@chakra-ui/react";
import { FramePicture } from "../Components/FramePicture";
import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const ElectricityBolt = (props: AssetProps & PictureOptions): JSX.Element => {
  return (
    <svg
      width={props.size ? `${props.size}px` : "40px"}
      height={props.size ? `${props.size}px` : "40px"}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <FillUpFilter
        filterId={props.id}
        filterColor={props.filterColor!}
        animationId="powerSourceAnimation"
        duration={1000}
        begin="0;powerSourceAnimation.end+200ms"
      />
      <g filter={`url(#${props.id})`}>
        <path
          d="M14.0512 1.58977H15.3205L14.3974 10.359H19.5897V11.6282L11.1666 23.7436L10.1282 24.0898L11.1666 14.3975L5.16663 13.7052L14.0512 1.58977Z"
          fill={props.color!}
        />
        <path
          d="M14.62 2.18356H14.6242H14.62ZM14.62 2.18356L12.9277 11.0752L19.0586 11.0958L10.7133 23.1498L12.4057 13.3676L6.27518 13.3462L14.62 2.18356ZM14.6212 0.683587C14.5807 0.683587 14.5402 0.685064 14.5005 0.68804C14.2357 0.709439 14.0602 0.797939 13.8521 0.937814C13.7349 1.01594 13.6292 1.11011 13.5382 1.21756C13.5109 1.24982 13.4851 1.28335 13.4609 1.31806L5.05605 12.4417C4.72418 12.8966 4.67543 13.497 4.93043 13.9987C5.18505 14.5005 5.69992 14.8185 6.2643 14.8226L10.5941 14.8541L9.2328 22.8742C9.10343 23.5635 9.47093 24.2505 10.1178 24.5272C10.3058 24.608 10.5083 24.6496 10.7129 24.6495C11.1843 24.6495 11.5717 24.429 11.8623 24.0307L20.2777 11.9767C20.6096 11.5218 20.6579 10.9207 20.4033 10.4197C20.1487 9.91792 19.6338 9.59989 19.0694 9.59579L14.7397 9.58829L16.0863 2.53642C16.1148 2.42096 16.1292 2.30247 16.1291 2.18354C16.1291 1.37204 15.4829 0.71054 14.6744 0.68429C14.6564 0.68354 14.6388 0.68354 14.6212 0.68354L14.6212 0.683587Z"
          fill={props.color!}
        />
      </g>
    </svg>
  );
};

export default ElectricityBolt;
