import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function TrendingPost({ number, authorPic, authorName, title }) {
  return (
    <Flex
      h="150px"
      w={"400px"}
      borderRadius={"10px"}
      boxShadow={"lg"}
      direction="column"
      p="1em"
    >
      <Flex>
        <Text mr={"0.5em"} fontSize="4xl" fontWeight={"extrabold"}>
          {number}
        </Text>

        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="60px"
            mr={"1em"}
            src={authorPic}
            alt={authorName}
          />
          <Text fontSize={"2xl"}>{authorName}</Text>
        </Flex>
      </Flex>

      <Flex ml="2em" flexWrap={"wrap"} flexDir={"column"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TrendingPost;
