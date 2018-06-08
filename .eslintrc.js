module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': ['standard', 'plugin:react/recommended'],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true,
      'impliedStrict': true
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'plugins': ['import', 'react'],
  'rules': {
    'no-console': ['error', {'allow': ['warn', 'error']}], // 禁止conosle 允许console.warn, console.error
    'no-alert': 'error',                                      // 禁止alert, promp, confirm
    'no-empty': ['error', {'allowEmptyCatch': true}],       // 禁止空代码块(catch除外)
    'no-extra-semi': 'error',                                 // 禁止不必要的分号
    'default-case': 'error',                                  // switch语句必须有default
    'dot-notation': 'error',                                  // 尽可能使用点号
    'no-else-return': 'error',                                // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 'error',                             // 禁止出现空函数
    'radix': 'error',                                         // 强制在parseInt()使用基数参数
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 'tab'],
    'no-tabs': 'off',
    'one-var': 'off',
    'no-mixed-spaces-and-tabs': ['off', 'smart-tabs'],
    'no-extra-parens': 'warn',
    'no-template-curly-in-string': 'off',
    'key-spacing': ['warn', {'beforeColon': false, 'afterColon': true}],
    'keyword-spacing': ['warn', {'before': true, 'after': true}],
    'no-multi-spaces': ['warn', {'ignoreEOLComments': true}],
    'spaced-comment': 'off',
    'comma-dangle': 'off',
    'react/display-name': 'off',
    'react/prop-types': ['warn', {ignore: ['match', 'location', 'history']}],
    'react/self-closing-comp': ['error', {'component': true}],
    'import/no-webpack-loader-syntax': 'off'
  }
}
