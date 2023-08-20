const RuleOptionTypes = Object.freeze({
  Error: "error",
  Warning: "warn",
  Off: "off",
});

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": RuleOptionTypes.Warning,
    "react/react-in-jsx-scope": RuleOptionTypes.Off,
    "react/no-unknown-property": [RuleOptionTypes.Error, { ignore: ["css"] }],
  },
};
