import React, { useEffect, useState } from "react";
import {
  Flex,
  Link,
  IconButton,
  Collapse,
  VStack,
  useDisclosure,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Only enable auto-hide for base and md screens (below lg)
  const isAutoHide = useBreakpointValue({ base: true, lg: false });

  // When menu is open, force NavBar to show
  useEffect(() => {
    if (isOpen) setShowNav(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isAutoHide) {
      setShowNav(true); // Always show nav on lg and up
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 80) {
        setShowNav(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      } else if (!isOpen) {
        setShowNav(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isAutoHide, isOpen]);

  // For mobile/tablet, use fixed positioning so it can hide/show
  // For desktop, sticky at the top
  const navPosition =
    isAutoHide
      ? {
          position: "fixed",
          top: showNav || isOpen ? 0 : "-80px",
          transition: "top 0.3s",
          w: "100%",
          zIndex: 1000,
        }
      : {
          position: "sticky",
          top: 0,
          w: "100%",
          zIndex: 1000,
        };

  return (
    <>
      <Box {...navPosition}>
        <Flex
          as="header"
          maxW="1200px"
          mx="auto"
          px={{ base: 4, lg: 8 }}
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
            fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            _hover={{ transform: "scale(1.15)", color: "white" }}
            transition="transform 0.3s, color 0.3s"
          >
            Daniel Saenz
          </Link>

          {/* mobile menu button */}
          <IconButton
            display={{ base: "block", lg: "none" }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            color="white"
            zIndex={1100}
          />

          {/* desktop links */}
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", lg: "flex" }}
          >
            <Link href="#about" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}>About</Link>
            <Link href="#experience" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}>Experience</Link>
            <Link href="#education" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}>Education</Link>
            <Link href="#skills" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}>Skills</Link>
            <Link href="#projects" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}>Projects</Link>
            <Link href="#media" px={4} py={3} rounded="md" _hover={{ bg: "teal.700", transform: "translateY(-2px)", color: "white" }}>Media</Link>
          </HStack>
        </Flex>

        {/* mobile collapse menu INSIDE the fixed nav */}
        <Collapse in={isOpen} animateOpacity>
          <Flex
            as="nav"
            direction="column"
            bg="teal.600"
            display={{ base: "flex", lg: "none" }}
            w="100vw"
            position="absolute"
            left={0}
            zIndex={1099}
          >
            <VStack spacing={0}>
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Education", href: "#education" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Media", href: "#media" },
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
      </Box>
    </>
  );
}