import React from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  VStack
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

// Education and certifications data
const education = [
  {
    institution: "University of Texas at El Paso",
    degree: "Master of Science in Software Engineering",
    date: "May 2018",
  },
  {
    institution: "University of Texas at El Paso",
    degree: "Bachelor of Science in Computer Science",
    date: "May 2012",
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
  }
];

export default function Education() {
  return (
    <Box
      as="section"
      id="education"
      w="100%"
      bg="white"
      color="gray.800"
      py={16}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={8}>
        Education & Certifications
      </Heading>

      <VStack spacing={12} maxW="4xl" mx="auto" align="stretch">
        {/* Education List */}
        <Box>
          <Heading as="h3" size="lg" mb={4} color="gray.700">
            Education
          </Heading>
          <List spacing={3}>
            {education.map((edu, idx) => (
              <ListItem key={idx}>
                <ListIcon as={CheckCircleIcon} color="teal.300" />
                <Text as="span" fontWeight="bold">
                  {edu.degree}
                </Text>{" "}
                at {edu.institution} ({edu.date})
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Certifications List */}
        <Box>
          <Heading as="h3" size="lg" mb={4} color="gray.700">
            Certifications
          </Heading>
          <List spacing={3}>
            {certifications.map((cert, idx) => (
              <ListItem key={idx}>
                <ListIcon as={CheckCircleIcon} color="teal.300" />
                <Text as="span" fontWeight="bold">
                  {cert.name}
                </Text>{" "}- {cert.issuer} ({cert.date})
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
}
