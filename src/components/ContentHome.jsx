import { Box, Flex } from "@chakra-ui/react";

import React from "react";
import Contribuintes from "./Contribuintes";

function ContentHome() {
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
      <Contribuintes />
    </Flex>
  );
}

export default ContentHome;
