'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  BASE_API: '"http://211.154.135.29:88/v1"',
  BASE_API2: '"http://211.154.135.29:88"',
  LOCAL_API:'"http://172.17.1.32:7075/v1"',
  LOCAL_PRICE_API:'"http://172.17.0.8:8080/v1"',
  IMG_URL: '"http://211.154.135.29:88/v1/thumbnails"',
  IMG_URL1: '"http://211.154.135.29:88/v1/imgs"'
})
