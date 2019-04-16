/* eslint-disable unicorn/prevent-abbreviations */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
  ],
  plugins: ['import', 'eslint-comments', 'unicorn'],
  parserOptions: { ecmaVersion: 2018 },
  globals: {
    Promise: false,
  },
  rules: {
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
  },
};
