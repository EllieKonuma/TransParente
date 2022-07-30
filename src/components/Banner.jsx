import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { TbGenderTransgender } from "react-icons/tb";

function Banner() {
  return (
    <Flex
      fontSize={"5xl"}
      bgGradient={"linear(to-r, blue.200, pink.200, pink.200, blue.200)"}
      borderBottom={"1px solid white"}
      w={"100%"}
      h={"425px"}
      mt={"75px"}
      wrap={"wrap"}
    >
      <Flex
        w={"50%"}
        h={"100%"}
        alignItems={"center"}
        minWidth={"475px"}

        // alignContent={"flex-start"}
      >
        <Text ml={"2em"} mb={"1em"} color={"white"} fontWeight={"extrabold"}>
          Lugar seguro com informações confiáveis para pessoas trans
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        w={"50%"}
        h={"100%"}
        alignItems={"center"}
      >
        <Icon
          as={TbGenderTransgender}
          mr={"1em"}
          mb={"0.5em"}
          boxSize={"300"}
          color={"white"}
        />
      </Flex>
    </Flex>
  );
}

export default Banner;
