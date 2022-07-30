import {
  Box,
  SkeletonCircle,
  SkeletonText,
  Text,
  Icon,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import Post from "./Post";
import React, { useEffect, useState } from "react";
import { HiTrendingUp } from "react-icons/hi";

function BestPosts() {
  const [posts, setPosts] = useState(null);
  const [skeletonSize] = useState([1, 2, 3]);

  const fetchPosts = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/elliekonuma/transparencia/posts"
    );

    const postsFromAPI = await response.json();

    setPosts(postsFromAPI);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box w={"90%"} mt={"2em"} mb={"2em"} ml={"1em"} mr={"1em"}>
      <Flex mb={"1em"} alignItems={"center"}>
        <Icon
          as={HiTrendingUp}
          color={useColorModeValue("black", "white")}
          boxSize={"30"}
          mr={"1em"}
        />

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Assuntos mais populares
        </Text>
      </Flex>
      <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
        {posts === null
          ? skeletonSize.map(() => (
              <Box padding="6" boxShadow="lg" key={Math.random()}>
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ))
          : posts.slice(0, 3).map((post) => {
              return (
                <Post
                  authorName={post.authorName}
                  authorPic={post.authorPic}
                  number={post.id}
                  key={post.id}
                  title={post.title}
                />
              );
            })}
      </Flex>
    </Box>
  );
}

export default BestPosts;
