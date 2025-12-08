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
import grantApiImage from "../assets/microservices.png";
import reactImage from "../assets/react.png";
import devsecopsImage from "../assets/devsecops.png";

const projects = [
  {
    title: "Infrastructure as Code",
    description: "Reliable, scalable AWS infrastructure managed via Terraform and deployed automatically with GitHub Actions.",
    fontSize: "sm",
    repoLink: "https://github.com/disaenz/aws-iac",
    img: iacImage,
    pipelineBadge:
      "https://github.com/disaenz/aws-iac/actions/workflows/iac-deploy.yml/badge.svg",
    pipelineLink: "https://github.com/disaenz/aws-iac/actions"
  },
  {
    title: "React Portfolio",
    description: "This site, created with React and Chakra UI, delivers a responsive, accessible, and visually engaging portfolio.",
    fontSize: "sm",
    repoLink: "https://github.com/disaenz/portfolio-site",
    img: chakraImage,
    pipelineBadge:
      "https://github.com/disaenz/portfolio-site/actions/workflows/deploy.yml/badge.svg",
    pipelineLink: "https://github.com/disaenz/portfolio-site/actions"
  },
  {
  title: "Portfolio API (Python Serverless)",
  description:
    "A scalable serverless API built with FastAPI and Python, powering portfolio features like the AI Résumé Assistant and grant data services. Fully automated CI/CD pipeline, security scanning, and monitoring — deployed to AWS Lambda through API Gateway.",
  fontSize: "sm",
  repoLink: "https://github.com/disaenz/portfolio-api",
  img: grantApiImage,
  pipelineBadge:
    "https://github.com/disaenz/portfolio-api/actions/workflows/lambda-deploy.yml/badge.svg",
  pipelineLink: "https://github.com/disaenz/portfolio-api/actions",
  demoLink: "https://api.daniel-saenz.com/docs"
},
{
  title: "React Frontend App",
  description:
    "A serverless React frontend for grant management, built with modern React. Integrates with the Python microservice API. Automated builds, lint checks, and deployments to AWS with CI/CD.",
  fontSize: "sm",
  repoLink: "https://github.com/disaenz/grant-app",
  img: reactImage,
  pipelineBadge:
    "https://github.com/disaenz/grant-app/actions/workflows/deploy.yml/badge.svg",
  pipelineLink: "https://github.com/disaenz/grant-app/actions",
  demoLink: "https://grants.daniel-saenz.com/"
},
{
    title: "DevSecOps PoC (EPCC)",
    description:
      "End-to-end DevSecOps demo with CI/CD, Docker, Jenkins, and Kubernetes, built for El Paso Community College. Presented live for students and faculty as an educational proof of concept.",
    fontSize: "sm",
    repoLink: "https://github.com/disaenz/hello_world_devsecops",
    img: devsecopsImage
  }
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
              <Heading as="h3" size="sm" mb={2} color="teal.600" mt={4}>
                {p.title}
              </Heading>
              <Text mb={4} color="gray.600" fontSize={p.fontSize} fontWeight="medium">
                {p.description}
              </Text>
            
            {p.pipelineBadge && p.pipelineLink && (
            <Link href={p.pipelineLink} isExternal>
              <Image
                src={p.pipelineBadge}
                alt={`${p.title} pipeline status`}
                h="20px"
              />
            </Link>
          )}
            <HStack mt={4} spacing={2} align="center">
              {p.demoLink && (
                <Link
                  href={p.demoLink}
                  isExternal
                  color="teal.500"
                  fontWeight="bold"
                  fontSize="sm"
                >
                  View Demo
                </Link>
              )}
              {p.pipelineLink && (
              <Link
                href={p.pipelineLink}
                isExternal
                color="teal.500"
                fontWeight="bold"
                fontSize="sm"
              >
                View Pipeline
              </Link>
            )}
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