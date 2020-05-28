/**
 * dashboard相关
 * author: yg.wu
 */

var url = require("url");
var querystring = require("querystring");

(function(m) {
        'use strict';
        var global = require('../common/global')
        var dashboard = {

            //获取销售下拉列表数据
            salesList: function(req, res) {
                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {id:0, name:'全部销售'},
                        {id:1, name:'销售1队'},
                        {id:2, name:'销售2队'},
                        {id:3, name:'销售3队'},
                        {id:4, name:'销售4队'}
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },

            //接入订单数分布数 （pieChart）
            accessOrder: function(req, res) {
                var arg = url.parse(req.url).query;
                // var params = querystring.parse(arg);

                console.log('查询参数输出：' + JSON.stringify(arg))

                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {value:10, name:'销售1队'},
                        {value:20, name:'销售2队'},
                        {value:30, name:'销售3队'},
                        {value:40, name:'销售4队'}
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },
            //人均接入订单数 （barChart）
            accessOrderAverage: function(req, res) {
                
                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {value:10, name:'销售1队'},
                        {value:20, name:'销售2队'},
                        {value:30, name:'销售3队'},
                        {value:40, name:'销售4队'},
                        {value:50, name:'销售5队'}
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },




            //活跃订单数分布
            ActiveOrder:  function(req, res) {
                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {value:10, name:'销售1队'},
                        {value:20, name:'销售2队'},
                        {value:30, name:'销售3队'},
                        {value:40, name:'销售4队'},
                        {value:50, name:'销售5队'}
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },
            //人均活跃订单数
            ActiveOrderAverage:  function(req, res) {
                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {value:10, name:'销售1队'},
                        {value:20, name:'销售2队'},
                        {value:30, name:'销售3队'},
                        {value:40, name:'销售4队'},
                        {value:50, name:'销售5队'}
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },


            
            //团队接入订单趋势 (周、月、季度)
            accessTeamOrder: function(req, res) {
                var arg = url.parse(req.url).query;
                console.log('查询参数输出：' + JSON.stringify(arg))

                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {
                            name:'销售1队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[120, 132, 101, 134, 90]
                        },
                        {
                            name:'销售2队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[220, 182, 191, 234, 290]
                        },
                        {
                            name:'销售3队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[150, 232, 201, 154, 190]
                        },
                        {
                            name:'销售4队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[320, 332, 301, 334, 390]
                        },
                        {
                            name:'销售5队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[820, 932, 901, 934, 1290]
                        }
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },
            //人均接入订单趋势 (周、月、季度)
            accessTeamOrderAverage: function(req, res) {
                var arg = url.parse(req.url).query;
                console.log('查询参数输出：' + JSON.stringify(arg))

                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {
                            name:'销售1队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[120, 132, 101, 134, 90]
                        },
                        {
                            name:'销售2队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[220, 182, 191, 234, 290]
                        },
                        {
                            name:'销售3队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[150, 232, 201, 154, 190]
                        },
                        {
                            name:'销售4队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[320, 332, 301, 334, 390]
                        },
                        {
                            name:'销售5队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[820, 932, 901, 934, 1290]
                        }
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },

            //团队活跃订单趋势 (周、月、季度)
            ActiveTeamOrder:  function(req, res) {
                var arg = url.parse(req.url).query;
                console.log('查询参数输出：' + JSON.stringify(arg))

                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {
                            name:'销售1队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[120, 132, 101, 134, 90]
                        },
                        {
                            name:'销售2队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[220, 182, 191, 234, 290]
                        },
                        {
                            name:'销售3队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[150, 232, 201, 154, 190]
                        },
                        {
                            name:'销售4队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[320, 332, 301, 334, 390]
                        },
                        {
                            name:'销售5队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[820, 932, 901, 934, 1290]
                        }
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            },
            //人均接活跃订单趋势 (周、月、季度)
            ActiveTeamOrderAverage:  function(req, res) {
                var arg = url.parse(req.url).query;
                console.log('查询参数输出：' + JSON.stringify(arg))
                
                req.accepts('application/json');
                //列表数据
                var data = {
                    "time": "2019-11-22 10:24:29",
                    "code": 0,
                    "data": [
                        {
                            name:'销售1队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[120, 132, 101, 134, 90]
                        },
                        {
                            name:'销售2队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[220, 182, 191, 234, 290]
                        },
                        {
                            name:'销售3队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[150, 232, 201, 154, 190]
                        },
                        {
                            name:'销售4队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[320, 332, 301, 334, 390]
                        },
                        {
                            name:'销售5队',
                            date:['2019/11/6', '2019/11/7', '2019/11/8', '2019/11/9', '2019/11/10'],
                            data:[820, 932, 901, 934, 1290]
                        }
                    ],
                    "msg": ""
                }
                global.writeToJson(res, data);
            }




        }

        m.exports = dashboard;
    }
    (module));