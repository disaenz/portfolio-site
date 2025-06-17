import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import cssPlugin from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  /*
   * 0) Ignore non-source files and generated output
   */
  {
    ignores: [
      "README.md",
      "dist/**",
      "node_modules/**"
    ],
  },

  /*
   * 1) JavaScript & JSX files under src/
   */
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: { js, react: pluginReact },
    extends: [
      "js/recommended",
      pluginReact.configs.flat.recommended
    ],
    settings: { react: { version: "detect" } }
  },

  /*
   * 2) JSONC files
   */
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"]
  },

  /*
   * 3) Markdown files (GitHub Flavored)
   */
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"]
  },

  /*
   * 4) CSS files
   * Disable the `css/use-baseline` rule which conflicts with our global outline usage
   */
  {
    files: ["**/*.css"],
    plugins: { css: cssPlugin },
    language: "css/css",
    extends: ["css/recommended"],
    rules: {
      "css/use-baseline": "off"
    }
  }
]);