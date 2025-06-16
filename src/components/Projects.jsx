// src/components/Projects.jsx

import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

import iacImage from "../assets/infra.png";
import chakraImage from "../assets/chakra.png";

const projects = [
  {
    title: "Terraform Demo",
    description: "IaC pipeline with GitHub Actions",
    link: "https://github.com/disaenz/aws-iac",
    img: iacImage,
  },
  {
    title: "React Portfolio",
    description: "This site, built with React + Chakra UI",
    link: "#",
    img: chakraImage,
  },
];

export default function Projects() {
  return (
    <Box id="projects" as="section" w="100%" bg="gray.50" py={16}>
      <Heading
        as="h2"
        size="xl"
        color="teal.300"
        textAlign="center"
        mb={6}
      >
        Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        px={{ base: 4, md: 8 }}
      >
        {projects.map((p) => (
          <Box
            key={p.title}
            bg="white"
            rounded="lg"
            overflow="hidden"
            shadow="md"
            _hover={{ shadow: "lg" }}
            transition="box-shadow 0.2s"
          >
            {/* Wrap the image itself in a Link */}
            <Link href={p.link} isExternal _hover={{ textDecoration: "none" }}>
              <Image
                src={p.img}
                alt={p.title}
                objectFit="cover"
                h="200px"
                w="100%"
                cursor="pointer"
              />
            </Link>

            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                {p.title}
              </Heading>
              <Text mb={4} color="gray.600" fontSize="md" fontWeight="medium">
                {p.description}
              </Text>
              <Link
                href={p.link}
                color="teal.500"
                fontWeight="bold"
                fontSize="md"
                isExternal
              >
                Learn More
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
