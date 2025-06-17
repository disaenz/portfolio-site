import React from "react";
import {
  Flex,
  Link,
  IconButton,
  Collapse,
  VStack,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        as="header"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        position={{ base: "relative", md: "sticky" }}
        top={{ base: "auto", md: 0 }}
        zIndex="1000"
        bg="teal.600"
        color="white"
        boxShadow="sm"
        align="center"
        justify="space-between"
        h="16"
      >
        <Link
          href="#hero"
          fontFamily="'Leckerli One', cursive"
          fontSize={{ base: "3xl", md: "3xl" ,lg: "4xl" }}
          fontWeight="bold"
          _hover={{ transform: "scale(1.15)", color: "white" }}
          transition="transform 0.3s, color 0.3s"
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
          color="white"
        />

        {/* desktop links */}
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            href="#about"
            px={4}
            py={3}
            rounded="md"
            _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}
          >
            About
          </Link>
          <Link
            href="#experience"
            px={4}
            py={3}
            rounded="md"
            _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}
          >
            Experience
          </Link>
          <Link
            href="#education"
            px={4}
            py={3}
            rounded="md"
            _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}
          >
            Education
          </Link>
          <Link
            href="#skills"
            px={4}
            py={3}
            rounded="md"
            _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            px={4}
            py={3}
            rounded="md"
            _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}
          >
            Projects
          </Link>
        </HStack>
      </Flex>

      {/* mobile collapse menu */}
      <Collapse in={isOpen} animateOpacity>
        <Flex
          as="nav"
          direction="column"
          bg="teal.600"
          display={{ base: "flex", md: "none" }}
        >
          <VStack spacing={0}>
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Education", href: "#education" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                w="100%"
                p={4}
                textAlign="center"
                transition="background 0.2s, transform 0.1s"
                _hover={{ bg: "teal.700", color: "white" }}
                _active={{ bg: "teal.800", transform: "scale(0.98)", color: "white" }}
                onClick={onToggle}
              >
                {item.label}
              </Link>
            ))}
          </VStack>
        </Flex>
      </Collapse>
    </>
  );
}
