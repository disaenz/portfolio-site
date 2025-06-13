import React from "react";
import NavBar   from "./components/NavBar.jsx";
import Hero     from "./components/Hero.jsx";
import About    from "./components/About.jsx";
import Skills   from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      

      {/* All your page content sits in a single <main> */}
      <main>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
