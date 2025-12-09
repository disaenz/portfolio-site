import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Box,
  Text,
  Stack,
  Button,
  Textarea,
  Spinner,
  useToast,
  Link,
} from "@chakra-ui/react";

// API base URL fallback
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

// Reusable Markdown link with proper prop-types
function MarkdownLink({ href, children }) {
  return (
    <Link href={href} isExternal color="teal.200">
      {children}
    </Link>
  );
}

MarkdownLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default function ChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [shouldScroll, setShouldScroll] = React.useState(false);
  const bottomRef = React.useRef(null);
  const toast = useToast();

  const MAX_HISTORY = 6;

  // Initialize only once to preserve chat when closing
  React.useEffect(() => {
    setMessages([
      {
        id: "welcome",
        from: "ai",
        text:
          "Hi 👋 / Hola 👋\n\n" +
          "I’m Daniel’s AI — Ask me about my work experience, education, or technical skills.\n\n" +
          "💬 **Hablo Español** — Pregúntame con confianza dentro de esos temas.",
      },
    ]);
  }, []);

  // Auto-scroll only when user sends a message
  React.useEffect(() => {
    if (shouldScroll) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [messages, shouldScroll]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      from: "user",
      text: trimmed,
    };

    // Prepare history for backend (exclude welcome message)
    const historyPayload = messages
      .filter((m) => m.id !== "welcome")
      .slice(-MAX_HISTORY)
      .map((m) => ({
        role: m.from === "ai" ? "assistant" : "user",
        content: m.text,
      }));

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setShouldScroll(true);

    try {
      const res = await axios.post(`${API_BASE}/api/ai/chat`, {
        message: trimmed,
        history: historyPayload,
      });

      const aiMsg = {
        id: `ai-${Date.now()}`,
        from: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMsg]);
      // No auto-scroll here so user can continue reading where they are
    } catch (error) {
      console.error("Chat error:", error);

      toast({
        title: "Connection issue",
        description: "Please try again.",
        status: "error",
        duration: 3500,
        isClosable: true,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-error-${Date.now()}`,
          from: "ai",
          text:
            "I’m sorry — can you send that again? / Lo siento — ¿puedes enviar eso otra vez?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "2xl" }}
      isCentered
    >
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent
        bg="gray.900"
        color="white"
        mx={{ base: 2, md: 0 }}
        height={{ base: "100vh", md: "78vh" }}
        maxH={{ base: "100vh", md: "78vh" }}
        display="flex"
        flexDirection="column"
        overflow="hidden"
      >
        <ModalHeader borderBottom="1px solid" borderColor="gray.700">
          <Text fontSize="lg" fontWeight="bold">
            Ask Daniel&apos;s AI Assistant
          </Text>
          <Text fontSize="xs" color="gray.400" mt={1}>
            Bilingual AI · English & Español ✨
          </Text>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody
          display="flex"
          flexDirection="column"
          pt={4}
          pb={2}
          overflow="hidden"
          flex="1"
        >
          <Box
            flex="1"
            overflowY="auto"
            mb={4}
            pr={2}
            borderWidth="1px"
            borderColor="gray.700"
            borderRadius="lg"
            p={3}
            bg="gray.800"
          >
            <Stack spacing={3}>
              {messages.map((msg) => (
                <Box
                  key={msg.id}
                  alignSelf={msg.from === "user" ? "flex-end" : "flex-start"}
                  maxW="95%"
                  bg={msg.from === "user" ? "teal.700" : "gray.700"}
                  borderRadius="lg"
                  p={3}
                >
                  <Text
                    fontSize="xs"
                    mb={1}
                    color="gray.300"
                    fontWeight="semibold"
                  >
                    {msg.from === "user" ? "You" : "Daniel (AI)"}
                  </Text>

                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ href, children }) => (
                        <MarkdownLink href={href}>{children}</MarkdownLink>
                      ),
                      li: ({ children }) => (
                        <li style={{ marginLeft: "18px" }}>{children}</li>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </Box>
              ))}

              {isLoading && (
                <Box
                  alignSelf="flex-start"
                  bg="gray.700"
                  borderRadius="lg"
                  p={3}
                  display="flex"
                  gap={2}
                >
                  <Spinner size="sm" />
                  <Text fontSize="sm" color="gray.200">
                    Thinking…
                  </Text>
                </Box>
              )}

              <div ref={bottomRef} />
            </Stack>
          </Box>

          <Textarea
            placeholder="Ask me anything… / Pregúntame lo que quieras…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            resize="none"
            bg="gray.800"
            borderColor="gray.700"
            _focus={{ borderColor: "teal.300" }}
          />
        </ModalBody>

        <ModalFooter borderTop="1px solid" borderColor="gray.700" gap={3}>
          <Text fontSize="xs" color="gray.500" flex="1">
            I can only talk about my professional background — not personal info.
          </Text>
          <Button
            colorScheme="teal"
            onClick={handleSend}
            isLoading={isLoading}
            loadingText="Sending"
            isDisabled={!input.trim()}
          >
            Send
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ChatModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};