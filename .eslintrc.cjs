/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // 追加
    "plugin:react/jsx-runtime", // 追加
    "plugin:react-hooks/recommended",
    "prettier", // 追加
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "import", // 追加
  ],
  settings: {
    react: { version: "detect" }, // 追加
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // import の並び順を設定
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
      },
    ],
  },
};
