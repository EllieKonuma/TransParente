import { SimpleGrid, Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

function BestNews() {
  return (
    <Box w={"90%"} mt={"2em"} mb={"2em"} ml={"1em"} mr={"1em"}>
      <SimpleGrid columns={3} spacing={10} alignItems={"center"}>
        <Flex height="150px" borderRadius={"10px"}>
          <Box mr={"2em"}>
            <Text fontSize="4xl" fontWeight={"extrabold"}>
              1
            </Text>
          </Box>
          <Flex flexWrap={"wrap"}>
            <Flex alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="60px"
                mr={"1em"}
                src="https://yt3.ggpht.com/-4vtbeqanrhihlYb3E8h08XT_yTIDm1s4MJ-bRTcclBzHnqehmQ1ZVU5PNbwfzW4gyfgx-CDSg=s900-c-k-c0x00ffffff-no-rj"
                alt="Jonas Maria"
              />
              <Text fontSize={"2xl"}>Jonas Maria</Text>
            </Flex>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              TUDO sobre MATRIX como alegoria TRANS
            </Text>
          </Flex>
        </Flex>
        <Flex height="150px" borderRadius={"10px"}>
          <Box mr={"2em"}>
            <Text fontSize="4xl" fontWeight={"extrabold"}>
              2
            </Text>
          </Box>
          <Flex flexWrap={"wrap"}>
            <Flex alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="60px"
                mr={"1em"}
                src="https://pbs.twimg.com/profile_images/1532423397535322113/eqSG7w6t_400x400.jpg"
                alt="Bryanna Nasck"
              />
              <Text fontSize={"2xl"}>Bryanna Nasck</Text>
            </Flex>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              TUDO sobre MATRIX como alegoria TRANS
            </Text>
          </Flex>
        </Flex>
        <Flex height="150px" borderRadius={"10px"}>
          <Box mr={"2em"}>
            <Text fontSize="4xl" fontWeight={"extrabold"}>
              3
            </Text>
          </Box>
          <Flex flexWrap={"wrap"}>
            <Flex alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="60px"
                mr={"1em"}
                src="https://d1fdloi71mui9q.cloudfront.net/R4kk1sRRJ27C8FWpeUgg_9y85p4YanoU08ljA"
                alt="Cup"
              />
              <Text fontSize={"2xl"}>Cup</Text>
            </Flex>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              TUDO sobre MATRIX como alegoria TRANS
            </Text>
          </Flex>
        </Flex>
        <Flex height="150px" borderRadius={"10px"}>
          <Box mr={"2em"}>
            <Text fontSize="4xl" fontWeight={"extrabold"}>
              4
            </Text>
          </Box>
          <Flex flexWrap={"wrap"}>
            <Flex alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="60px"
                mr={"1em"}
                src="https://pbs.twimg.com/media/FYMcNH7UIAsWw5t.jpg"
                alt="Isabel Brandão"
              />
              <Text fontSize={"2xl"}>Isabel Brandão</Text>
            </Flex>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              TUDO sobre MATRIX como alegoria TRANS
            </Text>
          </Flex>
        </Flex>
        <Flex height="150px" borderRadius={"10px"}>
          <Box mr={"2em"}>
            <Text fontSize="4xl" fontWeight={"extrabold"}>
              5
            </Text>
          </Box>
          <Flex flexWrap={"wrap"}>
            <Flex alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="60px"
                mr={"1em"}
                src="https://yt3.ggpht.com/Vsf0nTvYxC9OCE6lVjqNKmYoVV0NFN-FdJfQ5ll-4iIeLy9ZkYHfzGf04Yv1nh2n8MUng3HLTsM=s900-c-k-c0x00ffffff-no-rj"
                alt="Lucca Najar"
              />
              <Text fontSize={"2xl"}>Lucca Najar</Text>
            </Flex>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              TUDO sobre MATRIX como alegoria TRANS
            </Text>
          </Flex>
        </Flex>
        <Flex height="150px" borderRadius={"10px"}>
          <Box mr={"2em"}>
            <Text fontSize="4xl" fontWeight={"extrabold"}>
              6
            </Text>
          </Box>
          <Flex flexWrap={"wrap"}>
            <Flex alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="60px"
                mr={"1em"}
                src="https://yt3.ggpht.com/uTwpofAmDSUmZeyKhezBDEHYiXq28p7ZdeP7HqEFc6WD6TWZ3vYkcMpBed2KSxoe0Nc5ml6oAQ=s900-c-k-c0x00ffffff-no-rj"
                alt="Natalia Rosa"
              />
              <Text fontSize={"2xl"}>Natalia Rosa</Text>
            </Flex>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              TUDO sobre MATRIX como alegoria TRANS
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default BestNews;
