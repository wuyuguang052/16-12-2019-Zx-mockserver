/**
 * 导航菜单
 * author:yg.wu
 */
;
(function (m) {
    'use strict';
    var connection = require('../db/connection'),
        // colName = 'payLogs',
        Q = require('q'),
        global = require('../common/global'),
        objectID = require('mongodb').ObjectID,
        self = m;

    /**
     * 操作方法集合
     * */
    var actionFunctions = {

        getMenuList: function () {
            return [{
                'text' : 'System',
                'locale' : 'nav_menu_system',
                'href' : '#sys',
                'current' : 'member',
                'leaf' : false,
                'needPidCheck' : true,
                'children' : [{
                    'role' : [1,2],
                    'locale' : 'nav_member_mgmt',
                    'href' : '#member',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/member\/'
                }, {
                    'role' : [1,2],
                    'locale' : 'nav_job_mgmt',
                    'href' : '#job',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/job\/'
                }, {
                    'role' : [1],
                    'locale' : 'nav_brokerage_mgmt',
                    'href' : '#brokerage',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/brokerage\/'
                }, {
                    'role' : [1],
                    'locale' : 'nav_cashout_mgmt',
                    'href' : '#cashout',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/cashout\/'
                }, {
                    'role' : [1],
                    'locale' : 'nav_paylog_mgmt',
                    'href' : '#paylog',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/paylog\/'
                }, {
                    'role' : [1,2],
                    'locale' : 'nav_company_mgmt',
                    'href' : '#company',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/company\/'
                }, {
                    'role' : [1],
                    'locale' : 'nav_admin',
                    'href' : '#admin',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/admin\/'
                }, {
                    'role' : [1],
                    'locale' : 'nav_config_mgmt',
                    'href' : '#config',
                    'leaf' : true,
                    'iconCls' : 'x-hidden',
                    'filePath' : 'modules\/config\/'
                }
                ]
            }
            ]
        },

        /**
         * 获取导航菜单
         * @param req
         * @param res
         */
        getMenus: function (req, res) {
            var me = self.exports;

            var Cookies = {};
            req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
                var parts = Cookie.split('=');
                Cookies[parts[0].trim()] = ( parts[1] || '' ).trim();
            });

            var menuCfg = me.getMenuList();

            if(Cookies.role == '2') {
                var menu = menuCfg[0];
                for(var i=0; i<menu.children.length; i++) {
                    var item = menu.children[i];
                    if(item['role'].indexOf(2) == -1) {
                        menu.children.splice(i, 1);
                        i--;
                    }
                }
            }

            global.writeToJson(res, menuCfg);
        }
    }

    m.exports = actionFunctions;
}(module));
