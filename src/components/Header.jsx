import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Flex
      color={"white"}
      bgGradient={"linear(to-r, blue.200, pink.200, pink.200, blue.200)"}
      w={"100%"}
      h={"75px"}
      align="center"
      textAlign={"center"}
      position={"fixed"}
      justifyContent={"space-around"}
      borderBottom={"1px solid white"}
    >
      <Heading>TransParente</Heading>
    </Flex>
  );
}

export default Header;
