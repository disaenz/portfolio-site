import React from "react";
import {
  Box, Heading, SimpleGrid, Image, Text, Link
} from "@chakra-ui/react";

const projects = [
  {
    title: "Terraform S3 Demo",
    description: "IaC pipeline with GitHub Actions",
    link: "#",
    img: "https://via.placeholder.com/400x300"
  },
  {
    title: "React Portfolio",
    description: "This site, built with React + Chakra UI",
    link: "#",
    img: "https://via.placeholder.com/400x300"
  }
];

export default function Projects() {
  return (
    <Box id="projects" as="section" w="100%" bg="gray.50" py={16}>
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={6}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} px={{ base: 4, md: 8 }}>
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
            <Image src={p.img} alt={p.title} objectFit="cover" h="200px" w="100%" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                {p.title}
              </Heading>
              <Text mb={4} color="gray.600">
                {p.description}
              </Text>
              <Link href={p.link} color="teal.500" fontWeight="bold">
                View Demo
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
