// src/components/Skills.jsx
import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Languages",
      skills: ["Node.js", "Python", "Java", "Golang"],
    },
    {
      title: "DevSecOps & CI/CD",
      skills: ["GitHub Actions", "Jenkins", "ArgoCD", "GitOps"],
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Pulumi"],
    },
    {
      title: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm"],
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "Oracle Cloud"],
    },
  ];

  return (
    <Box
      as="section"
      id="skills"
      w="100%"
      bg="gray.900"
      color="white"          
      py={16}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={8}>
        Skills
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="6xl" mx="auto">
        {skillCategories.map((cat) => (
          <Box key={cat.title}>
            <Heading as="h3" size="md" mb={4} color="white">
              {cat.title}
            </Heading>
            <Wrap spacing={3}>
              {cat.skills.map((skill) => (
                <WrapItem key={skill}>
                  <Tag size="md" variant="solid" colorScheme="teal">
                    {skill}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
