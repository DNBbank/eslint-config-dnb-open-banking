/* eslint-disable unicorn/prevent-abbreviations */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,

    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/explicit-function-return-type': [
      0,
      { allowExpressions: true },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
  },
};
