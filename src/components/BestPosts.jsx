import {
  Box,
  Flex,
  Icon,
  SkeletonCircle,
  SkeletonText,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { HiTrendingUp } from "react-icons/hi";
import TrendingPost from "./TrendingPost";
import { getPosts } from "../controllers/postController";

function BestPosts() {
  const [posts, setPosts] = useState(null);
  const [skeletonSize] = useState([1, 2, 3]);

  //fetchPosts
  const fetchPosts = async () => {
    let postsFromAPI = await getPosts();

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
          ml={"6em"}
          mr={"1em"}
        />

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Assuntos mais populares
        </Text>
      </Flex>
      <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
        {posts === null
          ? skeletonSize.map((i) => (
              <Box padding="6" boxShadow="lg" w={"400px"} zIndex="-1" key={i}>
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" w="100%" noOfLines={2} spacing="4" />
              </Box>
            ))
          : posts
              .slice(0, 3)
              .map((post) => (
                <TrendingPost
                  authorName={post.authorName}
                  authorPic={post.authorPic}
                  number={post.id}
                  key={post.id}
                  title={post.title}
                />
              ))}
      </Flex>
    </Box>
  );
}

export default BestPosts;
