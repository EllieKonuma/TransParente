import { Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TbGenderTransgender } from "react-icons/tb";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import { MobileMenu } from "./MobileMenu";

export const headerData = [
  { label: "Início", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Sobre Nós", path: "/sobre-nos" },
];

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
        <HStack>
          <Icon
            as={TbGenderTransgender}
            display={{ base: "flex", md: "none" }}
            boxSize={"3em"}
          />

          <Heading _hover={{ textDecoration: "underline" }}>
            TransParente
          </Heading>
        </HStack>
      </Link>
      <HStack display={{ base: "none", md: "flex" }}>
        {headerData.map((item, i) => (
          <Link key={i} to={item.path}>
            <Text
              fontSize={"2xl"}
              ml={"1em"}
              mr={"1em"}
              _hover={{ textDecoration: "underline" }}
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </HStack>
      <HStack>
        <DarkModeSwitch />
        <MobileMenu />
      </HStack>
    </Flex>
  );
}

export default Header;
