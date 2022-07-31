import Header from "../components/Header";
import Footer from "../components/Footer";
import { Text, Flex, Box } from "@chakra-ui/react";

import React from "react";

function Sobre() {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Header />
      <Flex
        flexDir={"column"}
        mt={"7.5em"}
        mb={"5em"}
        pl={"3em"}
        w="65%"
        boxShadow={"lg"}
      >
        <Text fontSize={"4xl"} fontWeight="bold" mb={"0.5em"}>
          O que fazemos
        </Text>
        <Text fontSize={"3xl"}>
          Nosso objetivo é criar centro de informações para que as pessoas trans
          possam usar com segurança, então fazemos uma curadoria com a nossa
          equipe, assim tirando nebulosidade que temos com informações dos
          nossos direitos e deixá-las transparentes.
        </Text>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Sobre;
