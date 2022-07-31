import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { TbGenderTransgender } from "react-icons/tb";

function Banner() {
  return (
    <Center>
      <HStack
        w={"100%"}
        h={"425px"}
        mt={"75px"}
        fontSize={"5xl"}
        bgGradient={"linear(to-r, blue.200, pink.200, pink.200, blue.200)"}
        justifyContent={"space-around"}
      >
        <Text
          color={"white"}
          fontWeight={"extrabold"}
          ml={{ base: "1em", lg: "0" }}
          mr={{ base: "1em", mg: "0" }}
          maxW={"650px"}
        >
          Lugar seguro com informações confiaveis para pessoas trans.
        </Text>
        <Icon
          as={TbGenderTransgender}
          boxSize={"300"}
          color={"white"}
          display={{ base: "none", md: "block" }}
        />
      </HStack>
    </Center>
  );
}

export default Banner;
