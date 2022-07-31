import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";

// import { Text, Heading, Flex, Stack } from "@chakra-ui/core";
// import { ChakraProvider } from "@chakra-ui/react";

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
