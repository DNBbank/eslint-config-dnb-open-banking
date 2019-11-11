module.exports = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  env: {
    node: true,
  },
  rules: {
    'node/prefer-promises/fs': 2,
    'node/prefer-promises/dns': 2,
  },
};
