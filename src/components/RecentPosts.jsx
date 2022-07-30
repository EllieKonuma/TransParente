import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import RecentPost from "./RecentPost";

function RecentPosts() {
  const [posts, setPosts] = useState(null);

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
        ? ""
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
