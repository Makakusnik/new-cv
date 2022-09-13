import { FilterProps } from "../Components/Types";

export const FillUpFilter = (props: FilterProps) => {
  return (
    <filter id={props.filterId} primitiveUnits="objectBoundingBox">
      <feFlood floodColor={props.filterColor} floodOpacity="0">
        <animate
          id={props.animationId + "flood"}
          attributeName="flood-opacity"
          from="0"
          to="1"
          dur={`1ms`}
          fill="freeze"
          begin={`${props.begin}`}
        />
      </feFlood>
      <feOffset>
        <animate
          id={props.animationId}
          attributeName="y"
          from="1"
          to="0"
          dur={`${props.duration}ms`}
          begin={props.begin}
          calcMode={props.calcMode}
          values={props.values}
        />
      </feOffset>

      <feComposite operator="in" in2="SourceGraphic" />
      <feComposite operator="over" in2="SourceGraphic" />
    </filter>
  );
};
