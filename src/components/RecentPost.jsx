import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

function RecentPost({ titulo, intro, author }) {
  return (
    <Flex
      flexDirection={"column"}
      mb={"2em"}
      borderRadius={"10px"}
      p="1em"
      boxShadow={"lg"}
    >
      <Text fontSize={"3xl"} mb={"0.2em"} fontWeight={"extrabold"}>
        {titulo}
      </Text>
      <Text fontSize={"xl"}>{intro}</Text>
      <Text textAlign={"end"}>{author}</Text>
    </Flex>
  );
}

export default RecentPost;
