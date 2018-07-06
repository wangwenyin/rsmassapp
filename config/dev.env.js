'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  BASE_API: '"http://211.154.135.29:88/v1"',
  LOCAL_API:'"http://localhost:9528"',
})
