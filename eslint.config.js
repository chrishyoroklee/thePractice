import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Prettier errors as ESLint errors
    },
  },
  eslintConfigPrettier, // Disables conflicting ESLint rules
];
