module.exports = {
  extends: ['plugin:node/recommended', 'plugin:security/recommended'],
  plugins: ['node', 'security'],
  env: {
    node: true,
  },
  rules: {
    'node/prefer-promises/fs': 2,
    'node/prefer-promises/dns': 2,
    // We don't publish
    'node/no-unpublished-require': 0,

    // We use either typescript or babel for most projects so
    // this can be activated per project if necessary
    'node/no-unsupported-features/es-syntax': 0,

    // This is handled by the import plugin in the main config
    'node/no-missing-import': 0,

    // This does not work with typescript when importing just types
    'node/no-extraneous-import': 0,
  },
};
