module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  overrides: [
    {
      files: ['*.spec.ts', '*.tests.js', '*.tests.ts', '*.tests.tsx'],
      env: { jest: true, node: true },
    },
  ],
};
