import { useToken } from "@chakra-ui/react";
import { AssetProps, PictureOptions } from "../Components/Types";
import { FillUpFilter } from "./Filter";

const YoutubeLogo = (props: AssetProps & PictureOptions): JSX.Element => {
  let width, height;
  if (props.width || props.height) {
    width = props.width || props.height;
    height = props.width || props.height;
  } else {
    width = props.size ? `${props.size}px` : "40px";
    height = props.size ? `${props.size}px` : "40px";
  }
  return (
    <svg width={width} height={height} viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
      <FillUpFilter
        filterId={props.id}
        filterColor={props.filterColor!}
        animationId="youtubeAnimation"
        duration={2000}
        begin="10s;youtubeAnimation.end"
      />
      <path
        filter={`url(#${props.id})`}
        fill={props.color}
        d="M23.5006 2.51196C23.3647 2.02719 23.1 1.5883 22.7346 1.24196C22.3589 0.884962 21.8984 0.629595 21.3966 0.499959C19.5186 0.00495878 11.9946 0.00495889 11.9946 0.00495889C8.85795 -0.0307285 5.72205 0.126233 2.60462 0.474959C2.10281 0.614172 1.64318 0.875246 1.26662 1.23496C0.896617 1.59096 0.628617 2.02996 0.488617 2.51096C0.15231 4.3227 -0.0110908 6.1623 0.000617183 8.00496C-0.0113828 9.84596 0.151617 11.685 0.488617 13.499C0.625617 13.978 0.892617 14.415 1.26362 14.768C1.63462 15.121 2.09662 15.376 2.60462 15.511C4.50762 16.005 11.9946 16.005 11.9946 16.005C15.1353 16.0407 18.2752 15.8837 21.3966 15.535C21.8984 15.4053 22.3589 15.15 22.7346 14.793C23.0999 14.4467 23.3643 14.0077 23.4996 13.523C23.8447 11.7119 24.0125 9.87155 24.0006 8.02796C24.0266 6.17656 23.859 4.32752 23.5006 2.51096V2.51196ZM9.60262 11.429V4.58196L15.8626 8.00596L9.60262 11.429Z"
      />
    </svg>
  );
};

export default YoutubeLogo;
