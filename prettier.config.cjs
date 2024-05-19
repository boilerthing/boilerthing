/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  useTabs: false,
  arrowParens: "avoid",
  tabWidth: 2,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/app/(.*)$",
    "^@/data/(.*)$",
    "^@/actions/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/app/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.css)$",
    "^types$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports", 
    "prettier-plugin-tailwindcss"
  ],
}
