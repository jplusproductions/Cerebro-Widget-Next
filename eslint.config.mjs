import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "out/**",
    "dist/**",
    "build/**",
    "next-env.d.ts",
    ".next/**",
  ]),
  {
    rules: {
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    },
  },
])

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default eslintConfig
