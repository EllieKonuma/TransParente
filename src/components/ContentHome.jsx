import { Box, Flex, Image, Text } from "@chakra-ui/react";

function ContentHome() {
  return (
    <Flex
      justifyContent={"space-around"}
      mt={"2em"}
      mb={"2em"}
      ml={"1em"}
      mr={"1em"}
    >
      <Box
        bg="tomato"
        h="600px"
        w={"650px"}
        mr={"1em"}
        borderRadius={"10px"}
      ></Box>
      <Box bg="blue" h="550px" w={"300px"} ml={"1em"} borderRadius={"10px"}>
        <Flex>
          <Image />
          <Text></Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ContentHome;
