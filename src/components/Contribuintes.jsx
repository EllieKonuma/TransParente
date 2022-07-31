import {
  Box,
  Flex,
  HStack,
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { ImPencil } from "react-icons/im";
import Contribuinte from "./Contribuinte";

import React, { useEffect, useState } from "react";

function Contribuintes() {
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
      flexDir={"column"}
      alignItems={"flex-start"}
      h="550px"
      borderRadius={"10px"}
    >
      <HStack>
        <Icon as={ImPencil} boxSize={"25"} mr={"1em"} />
        <Text fontSize={"2xl"}>Autores</Text>
      </HStack>
      {authors === null
        ? skeletonSize.map((i) => (
            <HStack padding="6" boxShadow="lg" w={"300px"} key={i}>
              <SkeletonCircle size="10" />
              <Skeleton h="1em" w="100%" />
            </HStack>
          ))
        : authors.map((author) => {
            return (
              <Contribuinte
                authorPic={author.pic}
                authorName={author.name}
                key={author.id}
              />
            );
          })}
    </Flex>
  );
}

export default Contribuintes;
