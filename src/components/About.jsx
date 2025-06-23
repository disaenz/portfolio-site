import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function About() {
  return (
    <Box as="section" id="about" w="100%" bg="gray.50" py={16} px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={6}>
        About Me
      </Heading>
      <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto" mb={4}>
        I’m a Software Engineer & DevSecOps Engineer with over 10 years of
        experience. I’ve contributed to both client-side and server-side projects, 
        but I truly excel at crafting and operating scalable back-end systems.
      </Text>
      <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto" mb={4}>
        I design and maintain CI/CD pipelines that automate builds, perform
        static code analysis and unit testing, containerize applications,
        integrate vulnerability scanning, and deliver reliable, successful
        deployments every time.
      </Text>
      <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto" mb={4}>
        Over the years I’ve developed full-scale applications and automated
        deployments for multiple apps. I also led a proof-of-concept to
        migrate on-premises infrastructure to AWS, Azure, Google Cloud, and
        Oracle Cloud, ensuring minimal downtime and zero data loss.
      </Text>
      <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto" mb={4}>
        Technology changes constantly. To keep up with technology, 
        I quickly acquire proficiency in new languages and frameworks.
      </Text>
      <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto" mb={4}>
        Beyond work, I love watching baseball and soccer. Rooting for the Dodgers 
        at Dodger Stadium or watching a high-stakes soccer game, especially if Mexico 
        or the US is playing. I also cherish family adventures, especially visits to Disneyland 
        and discovering new corners around the world.
      </Text>
      <Box mt={8} textAlign="center">
        <Link
          href="https://www.dropbox.com/scl/fi/vr6msczyp321femehlrcg/Daniel-Saenz-Resume.pdf?rlkey=y2zh8uhylud8zgp6dt5jiund6&st=ai7knzyg&dl=0"
          isExternal
          color="teal.500"
          fontWeight="bold"
        >
          Download My Resume
        </Link>
      </Box>
    </Box>
  );
}
