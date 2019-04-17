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
  plugins: ['import', 'eslint-comments', 'unicorn', 'prettier'],
  parserOptions: { ecmaVersion: 2018 },
  globals: {
    Promise: false,
  },
  rules: {
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
