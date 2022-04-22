module.exports = {
  root: true,

  env: {
    node: true
  },

  // plugins: ["typescript"],
  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    // "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/no-use-v-if-with-v-for": "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.spec.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
