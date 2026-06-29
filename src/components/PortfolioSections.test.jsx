import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Hero from "./Hero.jsx";
import MediaAndHighlights from "./MediaAndHighlights.jsx";
import NavBar from "./NavBar.jsx";
import Projects from "./Projects.jsx";
import ScrollProgress from "./ScrollProgress.jsx";
import Skills from "./Skills.jsx";
import { renderWithChakra } from "../test/renderWithChakra.jsx";

describe("portfolio sections", () => {
  it("renders the hero and opens chat from the CTA", async () => {
    const user = userEvent.setup();
    const onOpenChat = vi.fn();

    renderWithChakra(<Hero onOpenChat={onOpenChat} />);

    expect(screen.getByRole("heading", { name: /hi there/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /portrait/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /ask the ai/i }));

    expect(onOpenChat).toHaveBeenCalledTimes(1);
  });

  it("renders the about, experience, education, and skills sections", () => {
    renderWithChakra(
      <>
        <About />
        <Experience />
        <Education />
        <Skills />
      </>
    );

    expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByText(/software engineer & devsecops engineer/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
    expect(screen.getAllByText(/senior devsecops engineer/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /education & certifications/i })).toBeInTheDocument();
    expect(screen.getByText(/aws certified cloud practitioner/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByText("GitHub Actions")).toBeInTheDocument();
  });

  it("renders projects with the updated CD badge link", () => {
    renderWithChakra(<Projects />);

    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /react portfolio/i })).toBeInTheDocument();
    expect(screen.getByAltText(/react portfolio pipeline status/i)).toHaveAttribute(
      "src",
      expect.stringContaining("/actions/workflows/cd.yml/badge.svg")
    );
  });

  it("opens and navigates the media lightbox", async () => {
    const user = userEvent.setup();

    renderWithChakra(<MediaAndHighlights />);

    expect(screen.getByRole("heading", { name: /media and highlights/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /copilot workshop in arlington va/i }));

    expect(screen.getByText(/july 25, 2024/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /next/i }));

    expect(screen.getByText(/gpt-enabled demo robot/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /prev/i }));

    expect(screen.getByText(/hands-on copilot workshop/i)).toBeInTheDocument();
  });

  it("renders navigation and opens the mobile menu", async () => {
    const user = userEvent.setup();

    renderWithChakra(<NavBar />);

    expect(screen.getByRole("link", { name: /daniel saenz/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /projects/i }).length).toBeGreaterThan(0);
  });

  it("renders the scroll progress indicator", () => {
    const { container } = renderWithChakra(<ScrollProgress />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
