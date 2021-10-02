module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    jest: "readonly",
    describe: "readonly",
    it: "readonly",
    expect: "readonly",
    NOOP: "readonly",
    afterEach: "readonly",
    beforeEach: "readonly",
  },
  extends: [
    "eslint:recommended",
    "semistandard",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
