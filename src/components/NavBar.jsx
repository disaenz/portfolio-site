import React from "react";
import { Flex, Box, Link, HStack } from "@chakra-ui/react";

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
      <Link href="#hero" fontSize="2xl" fontWeight="bold" _hover={{ color: "white", transform: "scale(1.15)" }} transition="transform 0.3s, color 0.3s">
          Daniel Saenz
      </Link>
      <HStack spacing={{ base: 2, md: 4 }}>
        <Link href="#about" px={4} py={{ base: 2, md: 3 }} rounded="md" _hover={{bg: "teal.700", color: "white", transform: "translateY(-2px)", boxShadow: "lg"}}>
          About
        </Link>
        <Link href="#skills" px={4} py={{ base: 2, md: 3 }} rounded="md" _hover={{bg: "teal.700", color: "white", transform: "translateY(-2px)", boxShadow: "lg"}}>
          Skills
        </Link>
        <Link href="#projects" px={4} py={{ base: 2, md: 3 }} rounded="md" _hover={{bg: "teal.700", color: "white", transform: "translateY(-2px)", boxShadow: "lg"}}>
          Projects
        </Link>
      </HStack>
    </Flex>
  );
}
