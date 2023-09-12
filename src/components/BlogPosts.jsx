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
import BlogPost from "./BlogPost";

function BlogPosts() {
  const [posts, setPosts] = useState(null);
  const [skeletonSize] = useState([1, 2, 3]);

  const fetchPosts = async () => {
    const resp = await fetch("https://aerial-indecisive-store.glitch.me/posts");
    const postsFromApi = await resp.json();

    setPosts(postsFromApi);
  };

  const getAuthorById = async (id) => {
    const resp = await fetch(
      `https://aerial-indecisive-store.glitch.me/authors/${id}`
    );
    const author = await resp.json();

    return author;
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Flex flexDirection={"column"} w={"750px"}>
      {posts === null
        ? skeletonSize.map((i) => (
            <Box padding="6" boxShadow="lg" zIndex="-1" key={i}>
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          ))
        : posts.map((post) => {
            const authorName = getAuthorById(post.authorId).name;
            return (
              <BlogPost
                titulo={post.title}
                intro={post.intro}
                img={post.thumbnail}
                avatar={post.authorPic}
                author={post.authorName}
                key={post.id}
              />
            );
          })}
    </Flex>
  );
}

export default BlogPosts;
