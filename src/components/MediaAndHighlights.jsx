import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  IconButton,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const images = [
  {
    url: "https://www.dropbox.com/scl/fi/lhoork9gsv8xte8hwja5u/IMG_5271.jpeg?rlkey=azqb6sr6ja97hrr72lbknzp4d&st=jz2f5jqu&raw=1",
    title: "Copilot Workshop in Arlington VA",
    description: "Attended a hands-on Copilot workshop at Microsoft HQ in Arlington, VA, exploring the latest in Azure Copilot and GPT-powered AI development."
  },
  {
    url: "https://www.dropbox.com/scl/fi/oenw2qobz7du4iwpylps4/IMG_5292.jpeg?rlkey=muqa9lie8i3wqx50eo8m6mhlm&st=9a41b5t6&raw=1",
    title: "GPT-Enabled Copilot Robot",
    description: "At the Copilot workshop, I tried out this GPT-enabled demo robot that holds real-time conversations—just like talking to a person! It’s powered by Microsoft Copilot’s AI and was truly impressive."
  },
  {
    url: "https://www.dropbox.com/scl/fi/bl2ywc5mhjnlir834byow/IMG_6279.jpeg?rlkey=v3gkllcmknh1sg67ton4z7u2q&st=wakb45nn&raw=1",
    title: "Microsoft Interactive Room",
    description: "Celebrating the completion of a collaborative Copilot workshop at Microsoft HQ, joined by talented peers. The Capitol Building makes a great backdrop for a successful day of learning and innovation."
  }
];

const IMAGES_PER_PAGE = 3;

export default function MediaAndHighlights() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null); 

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  // Images currently shown on the grid
  const pagedImages = images.slice(
    page * IMAGES_PER_PAGE,
    page * IMAGES_PER_PAGE + IMAGES_PER_PAGE
  );

  // Paging arrows
  const goPrev = () => setPage((prev) => Math.max(0, prev - 1));
  const goNext = () => setPage((prev) => Math.min(totalPages - 1, prev + 1));

  // Modal navigation
  const openModal = (idx) => setSelected(idx);
  const closeModal = () => setSelected(null);
  const prevImg = () =>
    setSelected((selected) => (selected - 1 + images.length) % images.length);
  const nextImg = () =>
    setSelected((selected) => (selected + 1) % images.length);

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
        {/* --- Gallery Grid --- */}
        <Box w="100%" maxW="800px">
          <HStack spacing={2} justify="center" mb={2}>
            {totalPages > 1 && (
              <IconButton
                icon={<ArrowBackIcon />}
                aria-label="Previous"
                onClick={goPrev}
                isDisabled={page === 0}
                variant="ghost"
                size="md"
                colorScheme="teal"
              />
            )}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} flex="1">
              {pagedImages.map((img, idx) => {
                const globalIdx = page * IMAGES_PER_PAGE + idx;
                return (
                  <Box
                    as="button"
                    key={globalIdx}
                    bg="gray.800"
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="md"
                    textAlign="center"
                    _hover={{ boxShadow: "lg", transform: "scale(1.03)" }}
                    transition="all 0.15s"
                    onClick={() => openModal(globalIdx)}
                  >
                    <Image
                      src={img.url}
                      alt={img.title}
                      objectFit="cover"
                      w="100%"
                      h="180px"
                    />
                    <Text mt={2} mb={2} color="teal.300" fontSize="sm" px={2}>
                      {img.title}
                    </Text>
                  </Box>
                );
              })}
            </SimpleGrid>
            {totalPages > 1 && (
              <IconButton
                icon={<ArrowForwardIcon />}
                aria-label="Next"
                onClick={goNext}
                isDisabled={page === totalPages - 1}
                variant="ghost"
                size="md"
                colorScheme="teal"
              />
            )}
          </HStack>
          {totalPages > 1 && (
            <Text color="gray.400" textAlign="center" fontSize="xs">
              Page {page + 1} of {totalPages}
            </Text>
          )}
        </Box>

        {/* Lightbox Modal */}
        <Modal isOpen={selected !== null} onClose={closeModal} isCentered size="xl">
          <ModalOverlay />
          <ModalContent bg="gray.900">
            <ModalCloseButton color="white" />
            <ModalBody p={2} display="flex" flexDirection="column" alignItems="center">
              {selected !== null && (
                <>
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton
                      aria-label="Prev"
                      icon={<ArrowBackIcon />}
                      onClick={prevImg}
                      variant="ghost"
                      colorScheme="teal"
                      mr={2}
                      disabled={images.length <= 1}
                    />
                    <Image
                      src={images[selected].url}
                      alt={images[selected].title}
                      maxH="60vh"
                      maxW="80vw"
                      borderRadius="lg"
                      objectFit="contain"
                      bg="gray.800"
                      shadow="lg"
                    />
                    <IconButton
                      aria-label="Next"
                      icon={<ArrowForwardIcon />}
                      onClick={nextImg}
                      variant="ghost"
                      colorScheme="teal"
                      ml={2}
                      disabled={images.length <= 1}
                    />
                  </Box>
                  <Text mt={1} color="gray.200" fontSize="sm" textAlign="center">
                    {images[selected].description}
                  </Text>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* ---- Interview Video ---- */}
        <Box w="100%" maxW="640px" aspectRatio={16 / 9} borderRadius="lg" overflow="hidden" boxShadow="lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ljZLRukhIHQ?si=6DRklrtFUTFh_TzJ"
            title="Daniel Saenz Interview"
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
          My interview on{" "}
          <Text as="span" fontWeight="bold" color="teal.300">
            “The Hackers&apos; Corner”
          </Text>{" "}
          at EPCC, where I share my DevOps journey, discuss cloud security, and offer advice for those interested in tech careers.
        </Text>
      </VStack>
    </Box>
  );
}