import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Badge,
  VStack,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

// Extracted from resume
const experiences = [
  {
    company: "AmeriCorps (formerly CNCS – Federal Agency)",
    title: "Senior DevSecOps Engineer",
    date: "Jun 2024 – Present",
    bullets: [
      "Built and maintained secure CI/CD pipelines using GitHub Actions, integrating Fortify, SonarQube, and Trivy to ensure continuous code quality and security.",
      "Automated deployment, testing, and vulnerability scans on pull requests, accelerating delivery cycles and increasing release confidence.",
      "Containerized applications with Docker, standardizing deployment workflows across local and cloud environments.",
      "Designed and built a multilingual translator app using C# and Azure Cognitive Services, enabling real-time translation and language detection via RESTful APIs."
    ]
  },
  {
    company: "Administrative Office of the U.S. Courts (Guidehouse)",
    title: "Senior DevSecOps Engineer",
    date: "Jun 2020 – May 2024",
    bullets: [
      "Automated CI/CD pipelines with Jenkins, embedding security and compliance checks throughout the SDLC.",
      "Managed container deployments using Docker and Kubernetes on Red Hat OpenShift, leveraging GitOps workflows with ArgoCD and GitLab CI to streamline delivery across environments.",
      "Led a cloud migration proof of concept, using Terraform to provision and manage infrastructure across AWS, Azure, GCP, and OCI.",
      "Supported blue/green deployment strategies to enable minimal downtime and fast rollback during production releases.",
      "Created portable CI/CD shell script libraries to standardize builds and reduce developer onboarding time."
    ]
  },
  {
    company: "Platinum Software Labs",
    title: "Lead Software Engineer (Cloud Development)",
    date: "Feb 2019 – May 2020",
    bullets: [
      "Designed and deployed microservices using .NET Core, Entity Framework, and Docker within Kubernetes clusters hosted on Azure and AWS.",
      "Led implementation of automated unit testing and peer code review processes, improving code quality and team efficiency."
    ]
  },
  {
    company: "Drug Enforcement Administration (Kiliuda Consulting)",
    title: "Software Engineer",
    date: "Oct 2017 – Aug 2019",
    bullets: [
      "Developed secure, scalable APIs and backend services using .NET, React, and React Native.",
      "Oversaw deployment pipelines and maintained synchronization across staging and production environments, minimizing downtime."
    ]
  },
  {
    company: "Lockheed Martin / Leidos (UTEP)",
    title: "Software Engineer",
    date: "Aug 2016 – Sep 2017",
    bullets: [
      "Created and maintained internal reporting tools using C#, SharePoint, and AngularJS, integrating Web Services for dynamic data access."
    ]
  },
  {
    company: "IDOCKET.COM",
    title: "Software Engineer",
    date: "May 2012 – Jul 2016",
    bullets: [
      "Maintained and extended web systems used by law enforcement agencies and county offices, leveraging Java, C#, and PHP."
    ]
  }
];

export default function Experience() {
  return (
    <Box
      as="section"
      id="experience"
      w="100%"
      bg="gray.900"
      color="white"
      py={16}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={8}>
        Experience
      </Heading>

      <VStack spacing={8} maxW="6xl" mx="auto" align="stretch">
        {experiences.map((exp, idx) => (
          <Box key={idx} p={6} bg="gray.800" rounded="md" shadow="md">
            <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="flex-start">
              <Box>
                <Heading as="h3" size="md">{exp.title}</Heading>
                <Text color="gray.400">{exp.company}</Text>
              </Box>
              <Badge colorScheme="teal" alignSelf="start">{exp.date}</Badge>
            </Stack>
            <List spacing={2} mt={4}>
              {exp.bullets.map((b, i) => (
                <ListItem key={i}>
                  <ListIcon as={CheckCircleIcon} color="teal.300" />
                  {b}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
