module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended' // or 'plugin:vue/base'
  ],
  rules: {
    semi: ['error', 'always'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
};
