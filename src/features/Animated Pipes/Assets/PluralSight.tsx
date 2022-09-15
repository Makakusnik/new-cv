import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const PluralSight = (props: AssetProps & PictureOptions): JSX.Element => {
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
      <filter id={props.id + "filter"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={props.color}></feFlood>
        <feOffset>
          <animate
            id={"loadingAnimationPluralSight"}
            attributeName="y"
            from="0"
            to="-1.2"
            dur={`2s`}
            fill="freeze"
            begin={"9s;loadingAnimationPluralSight.end+2s"}
          />
        </feOffset>

        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <filter id={props.id + "filter2"} primitiveUnits="objectBoundingBox">
        <feFlood floodColor={"white"} floodOpacity="0">
          <animate
            id={"loadingAnimationPluralSight2"}
            attributeName="flood-opacity"
            dur={`2s`}
            values="0;1;0"
            calcMode="linear"
            begin={"11s;loadingAnimationPluralSight2.end+2s"}
          />
        </feFlood>
        <feComposite operator="in" in2="SourceGraphic" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
      <defs>
        <linearGradient id="linearGradient5170">
          <stop stopColor="#e80a88" offset="0" />
          <stop stopColor="#ef5928" offset="1" />
        </linearGradient>
      </defs>
      <g transform="matrix(2,0,0,2,-4,-3.9999988)">
        <path
          filter={`url(#${props.id + "filter"})`}
          fill="url(#linearGradient5170)"
          transform="rotate(-74.297334)"
          strokeWidth="0.5"
          stroke={props.color}
          d="m 1.0796618,12.333243 a 8,8 0 0 1 -8,8 8,8 0 0 1 -7.9999998,-8 8,8 0 0 1 7.9999998,-7.9999996 8,8 0 0 1 8,7.9999996 z"
        />
        <path
          filter={`url(#${props.id + "filter2"})`}
          fill="#3F758B"
          d="m 8.1633436,14.384846 c -0.08852,-0.624246 -0.05465,-1.256974 -0.10918,-1.883871 -0.5559727,0.307885 -1.0993298,0.641323 -1.6797924,0.902482 -0.1364996,-0.661754 -0.029662,-1.34141 -0.07177,-2.010799 -0.00685,-1.5766397 -0.023574,-3.1539657 0.035064,-4.7299093 0.5470483,0.029571 0.9528054,0.4701012 1.4250854,0.6933745 0.535575,0.2705322 0.272401,-0.5039287 0.334054,-0.8014895 9.02e-4,-0.326479 -0.05514,-1.1882101 0.436014,-0.7696032 1.5804394,0.8682826 3.1229794,1.8035205 4.6865364,2.7015848 0.811383,0.4766822 1.619143,0.9596722 2.417823,1.4573986 -0.19999,0.4589041 -0.791964,0.4896571 -1.134033,0.8086761 -2.097106,1.2336 -4.177607,2.497317 -6.3183284,3.654846 l -0.01762,-0.01862 z m 0.983994,-1.572614 c 1.5618554,-0.871884 3.1203304,-1.75223 4.6300704,-2.7125 -0.01,-0.5352707 -0.777799,-0.514486 -1.079243,-0.8612248 -1.180398,-0.6963643 -2.33794,-1.4383744 -3.5791814,-2.0246533 -0.38927,0.3119822 -0.04886,0.9719554 0.347708,1.1324767 0.8977214,0.5561099 1.8379854,1.0462437 2.6930194,1.6692164 -1.017032,0.660137 -2.069899,1.262242 -3.1145394,1.876989 0.07478,0.228833 -0.249219,0.941266 0.102166,0.919696 z M 7.4415201,11.795981 C 7.9640696,11.652419 8.3547716,11.209885 8.1466416,10.657026 8.1261616,9.9638962 8.0935206,9.2708862 8.0962856,8.577288 7.8080306,8.4955065 7.3164338,7.9244386 7.1484067,8.2376719 c -0.051691,1.2134557 -0.016311,2.4281041 -0.0054,3.6419951 0.08706,0.105028 0.2118096,-0.05812 0.2985126,-0.08369 z M 9.1915956,10.759618 C 9.5031856,10.493514 10.324036,10.348304 10.252146,9.9122012 9.9122256,9.6632585 9.3939826,9.1341102 9.0128766,9.3147749 c -0.04319,0.47051 -0.132688,1.0998671 0.07978,1.4841571 l 0.04634,-0.0083 0.0526,-0.03097 z"
        />
      </g>
    </svg>
  );
};

export default PluralSight;
