import { Box, Flex, HStack, Text, useToken, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";

export const JobContainer = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Flex flexDirection="column" height="fit-content" width="full" alignItems="start">
      {children}
    </Flex>
  );
};

interface JobTitleProps {
  children: string;
  workDuration: string;
}

export const JobTitle = ({ workDuration, children }: JobTitleProps) => {
  const [secondary600] = useToken("colors", ["secondary.600"]);
  return (
    <HStack>
      <Text fontWeight={500} fontSize="24px" marginRight="8px">
        {children}
      </Text>
      <IoCalendarSharp color={secondary600} size="16px" />
      <Text color="secondary.600" fontSize="14px">
        {workDuration}
      </Text>
    </HStack>
  );
};

interface JobDetailsProps {
  positionName: string;
  children?: ReactNode | ReactNode[];
}

export const JobDetails = ({ positionName, children }: JobDetailsProps) => {
  return (
    <VStack alignItems="start">
      <Text fontSize="sm">{positionName}</Text>
      <HStack justifyContent="start">{children}</HStack>
    </VStack>
  );
};

interface ImageProps {
  children: ReactNode;
  backgroundColor?: string;
  padding: string;
}

export const JobImage = ({ children, backgroundColor, padding }: ImageProps) => {
  return (
    <Box backgroundColor={backgroundColor} padding={padding} marginTop={"16px"} width="fit-content">
      {children}
    </Box>
  );
};

interface DetailsPictureProps {
  children: ReactNode;
  title: string;
}

export const JobDetailsPicture = ({ children, title }: DetailsPictureProps) => {
  return (
    <VStack>
      {children}
      {title}
    </VStack>
  );
};
