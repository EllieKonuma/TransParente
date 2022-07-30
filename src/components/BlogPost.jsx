import { Flex, Text, Box, Image, Avatar } from "@chakra-ui/react";
import React from "react";

function BlogPost({ titulo, intro, author, img, avatar }) {
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
      <Flex w="100%" justifyContent={"flex-end"}>
        <Text mr="1em">{author}</Text>
        <Avatar src={avatar} size="xs" zIndex={"-1"} />
      </Flex>
      <Image src={img} borderRadius="10px" mt={"1em"} />
    </Flex>
  );
}

export default BlogPost;
