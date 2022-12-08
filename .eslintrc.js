module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
