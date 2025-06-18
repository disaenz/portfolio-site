// src/components/Projects.jsx

import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";

import iacImage from "../assets/infra.png";
import chakraImage from "../assets/chakra.png";

const projects = [
  {
    title: "Terraform Demo",
    description: "IaC pipeline with GitHub Actions",
    fontSize: "sm",
    repoLink: "https://github.com/disaenz/aws-iac",
    img: iacImage,
    pipelineBadge:
      "https://github.com/disaenz/aws-iac/actions/workflows/iac-deploy.yml/badge.svg",
    pipelineLink: "https://github.com/disaenz/aws-iac/actions",
  },
  {
    title: "React Portfolio",
    description: "This site, built with React + Chakra UI",
    fontSize: "sm",
    repoLink: "https://github.com/disaenz/portfolio-site",
    img: chakraImage,
    pipelineBadge:
      "https://github.com/disaenz/portfolio-site/actions/workflows/deploy.yml/badge.svg",
    pipelineLink: "https://github.com/disaenz/portfolio-site/actions",
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      as="section"
      w="100%"
      bg="gray.50"
      py={16}
      px={{ base: 4, md: 8 }}
    >
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
        px={{ base: 0, md: 8 }}
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
            {/* Card image → repo */}
            <Link href={p.repoLink} isExternal _hover={{ textDecoration: "none" }}>
              <Image
                src={p.img}
                alt={p.title}
                objectFit="cover"
                h="200px"
                w="100%"
                cursor="pointer"
              />
            </Link>

            <Box pt={0} px={6} pb={6}>
              <Heading as="h3" size="md" mb={2}>
                {p.title}
              </Heading>
              <Text mb={4} color="gray.600" fontSize={p.fontSize} fontWeight="medium">
                {p.description}
              </Text>
            
            <Link href={p.pipelineLink} isExternal>
              <Image
                src={p.pipelineBadge}
                alt={`${p.title} pipeline status`}
                h="20px"
              />
            </Link>
            <HStack mt={4} spacing={2} align="center">
              <Link
                  href={p.pipelineLink}
                  isExternal
                  color="teal.500"
                  fontWeight="bold"
                  fontSize="sm"
                >
                  View Pipeline
                </Link>
                {/* Learn More */}
              <Link
                href={p.repoLink}
                color="teal.500"
                fontWeight="bold"
                fontSize="sm"
                isExternal
              >
                Learn More
              </Link>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}