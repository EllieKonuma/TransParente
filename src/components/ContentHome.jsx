import { HStack } from "@chakra-ui/react";

import React from "react";
import Contribuintes from "./Contribuintes";
import RecentPosts from "./RecentPosts";

function ContentHome() {
  return (
    <HStack
      justify={"space-around"}
      wrap={"wrap"}
      mt="2em"
      mb="2em"
      alignItems={"top"}
    >
      <RecentPosts />
      <Contribuintes />
    </HStack>
  );
}

export default ContentHome;
