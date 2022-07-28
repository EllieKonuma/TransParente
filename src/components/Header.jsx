import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

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

      <Link to={"/"}>
        <Text>Home</Text>
      </Link>
      <Link to={"/blog"}>
        <Text>Blog</Text>
      </Link>
      <Link to={"/sobre-nos"}>
        <Text>Sobre Nós</Text>
      </Link>

      <DarkModeSwitch />
    </Flex>
  );
}

export default Header;
