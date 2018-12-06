#!/usr/bin/env node
const { setup } = require('setup-eslint-config');

const packageInfo = require('./package.json');

setup({
  name: packageInfo.name,
  packageInfo,
  prompts: [
    { type: 'confirm', name: 'prettier', message: 'Use prettier?' },
    { type: 'confirm', name: 'jest', message: 'Use jest?' },
    { type: 'confirm', name: 'react', message: 'Use react?' },
    { type: 'confirm', name: 'vue', message: 'Use vue?' },
  ],
  createEslintConfig: (config) => {
    const eslintConfig = { extends: ['dnb-open-banking'] };
    if (config.prettier) {
      eslintConfig.extends.push('dnb-open-banking/configs/prettier');
    }
    if (config.babel) {
      eslintConfig.parser = 'babel-eslint';
    }
    if (config.typescript) {
      eslintConfig.parser = 'typescript-eslint-parser';
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
    if (config.react) {
      eslintConfig.extends.push('dnb-open-banking/configs/react');
    }
    return eslintConfig;
  },
  createDependencyList: (config) => {
    const dependencies = ['eslint', 'eslint-plugin-import'];
    if (config.prettier) {
      dependencies.push('eslint-config-prettier');
      dependencies.push('eslint-plugin-prettier');
      dependencies.push('prettier');
    }
    if (config.babel) {
      dependencies.push('babel-eslint');
    }
    if (config.typescript) {
      dependencies.push('typescript-eslint-parser');
      dependencies.push('eslint-plugin-typescript');
    }
    if (config.vue) {
      dependencies.push('eslint-plugin-vue');
    }
    if (config.react) {
      dependencies.push('eslint-plugin-react');
    }
    return dependencies;
  },
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
});
