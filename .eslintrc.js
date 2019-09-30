  module.exports = {
    plugins: ["gridsome"],
    extends: [
      "plugin:gridsome/recommended",
      "plugin:vue/recommended",
      "airbnb-base"
    ],
    rules: {
      "gridsome/format-query-block": "error",
      "linebreak-style": [0, "error", "windows"],
      "semi": [2, "never"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "addCollection|createPage|router|head|isClient" }],
      "gridsome/require-g-link-to": "off"
    },
  };
