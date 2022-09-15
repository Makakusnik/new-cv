import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const Udemy = (props: AssetProps & PictureOptions): JSX.Element => {
  let width, height;
  if (props.width || props.height) {
    width = props.width || props.height;
    height = props.width || props.height;
  } else {
    width = props.size ? `${props.size}px` : "40px";
    height = props.size ? `${props.size}px` : "40px";
  }
  return (
    <svg width={width} height={height} viewBox="0 0 32 32">
      <FillUpFilter
        filterId={props.id}
        filterColor={props.filterColor!}
        animationId="UdemyFill"
        duration={2000}
        begin="10s;UdemyFill.end+2s"
      />
      <filter id={`${props.id}2`} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={"#A435F0"} floodOpacity="0">
          <animate
            id={`${props.id}anim`}
            attributeName="flood-opacity"
            dur={`2000ms`}
            begin={`12s;${props.id}anim.end+2s`}
            calcMode="linear"
            values="0;1;0"
          />
        </feFlood>
        <feOffset></feOffset>
        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>

      <path
        filter={`url(#${props.id}2)`}
        fill={props.color}
        d="m 7.6255655,7.1550181 c 1.91e-4,-0.7951204 3.81e-4,-1.5902408 5.71e-4,-2.3853612 2.7915505,-1.5880904 5.5830995,-3.1761807 8.3746485,-4.76427093 2.791269,1.58809043 5.582536,3.17618063 8.373805,4.76427093 1.24e-4,1.5902408 2.49e-4,3.1804817 3.75e-4,4.7707227 -2.780946,-1.6033178 -5.57621,-3.1823477 -8.374597,-4.7550977 -2.798622,1.572802 -5.593737,3.1524992 -8.3753725,4.7550977 1.9e-4,-0.7951202 3.83e-4,-1.5902437 5.7e-4,-2.3853615 z"
      />
      <path
        filter={`url(#${props.id})`}
        fill={props.color}
        d="m 15.265621,31.985898 c -3.035833,-0.08916 -6.2809785,-1.799795 -7.2249045,-4.841699 -0.646648,-1.973019 -0.307756,-4.08177 -0.403924,-6.119408 -0.0047,-2.496503 -0.0094,-4.993006 -0.01411,-7.489509 1.45834,0 2.9166815,0 4.3750215,0 0.02443,3.719184 -0.02683,7.439941 0.06261,11.157874 0.177786,2.15796 2.40997,3.668382 4.48865,3.3399 1.992701,-0.185876 3.582639,-2.085956 3.421153,-4.081062 0.03382,-3.472073 0.02012,-6.944486 0.03202,-10.416712 1.458394,0 2.916788,0 4.375181,0 -0.02806,3.994625 0.03596,7.991442 -0.07355,11.98429 -0.206852,2.489529 -1.877995,4.729808 -4.189061,5.666915 -1.514798,0.700814 -3.200947,0.848976 -4.849091,0.799411 z"
      />
    </svg>
  );
};

export default Udemy;
