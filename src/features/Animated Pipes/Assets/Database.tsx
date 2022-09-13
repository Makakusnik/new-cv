import { useToken } from "@chakra-ui/react";
import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const Database = (props: AssetProps & PictureOptions): JSX.Element => {
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
      <filter id={"vrch"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={"red"}>
          <animate
            id={"blik1"}
            attributeName="flood-opacity"
            from="1"
            to="0"
            dur={`500ms`}
            fill="freeze"
            begin={"0s;blik1.end+1s"}
            calcMode="discrete"
          />
        </feFlood>
        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <filter id={"stred"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={"lightgreen"}>
          <animate
            id={"blik2"}
            attributeName="flood-opacity"
            from="1"
            to="0"
            dur={`500ms`}
            fill="freeze"
            begin={"250ms;blik2.end+1ms"}
            calcMode="discrete"
          />
        </feFlood>
        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <filter id={"spod"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={"lightgreen"}>
          <animate
            id={"blik3"}
            attributeName="flood-opacity"
            from="1"
            to="0"
            dur={`1500ms`}
            fill="freeze"
            begin={"250ms;blik3.end+850ms"}
            calcMode="discrete"
          />
        </feFlood>
        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />

        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <path
        id={"spodna bodka"}
        filter={`url(#spod)`}
        d="m 8.5714289,25.714285 c 0,0.378857 0.1505142,0.742286 0.4184228,1.010172 0.2679086,0.267885 0.6312685,0.4184 1.0101483,0.4184 0.37888,0 0.74224,-0.150515 1.010149,-0.4184 0.267908,-0.267886 0.418423,-0.631315 0.418423,-1.010172 0,-0.378857 -0.150515,-0.742285 -0.418423,-1.010171 C 10.74224,24.436228 10.37888,24.285714 10,24.285714 c -0.3788798,0 -0.7422397,0.150514 -1.0101483,0.4184 C 8.7219431,24.972 8.5714289,25.335428 8.5714289,25.714285 Z"
      />
      <path
        id={"stred bodka"}
        filter={`url(#stred)`}
        d="m 8.5714289,16 c 0,0.378857 0.1505142,0.742286 0.4184228,1.010171 0.2679086,0.267886 0.6312685,0.4184 1.0101483,0.4184 0.37888,0 0.74224,-0.150514 1.010149,-0.4184 0.267908,-0.267885 0.418423,-0.631314 0.418423,-1.010171 0,-0.378857 -0.150515,-0.742286 -0.418423,-1.010171 C 10.74224,14.721943 10.37888,14.571429 10,14.571429 c -0.3788798,0 -0.7422397,0.150514 -1.0101483,0.4184 C 8.7219431,15.257714 8.5714289,15.621143 8.5714289,16 Z"
      />
      <path
        id={"vrchna bodka"}
        filter={`url(#vrch)`}
        d="m 8.5714289,6.2857146 c 0,0.37888 0.1505142,0.74224 0.4184228,1.0101486 C 9.2577603,7.5637717 9.6211202,7.714286 10,7.714286 c 0.37888,0 0.74224,-0.1505143 1.010149,-0.4184228 0.267908,-0.2679086 0.418423,-0.6312686 0.418423,-1.0101486 0,-0.3788799 -0.150515,-0.7422399 -0.418423,-1.0101485 C 10.74224,5.0076576 10.37888,4.8571433 10,4.8571433 c -0.3788798,0 -0.7422397,0.1505143 -1.0101483,0.4184228 C 8.7219431,5.5434747 8.5714289,5.9068347 8.5714289,6.2857146 Z"
      />
      <path d="M 27.428571,6e-7 H 4.571429 C 3.9392862,6e-7 3.4285719,0.51071487 3.4285719,1.1428577 V 30.857142 c 0,0.632115 0.5107143,1.142857 1.1428571,1.142857 h 22.857142 c 0.632114,0 1.142857,-0.510742 1.142857,-1.142857 V 1.1428577 C 28.571428,0.51071487 28.060685,6e-7 27.428571,6e-7 Z M 6.0000004,2.5714291 H 26 V 10 H 6.0000004 Z M 26,19.714286 H 6.0000004 V 12.285714 H 26 Z m 0,9.714285 H 6.0000004 V 22 H 26 Z" />
    </svg>
  );
};

export default Database;
