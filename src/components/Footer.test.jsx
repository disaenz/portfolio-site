import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import Footer from "./Footer.jsx";
import { renderWithChakra } from "../test/renderWithChakra.jsx";

describe("Footer", () => {
  it("renders the current year and owner", () => {
    renderWithChakra(<Footer />);

    expect(
      screen.getByText(`${new Date().getFullYear()} Daniel Saenz. All rights reserved.`, {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
