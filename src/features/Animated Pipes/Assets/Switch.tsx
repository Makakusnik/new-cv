import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const Switch = (props: AssetProps & PictureOptions): JSX.Element => {
  let width, height;
  if (props.width && props.height) {
    width = props.width;
    height = props.height;
  } else {
    width = props.size ? `${props.size}px` : "40px";
    height = props.size ? `${props.size}px` : "40px";
  }
  return (
    <svg width={width} height={height} viewBox="0 0 32 32">
      <filter id={"loading"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={"black"}>
          <animate
            id={"loadingAnimation2"}
            attributeName="flood-opacity"
            from="0"
            to="1"
            dur={`1000ms`}
            begin={"1s;loadingAnimation2.end+1s"}
          />
        </feFlood>
        <feOffset>
          <animate
            id={"loadingAnimation"}
            attributeName="x"
            from="0"
            to="1"
            dur={`1000ms`}
            begin={"0s;loadingAnimation.end+1s"}
          />
        </feOffset>

        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <filter id={"ledOn"} primitiveUnits="objectBoundingBox">
        <feFlood floodOpacity={"1"} floodColor={"red"}>
          <animate
            id={"ledDiode"}
            attributeName="flood-opacity"
            from="0"
            to="1"
            dur={`1000ms`}
            calcMode="discrete"
            begin={"0s;ledDiode.end"}
          />
        </feFlood>

        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <g>
        <path
          fill={props.color}
          d="M 5.1308594 5 C 4.7036498 5.0002124 4.287069 5.1368953 3.9433594 5.390625 C 3.5996597 5.6443547 3.346733 6.0019567 3.2207031 6.4101562 L 0.08984375 16.480469 C 0.030503609 16.671569 0.00032209268 16.870213 0 17.070312 L 0 25 C 0 25.530399 0.21086588 26.038963 0.5859375 26.414062 C 0.96101012 26.789162 1.4695705 27 2 27 L 30 27 C 30.530399 27 31.038963 26.789162 31.414062 26.414062 C 31.789162 26.038963 32 25.530399 32 25 L 32 17.060547 C 31.9997 16.860447 31.969456 16.661803 31.910156 16.470703 L 28.779297 6.4101562 C 28.653297 6.0019567 28.40034 5.6443547 28.056641 5.390625 C 27.712941 5.1368953 27.29634 5.0002124 26.869141 5 L 5.1308594 5 z M 5.1308594 7 L 26.869141 7 L 30 17.060547 L 30 25 L 2 25 L 2 17.060547 L 5.1308594 7 z M 10.119141 20 L 10.119141 23 L 11.919922 23 L 11.919922 20 L 10.119141 20 z M 15.109375 20 L 15.109375 23 L 16.910156 23 L 16.910156 20 L 15.109375 20 z M 20.099609 20 L 20.099609 23 L 21.900391 23 L 21.900391 20 L 20.099609 20 z M 25.099609 20 L 25.099609 23 L 26.900391 23 L 26.900391 20 L 25.099609 20 z "
        />
        <path fill="lightgreen" filter="url(#ledOn)" d="m 5.12,20 h 1.8 v 3 h -1.8 z" />
        <path fill="lightblue" filter={"url(#loading)"} d="m 4.23,16 h 23.69 v 1.4 H 4.23 Z" />
      </g>
    </svg>
  );
};

export default Switch;
