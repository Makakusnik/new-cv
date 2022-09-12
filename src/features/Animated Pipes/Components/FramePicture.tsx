export const FramePicture = (props: FramePictureProps): JSX.Element => {
  return (
    <svg>
      {props.filter}
      {props.pathOrGroup}
    </svg>
  );
};

export type FramePictureProps = {
  filter: JSX.Element;
  pathOrGroup: JSX.Element;
};
