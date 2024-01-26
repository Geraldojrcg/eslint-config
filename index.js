/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: false,
        bracketSameLine: true,
        trailingComma: "es5",
        importOrderSeparation: true,
        importOrderSortSpecifiers: true,
        importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
        plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
      },
    ],
  },
};

module.exports = config;
