module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // update the extensions
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "no-underscore-dangle": ["error", {allow: ["_id"]}],
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};