import nextTs from "eslint-config-next/typescript"
import nextVitals from "eslint-config-next/core-web-vitals"
import { defineConfig, globalIgnores, } from "eslint/config"
import importNewlines from "eslint-plugin-import-newlines"

// Application Architecture || Define Configurations
// =======================================================================================
// =======================================================================================
const eslintConfigNextjs = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    "out/**",
    "dist/**",
    "build/**",
    "outputs/**",
    "load-test/**",
    "node_modules/**",
    "prisma/index.ts",
    "prisma/zod/**",
    "server/foreign-sdks/**/*-types.ts",
    "**/*.min.js",
    "**/chunks/**",
    "next-env.d.ts",
    ".next/**",
  ]),
  {
    plugins: {
      "import-newlines": importNewlines,
    },
    rules: {
      "no-var": ["error"],
      "no-tabs": ["error"],
      "prefer-template": ["error"],
      "no-multi-spaces": ["error"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "space-before-blocks": ["error"],
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "react/display-name": ["off"],
      // NOTE: Support for useEffect [] (could fix, uglier code)
      "react-hooks/exhaustive-deps": ["off"],
      // NOTE: Support for setState in useEffect [] (could fix, may break code)
      "react-hooks/set-state-in-effect": ["off"],
      // NOTE: Support for React-Hook-Form (could fix, uglier code)
      "react-hooks/incompatible-library": ["off"],
      "@typescript-eslint/ban-ts-comment": ["off"],
      "@typescript-eslint/no-require-imports": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "import-newlines/enforce": ["error", { items: 999 }],
    }
  }
])

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default eslintConfigNextjs
