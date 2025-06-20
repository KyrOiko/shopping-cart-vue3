module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/require-default-prop": "off",
    "vue/no-v-html": "warn",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/no-unused-components": "warn",
    "vue/require-prop-types": "off",
    "vue/no-mutating-props": "error",
    "vue/no-side-effects-in-computed-properties": "error",

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "warn",
    "prefer-const": "error",
    "no-var": "error",
  },
};
