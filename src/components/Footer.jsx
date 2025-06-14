import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Flex
      as="footer"
      w="100%"
      bg="teal.600"
      color="white"
      py={4}
      px={{ base: 4, md: 8 }}
      justify="center"
      align="center"
    >
      <Text fontSize="sm" textAlign="center">
        © {currentYear} Daniel Saenz. All rights reserved.
      </Text>
    </Flex>
  );
}
