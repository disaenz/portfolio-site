import React from "react";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatModal from "./ChatModal.jsx";
import { renderWithChakra } from "../test/renderWithChakra.jsx";

vi.mock("axios");

describe("ChatModal", () => {
  it("renders the welcome prompt when open", () => {
    renderWithChakra(<ChatModal isOpen onClose={vi.fn()} />);

    expect(screen.getByText(/ask daniel's ai assistant/i)).toBeInTheDocument();
    expect(screen.getByText(/ask me about my work experience/i)).toBeInTheDocument();
  });

  it("calls onClose from the close button", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderWithChakra(<ChatModal isOpen onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("sends a message and renders the AI reply", async () => {
    const user = userEvent.setup();
    axios.post.mockResolvedValueOnce({
      data: {
        reply: "Daniel has deep DevSecOps and cloud delivery experience.",
      },
    });

    renderWithChakra(<ChatModal isOpen onClose={vi.fn()} />);

    await user.type(
      screen.getByPlaceholderText(/ask me anything/i),
      "What is Daniel good at?"
    );
    await user.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        expect.stringMatching(/\/api\/ai\/chat$/),
        expect.objectContaining({
          message: "What is Daniel good at?",
        })
      );
    });

    expect(
      await screen.findByText(/deep devsecops and cloud delivery experience/i)
    ).toBeInTheDocument();
  });
});
