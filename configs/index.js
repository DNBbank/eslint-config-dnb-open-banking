module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: [
    'import',
    'eslint-comments',
    'unicorn',
    'simple-import-sort',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 2018 },
  globals: {
    Promise: false,
  },
  rules: {
    'require-await': 2,
    'simple-import-sort/import': 2,
    'import/order': 0,
    'prettier/prettier': [
      2,
      { singleQuote: true, trailingComma: 'all', arrowParens: 'always' },
    ],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    'eslint-comments/disable-enable-pair': [2, { allowWholeFile: true }],
    'unicorn/consistent-function-scoping': 0,
    'unicorn/no-null': 0,
    'unicorn/no-reduce': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/no-fn-reference-in-iterator': 0,
    'unicorn/prevent-abbreviations': [
      2,
      {
        whitelist: {
          prop: true,
          props: true,
          attrs: true,
          msg: true,
          inheritAttrs: true,
          propsData: true,
        },
      },
    ],

    'unicorn/filename-case': 0,
  },
};
