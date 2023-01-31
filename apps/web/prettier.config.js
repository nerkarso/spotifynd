/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}
