import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

function BestNews() {
  return (
    <Box w={"90%"} mt={"2em"} mb={"2em"} ml={"1em"} mr={"1em"}>
      <SimpleGrid columns={3} spacing={10} alignItems={"center"}>
        <Box bg="tomato" height="150px" borderRadius={"10px"}></Box>
        <Box bg="tomato" height="150px" borderRadius={"10px"}></Box>
        <Box bg="tomato" height="150px" borderRadius={"10px"}></Box>
        <Box bg="tomato" height="150px" borderRadius={"10px"}></Box>
        <Box bg="tomato" height="150px" borderRadius={"10px"}></Box>
        <Box bg="tomato" height="150px" borderRadius={"10px"}></Box>
      </SimpleGrid>
    </Box>
  );
}

export default BestNews;
