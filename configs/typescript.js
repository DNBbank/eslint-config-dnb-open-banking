module.exports = {
  plugins: ['typescript'],
  rules: {
    'no-unused-vars': 0,
    'typescript/no-unused-vars': 2,

    'typescript/no-explicit-any': 1,
    'typescript/explicit-function-return-type': [0, { allowExpressions: true }],
  },
};
