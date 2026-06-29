import React from "react";
import PropTypes from "prop-types";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Link,
  Show,
  Hide,
} from "@chakra-ui/react";

import portrait from "../assets/portrait.png";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Hero({ onOpenChat }) {
  return (
    <Flex
      as="section"
      id="hero"
      w="100%"
      minH="100vh"
      bg="gray.900"
      color="white"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      justify="center"
      py={16}
      px={{ base: 4, md: 20 }}
    >
      {/* Text side */}
      <ScrollReveal
        flex="1"
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 8, md: 0 }}
        direction="left"
        duration={0.8}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Hi There,
          <br />
          I&apos;m{" "}
          <Box as="span" color="teal.300">
            Daniel
          </Box>{" "}
          👋
        </Heading>

        <Text fontSize="lg" mb={6} px={{ base: 2, md: 0 }}>
          Ask me anything about my experience, skills, or career. I&apos;m here to help!
        </Text>

        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            See my work
          </Button>

          <Button
            variant="outline"
            size="lg"
            borderColor="teal.300"
            color="teal.300"
            onClick={onOpenChat}
          >
            💬 Ask the AI
          </Button>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          justify={{ base: "center", md: "flex-start" }}
          mt={6}
        >
          <Link href="https://github.com/disaenz" isExternal fontWeight="bold">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/daniel-saenz-devops"
            isExternal
            fontWeight="bold"
          >
            LinkedIn
          </Link>
        </Stack>

        <Text fontSize="xs" mt={3}>
          <Box as="span" color="teal.300" fontWeight="bold">
            Email:
          </Box>{" "}
          <Link href="mailto:disaenz2@gmail.com">disaenz2@gmail.com</Link>
        </Text>

        <Hide below="md">
          <Text fontSize="xs" color="gray.400" textAlign="left" mt={4}>
            Built with React &amp; Chakra UI • CI/CD via GitHub Actions • Deployed on AWS
          </Text>
        </Hide>

        <Show below="md">
          <Stack as="footer" spacing={1} fontSize="xs" color="gray.400" textAlign="center" mt={4}>
            <Box>Built with React &amp; Chakra UI</Box>
            <Box>CI/CD via GitHub Actions</Box>
            <Box>Deployed on AWS</Box>
          </Stack>
        </Show>
      </ScrollReveal>

      {/* Portrait */}
      <ScrollReveal
        flex="1"
        display="flex"
        justifyContent="center"
        mt={{ base: 20, md: 0 }}
        direction="right"
        delay={0.12}
        duration={0.8}
      >
        <Image
          src={portrait}
          alt="Portrait"
          boxSize={{ base: "250px", md: "300px" }}
          objectFit="cover"
          borderRadius="full"
          border="4px solid"
          borderColor="teal.300"
          ml={{ base: 0, md: 16 }}
        />
      </ScrollReveal>
    </Flex>
  );
}

Hero.propTypes = {
  onOpenChat: PropTypes.func.isRequired,
};
