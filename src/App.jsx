import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import MediaAndHighlights from "./components/MediaAndHighlights.jsx";
import ChatBubble from "./components/ChatBubble.jsx";
import ChatModal from "./components/ChatModal.jsx";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heroVisible, setHeroVisible] = React.useState(true);

  React.useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Box bg="#1b212d" color="white" minH="100vh">
      <Box
        as="main"
        maxW="1200px"
        mx="auto"
        px={{ base: 0, lg: "2rem" }}
        py={0}
      >
        <NavBar />
        {/* Pass onOpen to Hero button */}
        <Hero onOpenChat={onOpen} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <MediaAndHighlights />
        <Footer />
      </Box>

      {/* Floating Bubble only when Hero not visible */}
      {!heroVisible && <ChatBubble onOpen={onOpen} />}

      {/* Global Modal */}
      <ChatModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}