import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

import Contribuentes from "./Contribuentes";
import React, { useEffect, useState } from "react";

function ContentHome() {
  const [authors, setAuthors] = useState(null);
  const [skeletonSize] = useState([1, 2, 3]);

  const fetchAuthors = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/elliekonuma/transparencia/authors"
    );

    const authorsFromAPI = await response.json();

    setAuthors(authorsFromAPI);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <Flex
      justifyContent={"space-around"}
      mt={"2em"}
      mb={"2em"}
      ml={"1em"}
      mr={"1em"}
      wrap={"wrap"}
    >
      <Box
        bg="tomato"
        h="600px"
        w={"650px"}
        mr={"1em"}
        borderRadius={"10px"}
      ></Box>
      <Flex
        flexDir={"column"}
        alignItems={"flex-start"}
        // bg="blue"
        h="550px"
        w={"300px"}
        ml={"1em"}
        borderRadius={"10px"}
      >
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Autores
        </Text>
        {authors === null
          ? skeletonSize.map(() => (
              <Box padding="6" boxShadow="lg" key={Math.random()}>
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ))
          : authors.map((author) => {
              return (
                <Contribuentes
                  authorPic={author.pic}
                  authorName={author.name}
                  key={author.id}
                />
              );
            })}
      </Flex>
    </Flex>
  );
}

export default ContentHome;
