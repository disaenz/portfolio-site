import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

export function renderWithChakra(ui, options) {
  return render(<ChakraProvider>{ui}</ChakraProvider>, options);
}
