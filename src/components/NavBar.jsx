import React from "react";
import {
  Flex,
  Link,
  IconButton,
  Collapse,
  Box,
  VStack,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        as="nav"
        w="100%"
        bg="teal.600"
        color="white"
        boxShadow="sm"
        position={{ base: "relative", md: "sticky" }}
        top={{ base: "auto", md: 0 }}
        zIndex="1000"
        align="center"
        justify="space-between"
        h="16"
        px={{ base: 4, md: 8 }}
      >
        {/* logo/name */}
        <Link
          href="#hero"
          fontSize="2xl"
          fontWeight="bold"
          _hover={{ transform: "scale(1.15)" }}
          transition="transform 0.3s"
        >
          Daniel Saenz
        </Link>

        {/* mobile menu button */}
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          variant="ghost"
        />

        {/* desktop links */}
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#about" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)" }}>
            About
          </Link>
          <Link href="#skills" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)" }}>
            Skills
          </Link>
          <Link href="#projects" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)" }}>
            Projects
          </Link>
        </HStack>
      </Flex>

      {/* mobile collapse menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg="teal.600"
          display={{ base: "block", md: "none" }}
        >
          <VStack spacing={0}>
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                w="100%"
                p={4}
                textAlign="center"
                _hover={{ bg: "teal.700" }}
                onClick={onToggle}
              >
                {item.label}
              </Link>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}
