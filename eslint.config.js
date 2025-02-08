import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node
    },
    rules: {
      "quotes": ["error", "double"],  // Exige aspas duplas
      "semi": ["error", "always"],    // Exige ponto e vírgula
      "no-unused-vars": "warn",       // Mostra aviso para variáveis não utilizadas
      "indent": ["error", 2]          // Indentação de 2 espaços
    }
  },
  pluginJs.configs.recommended
];
