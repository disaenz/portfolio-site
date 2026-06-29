import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <ScrollReveal distance={18}>
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
    </ScrollReveal>
  );
}
