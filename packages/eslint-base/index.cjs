module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ["plugin:import/errors", "eslint:recommended"],
  plugins: ["json-format", "prettier", "import"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "@",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true,
      },
    ],
    camelcase: ["error", { ignoreGlobals: false }],
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
      {
        usePrettierrc: false,
      },
    ],
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    semi: "error",
    "no-var": "error",
    "no-console": "error",
    "no-empty": "error",
    "no-redeclare": "error",
    "no-unused-vars": "error",
    "no-const-assign": "error",
    "default-case-last": "error",
    "no-useless-escape": "error",
    "no-proto": "error",
  },
};
