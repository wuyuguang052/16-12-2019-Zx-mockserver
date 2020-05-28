/**
 * 兼容使用es6的写法 
 */

require('babel-register')({
    presets: ['env']
})

module.exports = require('./server.js')