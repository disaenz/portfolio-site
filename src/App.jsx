import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar   from "./components/NavBar.jsx";
import Hero     from "./components/Hero.jsx";
import About    from "./components/About.jsx";
import Skills   from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

export default function App() {
  return (
    <>
     <Box
      as="main"
      maxW="1200px"
      mx="auto"
      px={{ base: 0, md: "2rem" }}
      py={0}
    >
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </Box>
    </>
  );
}
