import globals from "globals";
import js from "@eslint/js";
import tslint from "typescript-eslint";
import binoTs from "@binochoi/eslint-config-typescript";

export default tslint.config(
  {
    files: ["**/*.{js,ts}"],
  },
  {
    ignores: ["dist", "app/.nuxt"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
    },
  },
  js.configs.recommended,
  ...tslint.configs.recommended,
  {
    rules: {
      ...binoTs.rules,
    },
  },
);
