import { Flex, Wrap, WrapItem } from "@chakra-ui/react";

import React from "react";
import Contribuintes from "./Contribuintes";
import RecentPosts from "./RecentPosts";

function ContentHome() {
  return (
    // <Flex
    //   justifyContent={"space-around"}
    //   mt={"2em"}
    //   mb={"2em"}
    //   ml={"1em"}
    //   mr={"1em"}
    //   wrap={"wrap"}
    // >
    // </Flex>
    <Wrap pl={"8em"} pr={"8em"} justify={"space-between"} spacing={"3em"}>
      <WrapItem>
        <RecentPosts />
      </WrapItem>
      <WrapItem>
        <Contribuintes />
      </WrapItem>
    </Wrap>
  );
}

export default ContentHome;
