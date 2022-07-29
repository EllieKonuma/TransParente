import {
  SimpleGrid,
  Box,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Post from "./Post";
import React, { useEffect, useState } from "react";

function BestPosts() {
  const [posts, setPosts] = useState(null);
  const [skeletonSize] = useState([1, 2, 3, 4, 5, 6]);

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
      <SimpleGrid columns={3} spacing={10} alignItems={"center"}>
        {posts === null
          ? skeletonSize.map(() => (
              <Box padding="6" boxShadow="lg" key={Math.random()}>
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ))
          : posts.map((post) => {
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
      </SimpleGrid>
    </Box>
  );
}

export default BestPosts;
