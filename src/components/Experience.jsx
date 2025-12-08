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
      "Lead secure software delivery initiatives for multiple enterprise applications, improving CI/CD pipelines using GitHub Actions with integrated Fortify, SonarQube, and Trivy controls.",
      "Partner with engineering and product teams to modernize agency applications and expand adoption of AI-driven capabilities.",
      "Drive improvements in operational reliability, container security, and automated deployment workflows across AWS and Azure platforms.",
      "Architect CI/CD optimizations that accelerate delivery cycles while strengthening governance, compliance, and SDLC quality gates.",
      "Built a multilingual translator app using C# and Azure Cognitive Services that supports real-time translation and language accessibility.",
      "Provide DevSecOps guidance and automation standards across teams to support scalability, productivity, and future modernization efforts."
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
      "Created portable CI/CD shell script libraries to standardize builds and reduce developer onboarding time.",
      "Migrated container build workflows from Docker to rootless Podman and Buildah, overcoming non-root image build challenges to align with updated security policies."
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
      "Developed enterprise web applications using SharePoint, AngularJS, C#, and Web Services to deliver robust client solutions.",
      "Facilitated weekly code reviews and client demos, gathering feedback and ensuring alignment with project objectives."
    ]
  },
  {
    company: "iDocket.com",
    title: "Software Engineer",
    date: "May 2012 – Jul 2016",
    bullets: [
      "Led design & development of web-based applications for county courts and correctional facilities using Java, ASP.NET (C#), and PHP, backed by MySQL & SQL Server.",
      "Built VBScript and batch-file monitoring scripts to automate daily data backups and system health checks, reducing manual effort by 80%.",
      "Authored SQL ETL processes to ingest and normalize data from TXT, XML, and CSV sources, ensuring data integrity and consistency.",
      "Provided 24/7 production support, rapidly diagnosing and resolving incidents to maintain >99.9% uptime.",
      "Collaborated with clients to gather requirements, translate business needs into technical specifications, and scope new feature roadmaps."
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
