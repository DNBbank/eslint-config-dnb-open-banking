module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      2,
      { singleQuote: true, trailingComma: 'all', arrowParens: 'always' },
    ],
  },
};
