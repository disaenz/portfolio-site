import React from "react";
import {
  Flex, Box, Heading, Text, Button, Avatar, Stack, Link
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      as="section"
      w="100%"
      minH="100vh"
      bg="gray.900"
      color="white"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      py={16}
    >
      {/* Text side */}
      <Box flex="1" textAlign={{ base: "center", md: "left" }} mt={{ base: 8, md: 0 }}>
        <Heading as="h1" size="2xl" mb={4}>
          Hi There,
          <br />
          I’m <Box as="span" color="teal.300">Daniel</Box> 👋
        </Heading>
        <Text fontSize="lg" mb={6}>
          I build cloud-native apps & beautiful front-ends. Welcome to my corner of the web!
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          See my work
        </Button>
        <Stack direction="row" spacing={4} justify={{ base: "center", md: "flex-start" }} mt={6}>
          <Link href="#" isExternal>GitHub</Link>
          <Link href="#" isExternal>LinkedIn</Link>
          <Link href="#" isExternal>Twitter</Link>
        </Stack>
      </Box>

      {/* Avatar side */}
      <Box flex="1" display="flex" justifyContent="center">
        <Avatar
          size="2xl"
          src="https://ui-avatars.com/api/?name=Daniel+Saenz&background=2D3748&color=ffffff"
          borderWidth="4px"
          borderColor="teal.300"
        />
      </Box>
    </Flex>
  );
}
