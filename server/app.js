"use strict"

var koa = require('koa')
var app = koa()
var config = require('../config')
var getIp = require('request-ip')
var checkBaidu = require('./utils/check-baidu')

// 设置静态资源缓存
var staticCache = require('koa-static-cache')
app.use(staticCache('output/static', {
    prefix            : '/static',
    maxAge            : 365 * 24 * 60 * 60,
    buffer            : true,
    gzip              : true,
    usePrecompiledGzip: true
}))

// 监听错误
app.on("error", function (err) {
    if (err) {
        console.log('error:', err)
    }
})

// 抓住未捕获的错误
process.on('uncaughtException', function (err) {
    if (err) {
        console.log('error:', err)
    }
})

// 入口文件
var args = process.argv.slice(2)

var templateHtml = require('../html.js')(args)
app.use(function *() {
    var ip = getIp.getClientIp(this.req)

    // 本地开发 或者 百度的 ip
    var isBaidu = (ip === '::ffff:127.0.0.1') || checkBaidu(ip)

    this.cookies.set('IS_BAIDU', isBaidu ? '1' : '0', {
        httpOnly: false
    })

    templateHtml = templateHtml.replace(/__tplData\(\'isBaidu\'\)/g, isBaidu)

    this.type = 'text/html; charset=utf-8'
    this.body = templateHtml
})

module.exports = app.listen(config.localPort)