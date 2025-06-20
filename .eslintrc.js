module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "warn",
    "prefer-const": "warn",
    "no-var": "error",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/require-default-prop": "off",
    "vue/no-v-html": "warn",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ["**/*.vue"],
      rules: {
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "vue/no-unused-components": "warn",
      },
    },
    {
      files: ["**/*.js"],
      rules: {
        "no-unused-vars": "warn",
        "prefer-const": "error",
      },
    },
  ],
};
