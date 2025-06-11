import React from "react";
import { Container } from "@chakra-ui/react";
import NavBar   from "./components/NavBar.jsx";
import Hero     from "./components/Hero.jsx";
import About    from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      {/* Full-width header */}
      <NavBar />

      {/* Centered content wrapper */}
      <Container maxW="6xl" px={{ base: 4, md: 8 }} py={8}>
        <Hero />
        <About />
        <Projects />
      </Container>
    </>
  );
}
