import * as React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Blog from "./Pages/Blog/Index";
import AboutUs from "./Pages/AboutUs/Index";
// import { Text, Heading, Flex, Stack } from "@chakra-ui/core";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
