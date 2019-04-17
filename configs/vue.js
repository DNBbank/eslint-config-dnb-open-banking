module.exports = {
  extends: ['plugin:vue/recommended', '@vue/typescript', 'prettier/vue'],
  plugins: ['vue'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/eqeqeq': 2,
    //    'vue/v-slot-style': 2,
    //    'vue/valid-v-slot': 2,
    'vue/component-name-in-template-casing': [2, 'kebab-case'],
    'vue/name-property-casing': [2, 'kebab-case'],
  },
};
