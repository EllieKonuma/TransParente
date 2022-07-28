import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Post({ number, authorPic, authorName, title }) {
  return (
    <Flex height="150px" borderRadius={"10px"}>
      <Box mr={"2em"}>
        <Text fontSize="4xl" fontWeight={"extrabold"}>
          {number}
        </Text>
      </Box>
      <Flex flexWrap={"wrap"} flexDir={"column"}>
        <Flex alignItems={"center"}>
          <Image
            borderRadius="full"
            boxSize="60px"
            mr={"1em"}
            src={authorPic}
            alt={authorName}
          />
          <Text fontSize={"2xl"}>{authorName}</Text>
        </Flex>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Post;
