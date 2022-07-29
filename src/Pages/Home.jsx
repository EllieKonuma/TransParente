import Banner from "../components/Banner";
import Header from "../components/Header";
import BestPosts from "../components/BestPosts";
import ContentHome from "../components/ContentHome";
import Footer from "../components/Footer";
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
        <BestPosts />
      </Flex>

      <ContentHome />
      <Footer />
    </div>
  );
}

export default Home;
