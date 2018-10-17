#!/usr/bin/env node
const { setup } = require('setup-eslint-config');

const packageInfo = require('./package.json');

setup({
  name: packageInfo.name,
  packageInfo,
  prompts: [
    { type: 'confirm', name: 'prettier', message: 'Use prettier?' },
    { type: 'confirm', name: 'jest', message: 'Use jest?' },
  ],
  createEslintConfig: (config) => {
    const eslintConfig = { extends: ['dnb-open-banking'] };
    if (config.prettier) {
      eslintConfig.extends.push('dnb-open-banking/config/prettier');
    }
    if (config.jest) {
      eslintConfig.extends.push('dnb-open-banking/config/jest');
    }
    if (config.babel) {
      eslintConfig.parser = 'babel-eslint';
    }
    if (config.typescript) {
      eslintConfig.parser = 'typescript-eslint-parser';
    }
    if (config.jest) {
      eslintConfig.extends.push('dnb-open-banking/configs/jest');
    }
    if (config.flowtype) {
      eslintConfig.extends.push('dnb-open-banking/configs/flowtype');
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
    }
    return dependencies;
  },
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
});
