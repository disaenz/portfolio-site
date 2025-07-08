import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
// Import your slider/carousel/gallery/video components here

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
        {/* Example: Event photo slider/gallery */}
        {/* <EventGallery images={...}/> */}

        {/* Example: Youtube/video section */}
        {/* <InterviewSection videoUrl="https://youtube.com/..." /> */}

        <Text fontSize="md" color="gray.200" textAlign="center">
          Photos and videos from professional events, presentations, and highlights of my journey.
        </Text>
        {/* Add your own components/content here */}
      </VStack>
    </Box>
  );
}