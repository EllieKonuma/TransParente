import { Box } from "@chakra-ui/react";
import React from "react";

function Banner() {
  return (
    <Box
      bgGradient={"linear(to-r, blue.200, pink.200, pink.200, blue.200)"}
      borderBottom={"1px solid white"}
      w={"100%"}
      h={"425px"}
    ></Box>
  );
}

export default Banner;
