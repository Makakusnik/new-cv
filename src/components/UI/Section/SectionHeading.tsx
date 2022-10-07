import { useToken } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  children: ReactNode | ReactNode[];
  id?: string;
  color: "blue" | "brown";
}

export const SectionHeading = ({ color, as, fontWeight = 900, children, id }: HeadingProps) => {
  const [primary400, secondary400, secondary600] = useToken("colors", ["primary.400", "secondary.400", "secondary.600"]);
  const hashTagColor = !(color === "blue") ? primary400 : secondary400;
  let fontSizeHeading: string | number;
  switch (as) {
    case "h1":
      fontSizeHeading = 32;
      break;
    case "h2":
      fontSizeHeading = 24;
      break;
    case "h3":
      fontSizeHeading = 20;
      break;
    case "h4":
      fontSizeHeading = 16;
      break;
    case "h5":
      fontSizeHeading = 12;
      break;
    case "h6":
      fontSizeHeading = 10;
      break;
    default:
      fontSizeHeading = 32;
      break;
  }

  return (
    <>
      {id ? (
        <a href={id && `#${id}`}>
          <Heading hashtagColor={hashTagColor} id={id} as={as} fontSize={fontSizeHeading} fontWeight={fontWeight} color={secondary600}>
            {children}
          </Heading>
        </a>
      ) : (
        <Heading hashtagColor={hashTagColor} id={id} as={as} fontSize={fontSizeHeading} fontWeight={fontWeight} color={secondary600}>
          {children}
        </Heading>
      )}
    </>
  );
};

type HeadingStyleProps = Pick<HeadingProps, "fontWeight"> & {
  fontSize: number;
  hashtagColor: string;
  color: string;
};

const Heading = styled.h6<HeadingStyleProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize + "px"};
  font-family: Poppins;
  padding-top: 24px;
  padding-bottom: 16px;
  color: ${({ color }) => color};
  width: fit-content;
  position: relative;

  &::before {
    transition: filter 0.3s ease-in-out;
    ${({ id }) => {
      return (
        id == undefined &&
        `display: none;
  `
      );
    }}
    content: "#";
    color: ${({ hashtagColor }) => hashtagColor};
    position: absolute;
    left: ${({ fontSize }) => -fontSize - 4 + "px"};
  }
  &:hover::before {
    filter: ${({ hashtagColor }) => `drop-shadow(0px 0px 8px ${hashtagColor})`};
  }
`;
