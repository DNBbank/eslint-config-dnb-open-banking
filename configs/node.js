module.exports = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  env: {
    node: true,
  },
  rules: {
    'node/prefer-promises/fs': 2,
    'node/prefer-promises/dns': 2,

    // We use either typescript or babel for most projects so
    // this can be activated per project if necessary
    'node/no-unsupported-features/es-syntax': 0,
  },
};
