import { IconButton, Tooltip } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import React from "react";

export default function ChatBubble({ onOpen }) {
  return (
    <Tooltip label="Chat with Daniel's AI" placement="left">
      <IconButton
        icon={<ChatIcon />}
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="2000"
        colorScheme="teal"
        borderRadius="full"
        boxSize="60px"
        fontSize="28px"
        shadow="lg"
        _hover={{ transform: "scale(1.08)", bg: "teal.400" }}
        onClick={onOpen}
      />
    </Tooltip>
  );
}