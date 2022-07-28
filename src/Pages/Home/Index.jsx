import Banner from "../../components/Banner";
import Header from "../../components/Header";
import BestNews from "../../components/BestNews";
import ContentHome from "../../components/ContentHome";
import Footer from "../../components/Footer";
import { Flex, Spacer } from "@chakra-ui/react";

import * as React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Flex
        flexDirection={"column"}
        align={"center"}
        borderBottom={"1px solid gray"}
      >
        <BestNews />
      </Flex>

      <ContentHome />
      <Footer />
    </div>
  );
}

export default Home;
