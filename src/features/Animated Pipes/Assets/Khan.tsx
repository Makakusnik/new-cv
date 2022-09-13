import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const Khan = (props: AssetProps & PictureOptions): JSX.Element => {
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
        filterColor={props.filterColor!}
        animationId="khanFill"
        duration={3000}
        begin="0;khanFill.end+500ms"
      />
      <path
        filter={`url(#${props.id})`}
        fill={props.color}
        d="M 16.269531,0.02148438 C 14.288964,-0.08120437 12.741741,1.3476856 11.050501,2.1505376 8.3595837,3.6514384 5.6645126,5.1548021 2.9819247,6.6629832 1.5297607,7.5728788 1.0477215,9.3180982 1.1808204,10.936776 c -0.057087,3.754981 6.861e-4,7.514157 0.00694,11.266502 0.020656,2.060286 1.8315447,3.232125 3.4719247,4.048904 3.1787482,1.76129 6.3276749,3.581316 9.5390919,5.279047 1.706262,1.010264 3.625831,0.105253 5.141374,-0.81777 3.268935,-1.811612 6.551838,-3.612561 9.771416,-5.50208 1.533073,-0.945548 1.82843,-2.785453 1.706699,-4.43475 0.04149,-3.788947 0.03375,-7.583292 -0.02208,-11.3688156 C 30.582494,7.5485645 28.889875,6.5121109 27.374845,5.7447754 24.064404,3.8883229 20.772066,1.9761651 17.404305,0.23828699 17.038489,0.11395525 16.65524,0.04167085 16.269531,0.02148438 Z M 15.886719,6.5742188 c 2.30351,-0.2150701 4.261252,2.3684549 3.339003,4.5158882 -0.627098,2.091503 -3.432905,3.06859 -5.174844,1.718651 -1.854994,-1.304843 -2.005629,-4.4784519 0.03157,-5.6883746 0.537505,-0.3409775 1.169525,-0.5238494 1.804271,-0.5461646 z M 5.1777344,12.898438 c 3.4176443,0.436302 6.9029206,2.19839 8.4501916,5.420709 1.002174,1.639328 0.899852,3.638638 1.633671,5.361344 1.550426,1.556989 2.180939,-1.727065 2.432845,-2.829931 0.792378,-3.386873 3.645778,-5.867345 6.806722,-7.04251 0.899163,-0.134029 2.822131,-1.501371 2.937242,-0.249514 C 27.857262,18.561799 24.37005,23.47326 19.593757,24.91503 15.140649,26.372922 9.8504095,24.841915 7.0261656,21.057331 5.4185558,19.034522 4.61325,16.432674 4.6069907,13.870849 4.653843,13.488167 4.835493,13.101218 5.1777344,12.898438 Z"
      />
    </svg>
  );
};

export default Khan;
