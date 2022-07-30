import Header from "../components/Header";
import Footer from "../components/Footer";

import { Text, Spacer, Heading, Center } from "@chakra-ui/react";
import BlogPosts from "../components/BlogPosts";

function Blog() {
  return (
    <div>
      <Header />
      <Center mt={"90px"}>
        <BlogPosts />
      </Center>
      <Footer />
    </div>
  );
}

export default Blog;
