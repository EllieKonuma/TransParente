import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
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
      top={"0px"}
    >
      <Link to={"/"}>
        <Heading>TransParente</Heading>
      </Link>

      <NavLink to={"/"}>
        <Text fontSize={"2xl"}>Home</Text>
      </NavLink>
      <Link to={"/blog"}>
        <Text fontSize={"2xl"}>Blog</Text>
      </Link>
      <Link to={"/sobre-nos"}>
        <Text fontSize={"2xl"}>Sobre Nós</Text>
      </Link>

      <DarkModeSwitch />
    </Flex>
  );
}

// fazer estilização dos links do header

export default Header;
