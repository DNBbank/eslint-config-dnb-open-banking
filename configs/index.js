module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['import', 'eslint-comments'],
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
