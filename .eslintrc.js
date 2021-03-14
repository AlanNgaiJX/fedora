/*
 * @Author: your name
 * @Date: 2021-03-09 22:01:48
 * @LastEditTime: 2021-03-14 16:34:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-expressions': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'no-unused-vars': ['off'],
    'no-param-reassign': ['off'],
    'no-underscore-dangle': 'off',
    'no-multi-assign': 'off',
    'no-use-before-define':'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ]
};
