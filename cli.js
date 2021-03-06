#!/usr/bin/env node
const { setup } = require('setup-eslint-config');

const packageInfo = require('./package.json');

setup({
  name: packageInfo.name,
  packageInfo,
  skipDetectedPrompts: true,
  prompts: [
    { type: 'confirm', name: 'node', message: 'Use Node?' },
    { type: 'confirm', name: 'jest', message: 'Use jest?' },
    { type: 'confirm', name: 'react', message: 'Use react?' },
    { type: 'confirm', name: 'vue', message: 'Use vue?' },
    {
      type: (_, values) => (values.vue ? 'confirm' : null),
      name: 'vueAccessibility',
      message: 'Use vue accessibility plugin(this is a bit flakey)?',
    },
  ],
  createEslintConfig: (config) => {
    const eslintConfig = { extends: ['dnb-open-banking'] };
    const env = {};
    if (config.babel) {
      eslintConfig.parser = 'babel-eslint';
    }
    if (config.typescript) {
      eslintConfig.parser = '@typescript-eslint/parser';
      eslintConfig.extends.push('dnb-open-banking/configs/typescript');
    }
    if (config.jest) {
      eslintConfig.extends.push('dnb-open-banking/configs/jest');
    }
    if (config.flowtype) {
      eslintConfig.extends.push('dnb-open-banking/configs/flowtype');
    }
    if (config.vue) {
      eslintConfig.parser = 'vue-eslint-parser';
      eslintConfig.extends.push('dnb-open-banking/configs/vue');
    }
    if (config.vueAccessibility) {
      eslintConfig.extends.push('dnb-open-banking/configs/vue-a11y');
    }
    if (config.react) {
      eslintConfig.extends.push('dnb-open-banking/configs/react');
    }
    if (config.node) {
      eslintConfig.extends.push('dnb-open-banking/configs/node');
      env.node = true;
    }
    if (Object.keys(env).length > 0) {
      eslintConfig.env = env;
    }
    return eslintConfig;
  },
  createDependencyList: (config) => {
    const dependencies = [
      'eslint',
      'eslint-plugin-import',
      'eslint-plugin-eslint-comments',
      'eslint-plugin-unicorn',
      'eslint-plugin-promise',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
      'prettier',
      'eslint-plugin-simple-import-sort',
    ];
    if (config.babel) {
      dependencies.push('babel-eslint');
    }
    if (config.typescript) {
      dependencies.push('@typescript-eslint/parser');
      dependencies.push('@typescript-eslint/eslint-plugin');
    }
    if (config.vue) {
      dependencies.push('eslint-plugin-vue');
    }
    if (config.vueAccessibility) {
      dependencies.push('eslint-plugin-vue-a11y');
    }
    if (config.react) {
      dependencies.push('eslint-plugin-react');
      dependencies.push('eslint-plugin-react-hooks');
    }
    if (config.node) {
      dependencies.push('eslint-plugin-node');
      dependencies.push('eslint-plugin-security');
    }
    if (config.jest) {
      dependencies.push('eslint-plugin-jest');
    }
    return dependencies;
  },
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
});
