module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ["@leye195/ts"],
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    ecmaVersion: "latest",
  },
  ignorePatterns: ['node_modules/', 'dist/', '**/*.eslint*', '**/*.css'],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/button-has-type": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react/no-array-index-key": "error",
    "react/no-deprecated": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        beforeSelfClosing: "always",
      },
    ],
  },
};