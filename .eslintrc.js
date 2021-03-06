module.exports = {
  env: { es6: true, node: true, 'jest/globals': true },
  extends: ['airbnb-base'],
  plugins: ['jest'],
  parserOptions: {
    ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
    sourceType: 'module'
  },
  rules: {
    "import/prefer-default-export": 0
  }
};
