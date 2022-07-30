import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Contribuinte({ authorPic, authorName }) {
  return (
    <Flex mt={"1em"} alignItems={"center"}>
      <Image
        borderRadius="full"
        boxSize="60px"
        mr={"1em"}
        src={authorPic}
        alt={authorName}
      />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        {authorName}
      </Text>
    </Flex>
  );
}

export default Contribuinte;
