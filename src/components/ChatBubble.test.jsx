import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatBubble from "./ChatBubble.jsx";
import { renderWithChakra } from "../test/renderWithChakra.jsx";

describe("ChatBubble", () => {
  it("opens the chat when clicked", async () => {
    const user = userEvent.setup();
    const onOpen = vi.fn();

    renderWithChakra(<ChatBubble onOpen={onOpen} />);

    await user.click(screen.getByRole("button", { name: /chat with daniel's ai/i }));

    expect(onOpen).toHaveBeenCalledTimes(1);
  });
});
