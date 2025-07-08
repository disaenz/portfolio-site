import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function MediaAndHighlights() {
  return (
    <Box
      as="section"
      id="media"
      w="100%"
      bg="gray.900"
      color="white"
      py={16}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={8}>
        Media and Highlights
      </Heading>

      <VStack spacing={10} align="center" maxW="3xl" mx="auto">
        <Box w="100%" maxW="640px" aspectRatio={16 / 9} borderRadius="lg" overflow="hidden" boxShadow="lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ljZLRukhIHQ?si=6DRklrtFUTFh_TzJ"
            title="Daniel Saenz Interview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </Box>
        <Text
        fontSize="md"
        color="gray.200"
        fontStyle="italic"
        textAlign="center"
        maxW="600px"
        >
        My interview on <Text as="span" fontWeight="bold" color="teal.300">“The Hackers' Corner” (EPCC)</Text>, where I share my DevOps journey, discuss cloud security, and offer advice for those interested in tech careers.
        </Text>
      </VStack>
    </Box>
  );
}