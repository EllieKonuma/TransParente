import {
  Flex,
  Icon,
  Text,
  SkeletonCircle,
  SkeletonText,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import RecentPost from "./RecentPost";

function RecentPosts() {
  const [posts, setPosts] = useState(null);
  const [skeletonSize] = useState([1, 2, 3]);

  const fetchPosts = async () => {
    const resp = await fetch(
      "https://my-json-server.typicode.com/elliekonuma/transparencia/posts"
    );
    const postsFromApi = await resp.json();

    setPosts(postsFromApi);
  };

  const getAuthorById = async (id) => {
    const resp = await fetch(
      `https://my-json-server.typicode.com/elliekonuma/transparencia/authors/${id}`
    );
    const author = await resp.json();

    return author;
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Flex flexDirection={"column"} maxW={"750px"}>
      <Flex alignItems={"center"} mb={"1em"}>
        <Icon as={BsStars} boxSize={"25"} mr={"1em"} />
        <Text fontSize={"2xl"}>Novas Postagens</Text>
      </Flex>
      {posts === null
        ? skeletonSize.map(() => (
            <Box padding="6" boxShadow="lg" key={Math.random()}>
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          ))
        : posts.splice(0, 3).map((post) => {
            const authorName = getAuthorById(post.authorId).name;
            return (
              <RecentPost
                titulo={post.title}
                intro={post.intro}
                author={post.authorName}
                key={post.id}
              />
            );
          })}
    </Flex>
  );
}

export default RecentPosts;
