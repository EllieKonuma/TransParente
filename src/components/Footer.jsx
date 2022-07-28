import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      //   color={"blue"}
      bgGradient={"white"}
      w={"100%"}
      h={"150px"}
      align="center"
      wrap={"warp"}
      textAlign={"center"}
      justifyContent={"space-around"}
      borderTop={"1px solid"}
    >
      <Text
        bgGradient="linear(to-r, blue.200, pink.200, pink.200, blue.200)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        TransParente
      </Text>
      <Text
        bgGradient="linear(to-r, blue.200, pink.200, pink.200, blue.200)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        “Lugar seguro com informações confiáveis para pessoas trans”
      </Text>
    </Flex>
  );
}

export default Footer;
