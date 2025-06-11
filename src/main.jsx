import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css"; // your global CSS or Tailwind import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
