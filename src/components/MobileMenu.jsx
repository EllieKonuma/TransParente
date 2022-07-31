import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";

import { headerData } from "./Header";
import { Link } from "react-router-dom";

export function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex ml={"1em"} display={{ base: "flex", md: "none" }}>
      <Button
        ref={btnRef}
        onClick={onOpen}
        colorScheme={"whiteAlpha"}
        size="md"
      >
        <HamburgerIcon color={"white"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent pt={"0.5em"}>
          <DrawerCloseButton mt={"1em"} size="lg" />
          <DrawerHeader fontSize={"2xl"}>TransParente</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"start"}>
              {headerData.map((item, i) => (
                <Link key={i} to={item.path}>
                  <Text
                    fontSize={"2xl"}
                    mt="1em"
                    _hover={{
                      textDecoration: "underline",
                      bgClip: "text",
                      bgGradient: "linear(to-r, pink.200, blue.200)",
                    }}
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
