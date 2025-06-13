import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box id="about" as="section" w="100%" bg="white" py={16}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        About Me
      </Heading>
      <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
        I’m a Senior DevSecOps Engineer with a passion for building secure,
        scalable cloud infrastructure and delightful front-ends. I’ve worked
        extensively with AWS, Terraform, Docker, Kubernetes, and modern
        JavaScript frameworks. When I’m not coding, I enjoy gaming and
        exploring new DevOps tools.
      </Text>
    </Box>
  );
}
