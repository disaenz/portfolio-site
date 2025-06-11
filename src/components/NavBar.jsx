import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex
      as="nav"
      w="100%"
      bg="teal.600"
      color="white"
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
      align="center"
      justify="space-between"
      h="16"
      px={{ base: 4, md: 8 }}
    >
      <Box fontSize="2xl" fontWeight="bold">
        Daniel Saenz
      </Box>
      <Flex>
        <Link href="#about" px={4} py={2} rounded="md" _hover={{ bg: "teal.700" }}>
          About
        </Link>
        <Link href="#projects" px={4} py={2} rounded="md" _hover={{ bg: "teal.700" }}>
          Projects
        </Link>
      </Flex>
    </Flex>
  );
}
