import { FilterProps } from "../Components/Types";

export const FillUpFilter = (props: FilterProps) => {
  return (
    <filter id={props.filterId} primitiveUnits="objectBoundingBox">
      <feFlood floodColor={props.filterColor} />

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
