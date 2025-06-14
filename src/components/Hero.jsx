import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function Hero() {
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
      py={16}
      px={{ base: 0, md: 20 }}
    >
      {/* Text side */}
      <Box flex="1" textAlign={{ base: "center", md: "left" }} mt={{ base: 8, md: 0 }}>
        <Heading as="h1" size="2xl" mb={4}>
          Hi There,
          <br />
          I’m <Box as="span" color="teal.300">Daniel</Box> 👋
        </Heading>
        <Text fontSize="lg" mb={6}>
          Glad you’re here—my specialty is dependable apps backed by secure, hands-off delivery.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          See my work
        </Button>
        <Stack direction="row" spacing={4} justify={{ base: "center", md: "flex-start" }} mt={6}>
          <Link href="https://github.com/disaenz" isExternal fontWeight="bold">GitHub</Link>
          <Link href="https://www.linkedin.com/in/daniel-saenz-devops" isExternal fontWeight="bold">LinkedIn</Link>
        </Stack>

        {/* Deployment disclaimer positioned just below the links */}
        <Text
          fontSize="xs"  
          color="gray.400"
          textAlign={{ base: "center", md: "left" }}
          mt={4}
          mb={0}
        >
          Built with React & Chakra UI • CI/CD via GitHub Actions • Deployed on AWS
        </Text>
      </Box>

      {/* Avatar side */}
      <Box flex="1" display="flex" justifyContent="center">
        <Avatar
          boxSize={{ base: "200px", md: "300px" }}
          size="2xl"
          src="https://ui-avatars.com/api/?name=Daniel+Saenz&background=2D3748&color=ffffff"
          borderWidth="4px"
          borderColor="teal.300"
          ml={{ base: 0, md: 16 }}
        />
      </Box>
    </Flex>
  );
}
