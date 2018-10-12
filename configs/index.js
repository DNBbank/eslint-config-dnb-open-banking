module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import'],
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
  },
};
