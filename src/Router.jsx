import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import SobreNos from "./Pages/SobreNos";

// import { Text, Heading, Flex, Stack } from "@chakra-ui/core";
// import { ChakraProvider } from "@chakra-ui/react";

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
