module.exports = {
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  extends: ["@leye195/base-test", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint", "import"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
    },
  ],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
  },
};
