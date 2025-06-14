import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar   from "./components/NavBar.jsx";
import Hero     from "./components/Hero.jsx";
import About    from "./components/About.jsx";
import Skills   from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
     <Box
      as="main"
      maxW="1200px"
      mx="auto"
      px={{ base: 0, md: "2rem" }}  /* edge-to-edge on mobile, desktop padding */
      pt={0}
      pb={8}
    >
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Box>
    </>
  );
}
