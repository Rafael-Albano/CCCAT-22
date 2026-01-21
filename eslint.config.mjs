import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"] },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  {
    files: ["**/*.ts"], plugins: { typescript },
    language: "typescript/ts", extends: ["plugin:typescript/recommended"],
    rules: {
      "object-curly-spacing": "always",
      "array-bracket-spacing": "always",
      "quotes": ["error", "double"],
      "comma-dangle": ["error", "always-multiline"]
    }
  },
]);
