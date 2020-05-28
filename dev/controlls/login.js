/**
 * 登录、管理员
 * author:yg.wu 
 */
;
(function(m) {
        'use strict';

        var colName = 'adminUser',
            global = require('../common/global'),
            objectID = '001',
            crypto = require('crypto'),
            self = m;

        var multiparty = require('multiparty');
        var roleCtrl = require('./routerMapOption');
        var moduleSettings = roleCtrl.getModuleSettingList();

        function guId() {
            var guid = "";
            for (var i = 1; i <= 32; i++) {
                var n = Math.floor(Math.random() * 16.0).toString(16);
                guid += n;
                if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                    guid += "-";
            }
            return guid.toUpperCase();
        }
        var userList = [{
            moduleSettings: moduleSettings,
            "envId": "123",
            "avatarFile": "",
            "companyId": "ff3f48d9-75a1-47f1-9f6b-8d0a44546b81",
            "companyName": "exaleap",
            "createdAt": null,
            "email": "operation@exaleap.ai",
            "enabled": true,
            "firstLogin": false,
            "id": "d9cb1b58-e2cf-46a2-be3c-837f61444901",
            "identifier": "ex0000",
            "loginName": "operation",
            "companyLogo": "[\"https://s3.cn-north-1.amazonaws.com.cn/exaleap-bj-2/customer/20190704/b9e90923-953e-45cd-a8b1-614273b47b63.png\"]",
            "mobile": "+8618800003581",
            "name": "operation",
            "phone": "+8618800003581",
            "roleCode": "operation",
            "moduleRights": [{
                moduleRight: '1',
                moduleTxt: 'energy',
                modulePath: '/energy',
                roleCode: 51
            }, {
                moduleRight: '1',
                moduleTxt: 'environment',
                modulePath: '/environment',
                roleCode: 52
            }, {
                moduleRight: '1',
                moduleTxt: 'workorder',
                modulePath: '/workorder',
                roleCode: 53
            }, {
                moduleRight: '1',
                moduleTxt: 'guests',
                modulePath: '/guests',
                roleCode: 54
            }, {
                moduleRight: '1',
                moduleTxt: 'building',
                modulePath: '/building',
                roleCode: 55
            }, {
                moduleRight: '1',
                moduleTxt: 'app',
                modulePath: '/app',
                roleCode: 56
            }, {
                moduleRight: '1',
                moduleTxt: 'tenant',
                modulePath: '/tenant',
                roleCode: 57
            }, {
                moduleRight: '1',
                moduleTxt: 'vendor',
                modulePath: '/vendor',
                roleCode: 58
            }],
            "roleId": "5674783c-1cac-41e4-94ae-2099221cc710",
            "role": [
                "51", '52', '53'
            ],
            "token": "eUWEulLCdN4BUMxPKKSWyi1JUMFXhIk0PnJGNULeg8lCkUI5sRXkOXw0Ee5wK3F1/",
            "dashboardResourcesBaseUrl": "http://ue-demo.exaleap.cn/mcp",
            "siteList": [{
                    "addr": "MCP CENTRAL",
                    "addressCode": ["110000", "110100", "110101"],
                    "alias": "",
                    "area": '',
                    "city": "",
                    "constructedAt": "2016-01",
                    "country": "",
                    "createdAt": "2019-04-13",
                    "desc": "测试",
                    "district": "",
                    "enabled": true,
                    "envName": "测试公司",
                    "fiscalYearEndAt": 1,
                    "fiscalYearStartAt": 12,
                    "galleries": ["https://exaleap-dev-2.s3.cn-north-1.amazonaws.com.cn/asset/20190413/1555125703092-prefix410729997128194162_FFC.jpg"],
                    "id": "017d9d18-7f48-47bd-aa38-16205fd64ccc",
                    "latitude": "22.3257077355",
                    "longitude": "114.2707417405",
                    "name": "MCP CENTRAL1",
                    "nodeType": "SITE",
                    "province": "",
                    "type": 1,
                    "updatedAt": "2019-04-27 13:26:11",
                    "zipcode": "100000",
                    "dashboardResourcesBaseUrl": 'http://ue-demo.exaleap.cn/mcp'
                },
                {
                    "addr": "MCP CENTRAL",
                    "addressCode": ["110000", "110100", "110101"],
                    "alias": "",
                    "area": '',
                    "city": "",
                    "constructedAt": "2016-01",
                    "country": "",
                    "createdAt": "2019-04-13",
                    "desc": "测试",
                    "district": "",
                    "enabled": true,
                    "envName": "测试公司",
                    "fiscalYearEndAt": 1,
                    "fiscalYearStartAt": 12,
                    "galleries": ["https://exaleap-dev-2.s3.cn-north-1.amazonaws.com.cn/asset/20190413/1555125703092-prefix410729997128194162_FFC.jpg"],
                    "id": "646dbc9a-3944-4b90-87d1-456be6a2bf52",
                    "latitude": "22.3257077355",
                    "longitude": "114.2707417405",
                    "name": "MCP CENTRAL2",
                    "nodeType": "SITE",
                    "province": "",
                    "type": 1,
                    "updatedAt": "2019-04-27 13:26:11",
                    "zipcode": "100000",
                    "dashboardResourcesBaseUrl": 'http://ue-demo.exaleap.cn/mcp'
                }
            ]
        }, {
            moduleSettings: moduleSettings,
            "envId": "123",
            "avatarFile": "",
            "companyId": "ff3f48d9-75a1-47f1-9f6b-8d0a44546b81",
            "companyName": "exaleap",
            "createdAt": null,
            "email": "01@exaleap.ai",
            "enabled": true,
            "firstLogin": false,
            "id": "d9cb1b58-e2cf-46a2-be3c-837f61444902",
            "identifier": "ex0000",
            "loginName": "root",
            "companyLogo": "[\"https://s3.cn-north-1.amazonaws.com.cn/exaleap-bj-2/customer/20190704/b9e90923-953e-45cd-a8b1-614273b47b63.png\"]",
            "mobile": "+8618800003582",
            "name": "root",
            "phone": "+8618800003582",
            "roleCode": "01",
            "roleId": "5674783c-1cac-41e4-94ae-2099221cc711",
            "role": [
                "01"
            ],
            "token": "eUWEulLCdN4BUMxPKKSWyi1JUMFXhIk0PnJGNULeg8lCkUI5sRXkOXw0Ee5wK3F2/",
            "dashboardResourcesBaseUrl": "http://ue-demo.exaleap.cn/mcp"
        }, {
            moduleSettings: moduleSettings,
            "region": 'zh',
            "envId": "123",
            "avatarFile": "",
            "companyId": "ff3f48d9-75a1-47f1-9f6b-8d0a44546b81",
            "companyName": "exaleap",
            "createdAt": null,
            "email": "admin@exaleap.ai",
            "enabled": true,
            "firstLogin": false,
            "id": "d9cb1b58-e2cf-46a2-be3c-837f61444902",
            "identifier": "ex0000",
            "loginName": "admin",
            "companyLogo": "[\"https://s3.cn-north-1.amazonaws.com.cn/exaleap-bj-2/customer/20190704/b9e90923-953e-45cd-a8b1-614273b47b63.png\"]",
            "mobile": "+8618800003583",
            "name": "admin",
            "phone": "+8618800003583",
            "roleCode": "04",
            "roleId": "5674783c-1cac-41e4-94ae-2099221cc712",
            "role": [
                "04"
            ],
            "token": "eUWEulLCdN4BUMxPKKSWyi1JUMFXhIk0PnJGNULeg8lCkUI5sRXkOXw0Ee5wK3F3/",
            "dashboardResourcesBaseUrl": "",
            "siteList": [{
                    "addr": "MCP CENTRAL",
                    "addressCode": ["110000", "110100", "110101"],
                    "alias": "",
                    "area": '',
                    "city": "",
                    "constructedAt": "2016-01",
                    "country": "",
                    "createdAt": "2019-04-13",
                    "desc": "测试",
                    "district": "",
                    "enabled": true,
                    "envName": "测试公司",
                    "fiscalYearEndAt": 1,
                    "fiscalYearStartAt": 12,
                    "galleries": ["https://exaleap-dev-2.s3.cn-north-1.amazonaws.com.cn/asset/20190413/1555125703092-prefix410729997128194162_FFC.jpg"],
                    "id": "017d9d18-7f48-47bd-aa38-16205fd64ccc",
                    "latitude": "22.3257077355",
                    "longitude": "114.2707417405",
                    "name": "MCP CENTRAL1",
                    "nodeType": "SITE",
                    "province": "",
                    "type": 1,
                    "updatedAt": "2019-04-27 13:26:11",
                    "zipcode": "100000",
                    "dashboardResourcesBaseUrl": 'http://ue-demo.exaleap.cn/mcp',
                    "region": 'zh'
                },
                {
                    "addr": "MCP CENTRAL",
                    "addressCode": ["110000", "110100", "110101"],
                    "alias": "",
                    "area": '',
                    "city": "",
                    "constructedAt": "2016-01",
                    "country": "",
                    "createdAt": "2019-04-13",
                    "desc": "测试",
                    "district": "",
                    "enabled": true,
                    "envName": "测试公司",
                    "fiscalYearEndAt": 1,
                    "fiscalYearStartAt": 12,
                    "galleries": ["https://exaleap-dev-2.s3.cn-north-1.amazonaws.com.cn/asset/20190413/1555125703092-prefix410729997128194162_FFC.jpg"],
                    "id": "646dbc9a-3944-4b90-87d1-456be6a2bf52",
                    "latitude": "22.3257077355",
                    "longitude": "114.2707417405",
                    "name": "MCP CENTRAL2",
                    "nodeType": "SITE",
                    "province": "",
                    "type": 1,
                    "updatedAt": "2019-04-27 13:26:11",
                    "zipcode": "100000",
                    "dashboardResourcesBaseUrl": 'http://ue-demo.exaleap.cn/mcp',
                    "region": 'zh'
                }
            ]
        }]

        var adminUserObj = {
            "code": 0,
            "data": '',
            "msg": "",
            "time": "2019-03-22 16:43:15"
        }

        //系统设置》管理员list
        var adminUserList = [{
            "avatarFile": "",
            "email": "yunepng.zhao@exaleap.ai",
            "enabled": false,
            "envId": "123",
            "siteRole": ["717bbea6-9fa0-4681-879e-cdbe7a8a1234"],
            "firstLogin": true,
            "userId": "241957fd-f6c2-4a83-b898-e62158863b44",
            "loginFailCount": 0,
            "loginName": "yp01",
            "mobile": "18810606906",
            "mobileCountryCode": "86",
            "name": "yp01",
            "siteRoleDesc": ["test"],
            "status": 2,
            "visible": 1,
            "role": '05',
        }, {
            "avatarFile": "",
            "email": "ruiqing.zhang@exaleap.ai",
            "enabled": true,
            "envId": "234",
            "siteRole": ["01d5b7f4-a8ac-47d0-97cd-104ec9380d76", "3056ccb7-50ca-4224-9abe-59ddda3f0af4", "717bbea6-9fa0-4681-879e-cdbe7a8a187b"],
            "firstLogin": false,
            "userId": "c2e7c1e2-0ad4-4ac9-9140-100aeb3ae42c",
            "loginFailCount": 0,
            "loginName": "100100100",
            "mobile": "13655552222",
            "mobileCountryCode": "86",
            "name": "100100100",
            "siteRoleDesc": ["上/下架广告", "发布公告", "123"],
            "status": 1,
            "visible": 1,
            "role": '06',
        }, {
            "avatarFile": "",
            "email": "yuhuan.huo@exaleap.ai",
            "enabled": true,
            "envId": "345",
            "siteRole": ["01d5b7f4-a8ac-47d0-97cd-104ec9380d76", "3056ccb7-50ca-4224-9abe-59ddda3f0af4", "d33e226c-8a95-4877-b780-9f3241c80eb4"],
            "firstLogin": false,
            "userId": "585b061f-da16-42b2-bc0c-8ff2820ba40b",
            "loginFailCount": 0,
            "loginName": "APP编辑测试",
            "mobile": "13255556666",
            "mobileCountryCode": "86",
            "name": "APP编辑测试",
            "siteRoleDesc": ["上/下架广告", "发布公告", "北京角色"],
            "status": 2,
            "visible": 1,
            "role": '15',
        }, {
            "avatarFile": "",
            "email": "yuhuan.huo@exaleap.ai",
            "enabled": true,
            "envId": "456",
            "siteRole": ["01d5b7f4-a8ac-47d0-97cd-104ec9380d76", "3056ccb7-50ca-4224-9abe-59ddda3f0af4", "d33e226c-8a95-4877-b780-9f3241c80eb4"],
            "firstLogin": false,
            "userId": "585b061f-da16-42b2-bc0c-8ff2820ba404",
            "loginFailCount": 0,
            "loginName": "已冻结账号",
            "mobile": "13255556666",
            "mobileCountryCode": "86",
            "name": "已冻结账号",
            "siteRoleDesc": ["上/下架广告", "发布公告", "北京角色"],
            "status": 4,
            "visible": 1,
            "role": '15',
        }]

        /**
         * moduleRight:   1 只读  2 编辑
         * moduleTxt: 模块名从中选择，可能不是固定的长度 [ '能源', '环境', '工单', '访客', '楼宇', 'App', '租户', '物管' ]
         * roleCode: 对应的是从51开始自增的值
         */
        var roleList = [{
            "envRoleId": "717bbea6-9fa0-4681-879e-cdbe7a8a1234",
            "roleName": "test",
            "moduleRights": [{
                "name": "systemManagement",
                label: '系统管理',
                "moduleRight": "1"
            }, {
                "name": "accountManagement",
                label: '账户管理',
                "moduleRight": "2"
            }, {
                "name": "siteRole",
                label: '角色',
                "moduleRight": "2"
            }],
            "sensitiveFields": ["11", "12"],
            "locationIds": "017d9d18-7f48-47bd-aa38-16205fd64ccc",
            "siteId": "",
            "source": "1"
        }, {
            "createdAt": "2019-05-08 18:37:35",
            "envId": "WF0001",
            "envRoleId": "717bbea6-9fa0-4681-879e-cdbe7a8a187b",
            "locationIds": "mocke204-00e8-4f26-a1e0-5e20ffe54974",
            "moduleRights": [{
                "name": "homePage",
                "moduleRight": "1"
            }, {
                "name": "moduleManagement",
                "moduleRight": "1"
            }, {
                "name": "operationStatus",
                "moduleRight": "1"
            }, {
                "name": "energyStatus",
                "moduleRight": "1"
            }, {
                "name": "tenantStatus",
                "moduleRight": "1"
            }, {
                "name": "eventStatus",
                "moduleRight": "1"
            }, {
                "name": "deviceStatus",
                "moduleRight": "1"
            }, {
                "name": "endpointStatus",
                "moduleRight": "1"
            }, {
                "name": "fireControl",
                "moduleRight": "1"
            }, {
                "name": "fireStatus",
                "moduleRight": "1"
            }, {
                "name": "statusMonitoring",
                "moduleRight": "1"
            }, {
                "name": "peopleCounting",
                "moduleRight": "1"
            }, {
                "name": "accessStatus",
                "moduleRight": "1"
            }, {
                "name": "parkingStatus",
                "moduleRight": "1"
            }, {
                "name": "environmentHealth",
                "moduleRight": "1"
            }, {
                "name": "airStatus",
                "moduleRight": "1"
            }, {
                "name": "toiletStatus",
                "moduleRight": "1"
            }, {
                "name": "smokingStatus",
                "moduleRight": "1"
            }, {
                "name": "healthStatus",
                "moduleRight": "1"
            }],
            "roleName": "123",
            "sensitiveFields": [],
            "siteId": "",
            "source": "1"
        }, {
            "createdAt": "2019-06-03 14:36:24",
            "envId": "WF0001",
            "envRoleId": "01d5b7f4-a8ac-47d0-97cd-104ec9380d76",
            "locationIds": "78cae204-00e8-4f26-a1e0-5e20ffe54974",
            "moduleRights": [{
                "name": "homePage",
                "moduleRight": "1"
            }, {
                "name": "floorOverview",
                "moduleRight": "1"
            }, {
                "name": "appManagement",
                "moduleRight": "1"
            }, {
                "name": "announcementManagement",
                "moduleRight": "2"
            }, {
                "name": "advertisementManagement",
                "moduleRight": "2"
            }, {
                "name": "touchUser",
                "moduleRight": "2"
            }, {
                "name": "commercialTenant",
                "moduleRight": "2"
            }],
            "roleName": "上/下架广告",
            "sensitiveFields": [],
            "siteId": "",
            "source": "2"
        }, {
            "createdAt": "2019-06-03 14:36:24",
            "envId": "WF0001",
            "envRoleId": "3056ccb7-50ca-4224-9abe-59ddda3f0af4",
            "locationIds": "78cae204-00e8-4f26-a1e0-5e20ffe54974",
            "moduleRights": [{
                "modulePath": "/app",
                "moduleRight": "2",
                "moduleTxt": "notice_publish",
                "roleCode": "62"
            }],
            "roleName": "发布公告",
            "sensitiveFields": [],
            "siteId": "",
            "source": "2"
        }, {
            "createdAt": "2019-06-11 14:17:37",
            "envId": "WF0001",
            "envRoleId": "d33e226c-8a95-4877-b780-9f3241c80eb4",
            "locationIds": "mocke204-00e8-4f26-a1e0-5e20ffe54974",
            "moduleRights": [{
                "name": "informationManagement",
                "moduleRight": "1"
            }, {
                "name": "basicInformation",
                "moduleRight": "1"
            }, {
                "name": "buildingManagement",
                "moduleRight": "2"
            }, {
                "name": "floorManagement",
                "moduleRight": "2"
            }, {
                "name": "tenantManagement",
                "moduleRight": "2"
            }, {
                "name": "personManagement",
                "moduleRight": "1"
            }, {
                "name": "staffManagement",
                "moduleRight": "1"
            }, {
                "name": "organizationManagement",
                "moduleRight": "1"
            }, {
                "name": "guestManagement",
                "moduleRight": "1"
            }, {
                "name": "accessRecord",
                "moduleRight": "1"
            }, {
                "name": "visitorInvitation",
                "moduleRight": "1"
            }, {
                "name": "workorderManagement",
                "moduleRight": "1"
            }, {
                "name": "workorderAll",
                "moduleRight": "2"
            }, {
                "name": "workorderType",
                "moduleRight": "2"
            }, {
                "name": "workorderAuthority",
                "moduleRight": "2"
            }, {
                "name": "workorderRule",
                "moduleRight": "2"
            }, {
                "name": "activityRecord",
                "moduleRight": "2"
            }, {
                "name": "deviceManagement",
                "moduleRight": "1"
            }, {
                "name": "deviceList",
                "moduleRight": "1"
            }, {
                "name": "deviceType",
                "moduleRight": "1"
            }, {
                "name": "deviceGroup",
                "moduleRight": "1"
            }, {
                "name": "deviceFault",
                "moduleRight": "1"
            }],
            "roleName": "北京角色",
            "sensitiveFields": [
                "12",
                "41"
            ],
            "siteId": "",
            "source": "1"
        }]

        /**
         * 操作方法集合
         * */
        var actionFunctions = {

            /**
             * 登录
             * */
            doLogin: function(req, res) {
                // var arg = url.parse(req.url, true).query;
                var me = self.exports;
                req.accepts('application/json');

                var loginName = req.body['loginName'];
                var loginUserObj = null;

                for (var i = 0; i < userList.length; i++) {
                    var item = userList[i];
                    if (loginName == item['loginName']) {
                        loginUserObj = item;
                        break;
                    }
                }

                if (loginUserObj) {
                    adminUserObj['data'] = loginUserObj;
                    global.writeToJson(res, adminUserObj);

                } else {
                    var outputObj = {
                        time: "2019-02-25 17:18:53",
                        code: 4000,
                        data: {},
                        msg: '4000-用户名密码错误'
                    }

                    global.writeToJson(res, outputObj);
                };

            },
            /**
             * 登出
             * */
            doLoginout: function(req, res) {
                req.accepts('application/json');
                if (true) {
                    var outputObj = {
                        time: "2019-02-25 17:18:53",
                        code: 0,
                        data: {},
                        msg: ''
                    }
                    global.writeToJson(res, outputObj);
                }
            },
            //查询用户信息
            getUser: function(req, res) {
                // var arg = url.parse(req.url, true).query;
                var me = self.exports;
                req.accepts('application/json');

                global.writeToJson(res, adminUserObj);
            },

            //系统设置》管理》查询管理员
            getAdminUsers: function(req, res) {
                var me = self.exports;
                var _data = req.query;

                var outputObj = {
                    time: "2019-03-14 18:58:16",
                    code: 0,
                    data: {
                        result: adminUserList,
                        pageNum: 1,
                        pageSize: 10,
                        total: adminUserList.length
                    },
                    msg: ''
                };

                //查询单条
                var singleObj = {
                    time: "2019-03-14 18:53:43",
                    code: 0,
                    data: adminUserList[0],
                    msg: ''
                }
                if (req.query.id) {
                    //根据id筛选item
                    for (var i = 0; i < adminUserList.length; i++) {
                        var item = adminUserList[i];
                        if (item['id'] == req.query.id) {
                            singleObj.data.obj = item;
                            break;
                        }
                    }
                    global.writeToJson(res, singleObj);
                } else {
                    global.writeToJson(res, outputObj);
                }

            },

            fetchAdmin: function(req, res) {
                let id = req.params.id;
                console.log("admin user id:" + id);
                let account = adminUserList[0];

                for (var i = 0; i < adminUserList.length; i++) {
                    var item = adminUserList[i];
                    if (id == item['id']) {
                        account = item;
                        break;
                    }
                }
                //查询单条
                var outputObj = {
                    time: "2019-03-14 14:30:45",
                    code: 0,
                    data: account,
                    msg: ''
                }
                global.writeToJson(res, outputObj);
            },

            //系统设置》管理》添加管理员
            addAdminUser: function(req, res) {
                var me = self.exports;
                try {
                    global.writeToJson(res, {
                        time: "2019-03-14 18:53:43",
                        code: 0,
                        data: {},
                        msg: ''
                    });
                } catch (err) {
                    var outputObj = {
                        success: false,
                        exception: err ? err : ''
                    }
                    global.writeToJson(res, outputObj);
                    throw new Error('{ "status":"0","error":"' + err.message + '" }');
                }
            },

            //系统设置》管理》修改管理员
            updateAdminUser: function(req, res) {
                var me = self.exports;
                req.accepts('application/json');

                if (req.body) {

                    var outputObj = {
                        time: "2019-03-14 18:53:43",
                        code: 0,
                        data: {},
                        msg: ''
                    }
                    global.writeToJson(res, outputObj);

                } else {
                    var outputObj = {
                        time: "2019-03-14 18:53:43",
                        code: 4000,
                        data: {},
                        msg: '4000-修改失败'
                    }

                    global.writeToJson(res, outputObj);
                };

            },

            //系统设置》管理》删除管理员
            deleteAdminUser: function(req, res) {
                var _dataList = req.body;

                try {
                    var outputObj = {
                        time: "2019-03-14 18:53:43",
                        code: 0,
                        data: {},
                        msg: ''
                    }

                    global.writeToJson(res, outputObj);
                } catch (err) {
                    var outputObj = {
                        time: "2019-03-14 18:53:43",
                        code: 4000,
                        data: {},
                        msg: '4000-修改失败'
                    }
                    global.writeToJson(res, outputObj);

                    throw new Error('{ "status":"0","error":"' + err.message + '" }');
                }

            },

            updatePassword: function(req, res) {
                // var arg = url.parse(req.url, true).query;
                var me = self.exports;
                req.accepts('application/json');
                if (req.body) {
                    var outputObj = {
                        time: "2019-03-14 18:53:43",
                        code: 0,
                        data: {},
                        msg: ''
                    }
                    global.writeToJson(res, outputObj);
                } else {
                    var outputObj = {
                        time: "2019-03-14 18:53:43",
                        code: 4000,
                        data: {},
                        msg: '4000-修改失败'
                    }

                    global.writeToJson(res, outputObj);
                };

            },

            /**
             * 获取用户的
             */
            getRoles: function(req, res) {
                var me = self.exports;
                req.accepts('application/json');
                var listObj = {
                    "time": new Date().getTime(),
                    "code": 0,
                    "data": {
                        "pageNum": 1,
                        "pageSize": 10,
                        "total": 2,
                        "result": roleList,
                        "others": {}
                    },
                    "msg": ""
                }
                global.writeToJson(res, listObj);
            },

            /**
             * 获取用户的角色信息
             */
            getRolesInfo: function(req, res) {
                var me = self.exports;
                req.accepts('application/json');
                let id = req.params.id;
                console.log("role id:" + id);

                var roleObj = {
                    "createdAt": "2019-05-06 22:04:13",
                    "envId": "WF0001",
                    "envRoleId": "dd521d0d-c96d-4808-8b6d-17b2e6263fce",
                    "moduleRights": [{
                        "modulePath": "/energy",
                        "moduleRight": "1",
                        "moduleTxt": "energy",
                        "roleCode": "51"
                    }, {
                        "modulePath": "/environment",
                        "moduleRight": "2",
                        "moduleTxt": "environment",
                        "roleCode": "52"
                    }, {
                        "modulePath": "/guests",
                        "moduleRight": "2",
                        "moduleTxt": "guests",
                        "roleCode": "54"
                    }, {
                        "modulePath": "/app",
                        "moduleRight": "1",
                        "moduleTxt": "app",
                        "roleCode": "56"
                    }, {
                        "modulePath": "/tenant",
                        "moduleRight": "2",
                        "moduleTxt": "tenant",
                        "roleCode": "57"
                    }, {
                        "modulePath": "/vendor",
                        "moduleRight": "2",
                        "moduleTxt": "vendor",
                        "roleCode": "58"
                    }],
                    "roleName": "自定义角色1",
                    "locationIds": "017d9d18-7f48-47bd-aa38-16205fd64ccc",
                    "sensitiveFields": ["11", "12"],
                    // "siteId": "78cae204-00e8-4f26-a1e0-5e20ffe54974"
                }
                for (var i = 0; i < roleList.length; i++) {
                    var item = roleList[i];
                    if (id == item['envRoleId']) {
                        roleObj = item;
                        break;
                    }
                }

                var listObj = {
                    "time": new Date().getTime(),
                    "code": 0,
                    "data": roleObj,
                    "msg": ""
                }
                global.writeToJson(res, listObj);
            },
            // 删除角色
            deleteRolesInfo: function(req, res) {
                req.accepts('application/json');
                let id = req.params.id;
                roleList = roleList.filter(item => {
                    return item.id !== id;
                })
                var listObj = {
                    time: new Date().getTime(),
                    code: 0,
                    data: {},
                    msg: ''
                }
                global.writeToJson(res, listObj);
            },
            // 新建角色
            addRole: function(req, res) {
                req.accepts('application/json');
                let bodys = req.body;
                bodys.id = guId();
                bodys.startAt = new Date().getTime();
                roleList.push(bodys);
                var listObj = {
                    time: new Date().getTime(),
                    code: 0,
                    data: {},
                    msg: ''
                }
                global.writeToJson(res, listObj);
            },
            // 修改角色
            updateRole: function(req, res) {
                req.accepts('application/json');
                let bodys = req.body;
                roleList = roleList.map(item => {
                    if (item.id == bodys.id) {
                        item = bodys
                    }
                    return item;
                });
                var listObj = {
                    time: new Date().getTime(),
                    code: 0,
                    data: {},
                    msg: ''
                }
                global.writeToJson(res, listObj);
            }
        }
        m.exports = actionFunctions;
    }
    (module));