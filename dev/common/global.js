/**
 * 控制器基础类
 * author:yg.wu
 */
;
(function() {
    'use strict';
    var global = {
        adminUser: null,
        /**
         * 输出JSON串
         * */
        writeToJson: function(res, jsonObj) {
            res.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' });
            res.end(JSON.stringify(jsonObj));
        },
        /**
         * 输出页面
         * */
        writeToHtml: function(res, text) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(text);
        },
        /**
         * 输出纯文本
         * */
        writeToText: function(res, text) {
            res.writeHead(200, { 'Content-Type': 'text/text; charset=utf-8' });
            res.end(text);
        },
        /**
         * 获取当前日期 yyyy-MM-dd hh:mm:ss
         * */
        getDate: function() {
            // var today = new Date(),
            //     day = today.getDate(),
            //     month = today.getMonth() + 1,
            //     year = today.getFullYear(),
            //     hh = today.getHours(),
            //     mm = today.getMinutes(),
            //     ss = today.getSeconds(),
            //     format = function(number){
            //         return number < 10 ? '0' + number : number;
            //     };
            // return year + "-" + format(month) + "-" + format(day) + ' ' + format(hh) + ':' + format(mm) + ':' + format(ss);
            return new Date();
        },
        /**
         * 获取当前年月 yyyy-MM
         * */
        getMonty: function() {
            var today = new Date(),
                month = today.getMonth() + 1,
                year = today.getFullYear();
            return year + "-" + month;
        }
    }
    module.exports = global;
}());
