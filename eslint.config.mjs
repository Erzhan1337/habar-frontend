import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "no-debugger": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],
      "react/self-closing-comp": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
]);

export default eslintConfig;
