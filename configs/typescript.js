module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  rules: {
    'no-unused-vars': 2,
    'typescript/no-unused-vars': 2,

    'no-use-before-define': 0,
    'typescript/no-use-before-define': 2,

    'typescript/no-explicit-any': 1,
    'typescript/explicit-function-return-type': [0, { allowExpressions: true }],
  },
};
