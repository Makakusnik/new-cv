import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const FreeCodeCamp = (props: AssetProps & PictureOptions): JSX.Element => {
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
      <FillUpFilter
        filterId={props.id}
        filterColor={"orange"}
        animationId="FreeCodeCampAnimation"
        duration={2000}
        begin="13s;FreeCodeCampAnimation.end+2000ms"
      />

      <filter id={props.id + "filter2"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={props.filterColor} floodOpacity="0">
          <animate
            id={"loadingAnimationFreeCodeCamp2"}
            attributeName="flood-opacity"
            dur={`2s`}
            values="0;1;0"
            calcMode="linear"
            fill="freeze"
            begin={"15s;loadingAnimationFreeCodeCamp2.end+2s"}
          />
        </feFlood>
        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>

      <path
        filter={`url(#${props.id})`}
        fill={props.color}
        d="m 11.939084,22.814432 c -1.418408,-1.159821 -2.3029608,-3.160253 -1.603631,-4.952631 0.821482,-2.106925 2.657969,-3.59654 3.674292,-5.602119 0.675479,-1.216604 1.243806,-2.5518292 1.267566,-3.9600136 0.836501,0.1939583 1.6846,1.2708836 2.360658,1.9762106 1.177169,1.358121 1.795442,3.285406 1.199899,5.036569 -0.676046,1.117747 0.638241,1.712278 1.236734,0.677097 0.739045,-1.79299 1.634262,0.825628 2.039357,1.657048 0.430538,1.490219 0.02102,3.124597 -1.002016,4.298059 -0.364539,0.543818 -1.895834,1.987941 -0.970209,0.589004 0.856135,-1.141339 0.111779,-2.75044 -1.382004,-2.150713 -1.687505,0.09949 -2.058304,-1.715587 -1.718949,-3.019242 0.07921,-0.946719 0.23898,-2.635107 -0.656283,-2.986547 -0.816381,1.013302 -1.504897,2.17351 -2.33389,3.206992 -1.04956,1.470873 -2.177178,3.265873 -1.765988,5.143838 0.359496,0.799726 0.234224,0.595539 -0.345536,0.08645 z"
      />
      <path
        filter={`url(#${props.id + "filter2"})`}
        fill={props.color}
        d="m 26.777344,6.9179688 c -1.280191,0.8937529 1.208424,1.7641317 1.607134,2.6176545 1.717266,1.8371457 2.5405,4.3871377 2.373154,6.8815387 -0.05163,2.900247 -1.539501,5.678722 -3.801747,7.465588 -1.151001,0.470462 -0.529225,2.057233 0.520936,1.172746 2.484132,-1.709312 4.198036,-4.491408 4.589097,-7.485228 0.419088,-2.703876 -0.120904,-5.62272 -1.877512,-7.7785531 -0.876333,-1.1440693 -1.91662,-2.2978908 -3.271019,-2.8506197 l -0.07285,-0.01203 z M 5.3378906,6.9375 C 3.4237218,8.0343995 1.9722004,9.8466424 0.99863706,11.80079 -0.32513898,14.918226 0.06371529,18.645229 1.7001553,21.569174 2.5875124,23.038492 3.7914247,24.35371 5.247705,25.266107 6.6910773,25.411101 5.9532159,23.827322 5.0669314,23.573909 2.6674251,21.503218 1.3457999,18.270647 1.6777808,15.111405 1.7325685,12.410616 3.3020377,9.8596591 5.4076581,8.2468537 6.0217998,7.9486353 6.5254539,6.7048917 5.3378906,6.9375 Z"
      />
    </svg>
  );
};

export default FreeCodeCamp;
