/**
 * 路由配置表
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

        /**
         * label i18n 由后台处理
         *
         */
        var menuList = {
            envId: 'zzzze204-00e8-4f26-a1e0-5e20ffe54974',
            siteId: 'zzzze204-00e8-4f26-a1e0-5e20ffe54974',
            moduleSettings: [
                // 首页 index-0
                {
                    path: 'home-page',
                    name: 'homePage',
                    label: '首页概览',
                    apiUri: '',
                    moduleRight: '1', //1：只读，2：编辑
                    type: 'widgets', //widgets, module, group
                    widgets: ['weather', 'energy-performance', 'energy-density', 'facility-fault-location-ranking', 'recent-alarm', 'alarm-statistics-type', 'access-statistics-recent', 'workorder-statistics-recent', 'location-people-counting'],
                    children: []
                },
                // 楼层概览
                {
                    path: 'floor-overview',
                    name: 'floorOverview',
                    label: '楼层概览',
                    apiUri: '',
                    moduleRight: '1',
                    type: 'module',
                    widgets: [],
                    children: []
                },
                // 模块管理
                {
                    path: 'module-management', // 模块管理
                    name: 'moduleManagement',
                    label: '模块管理',
                    type: 'group',
                    widgets: [],
                    children: [{
                        path: 'operation-status', // 运营管理
                        name: 'operationStatus',
                        label: '运营管理',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'energy-status', // 能源情况
                            name: 'energyStatus',
                            label: '能源情况',
                            moduleRight: '1',
                            type: 'widgets',
                            widgets: ['weather', 'energy-performance', 'energy-density', 'energy-saving', 'hvac-device-fault-statistics'],
                            apiUri: ''
                        }, {
                            path: 'tenant-status', //租户动态
                            name: 'tenantStatus',
                            label: '租户动态',
                            moduleRight: '1',
                            type: 'widgets',
                            widgets: ['access-statistics-recent', 'visiting-company-ranking', 'visiting-duration-ranking', 'visiting-times-ranking'],
                            apiUri: ''
                        }, {
                            path: 'event-status', //事件管理
                            name: 'eventStatus',
                            label: '事件管理',
                            moduleRight: '1',
                            type: 'widgets',
                            widgets: ['workorder-statistics-week', 'workorder-statistics-type', 'workorder-evaluation-rate-ranking', 'workorder-quantity-worker-ranking', 'workorder-quantity-tenant-ranking', 'workorder-average-handling-time', 'workorder-average-worker-handling-time'],
                            apiUri: ''
                        }, {
                            path: 'device-status', //设备概览，目前还不确定它是 module 还是 widgets
                            name: 'deviceStatus',
                            label: '设备概览',
                            moduleRight: '1',
                            type: 'widgets',
                            widgets: [],
                            apiUri: ''
                        }, {
                            path: 'endpoint-status', // 客户端运营
                            name: 'endpointStatus',
                            label: '客户端运营',
                            moduleRight: '1',
                            type: 'widgets',
                            widgets: ['employee-device-statistics', 'user-age-sex-statistics', 'announcement-statistics-type', 'announcement-publishing-location-ranking', 'advertisement-tenant-ranking', 'advertisement-ranking'],
                            apiUri: ''
                        }]
                    }, {
                        path: 'fire-control', // 安防消防
                        name: 'securityStatus',
                        label: '安防消防',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'fire-status', //消防报警，目前还不确定它是 module 还是 widgets
                            name: 'fireStatus',
                            label: '消防报警',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: ''
                        }, {
                            path: 'status-monitoring', // 实时监控
                            name: 'statusMonitoring',
                            label: '实时监控',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/status-monitoring'
                        }, {
                            path: 'people-counting', // 客流系统
                            name: 'peopleCounting',
                            label: '客流系统',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/people-counting'
                        }, {
                            path: 'access-status', // 门禁管理，目前还不确定它是 module 还是 widgets
                            name: 'accessStatus',
                            label: '门禁管理',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: ''
                        }, {
                            path: 'parking-status', // 停车场管理，目前还不确定它是 module 还是 widgets
                            name: 'parkingStatus',
                            label: '停车场管理',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: ''
                        }]
                    }, {
                        path: 'environment-health', // 环境健康
                        name: 'environmentHealth',
                        label: '环境监控',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'air-status', // 空气质量
                            name: 'airStatus',
                            label: '空气质量',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/air-status'
                        }, {
                            path: 'toilet-status', // 卫生间管理，目前还不确定它是 module 还是 widgets
                            name: 'toiletStatus',
                            label: '卫生间管理',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: ''
                        }, {
                            path: 'smoking-status', //禁烟管理
                            name: 'smokingStatus',
                            label: '禁烟管理',
                            moduleRight: '1',
                            type: 'widgets',
                            widgets: ['smoking-alarm-floor-ranking', 'smoking-alarm-list', 'equipment-alarm-peak-period'],
                            apiUri: ''
                        }, {
                            path: 'health-status', // 健康管理，目前还不确定它是 module 还是 widgets
                            name: 'healthStatus',
                            label: '健康管理',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: ''
                        }]
                    }]
                },
                // 统计分析 index-1
                {
                    path: 'statistics-analysis', // 统计分析
                    name: 'statisticsAnalysis',
                    label: '统计分析',
                    moduleRight: '1',
                    type: 'widgets',
                    widgets: ['site-renting-rate', 'site-renting-status', 'public-area-energy-and-people-counting'],
                    apiUri: '',
                    children: []
                },
                // 信息管理
                {
                    path: 'information-management', // 信息管理
                    name: 'informationManagement',
                    label: '信息管理',
                    type: 'group',
                    widgets: [],
                    children: [{
                        path: 'basic-information', //基本信息管理
                        name: 'basicInformation',
                        label: '基本信息管理',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'building-management', // 楼宇信息
                            name: 'buildingManagement',
                            label: '楼宇信息',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/building-management'
                        }, {
                            path: 'floor-management', // 楼层信息
                            name: 'floorManagement',
                            label: '楼层信息',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/floor-management'
                        }]
                    }, {
                        path: 'tenant-management', // 租户管理
                        name: 'tenantManagement',
                        label: '租户管理',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/tenant-management',
                        children: []
                    }, {
                        path: 'person-management', // 人员管理
                        name: 'personManagement',
                        label: '人员管理',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'staff-management', // 物管公司列表
                            name: 'staffManagement',
                            label: '人员管理',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/staff-management'
                        }, {
                            path: 'organization-management', //组织结构
                            name: 'organizationManagement',
                            label: '组织结构',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/organization-management'
                        }]
                    }, {
                        path: 'guest-management', // 访客管理
                        name: 'guestManagement',
                        label: '访客管理',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'access-record', // 访客记录
                            name: 'accessRecord',
                            label: '访客记录',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/access-record'
                        }, {
                            path: 'visitor-invitation', // 访客邀约
                            name: 'visitorInvitation',
                            label: '访客邀约',
                            moduleRight: '1',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/visitor-invitation'
                        }]
                    }, {
                        path: 'workorder-management', //工单管理
                        name: 'workorderManagement',
                        label: '工单管理',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'workorder-all', // 全部工单
                            name: 'workorderAll',
                            label: '全部工单',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/workorder-all'
                        }, {
                            path: 'workorder-type', // 工单类型
                            name: 'workorderType',
                            label: '工单类型',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/workorder-type'
                        }, {
                            path: 'workorder-authority', // 流程配置
                            name: 'workorderAuthority',
                            label: '流程配置',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/workorder-authority'
                        }, {
                            path: 'workorder-rule', // 自动工单规则
                            name: 'workorderRule',
                            label: '自动工单规则',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/workorder-rule'
                        }]
                    }, {
                        path: 'activity-record', // 活动记录，目前还不确定它是 module 还是 widgets
                        name: 'activityRecord',
                        label: '活动记录',
                        moduleRight: '1',
                        type: 'module',
                        widgets: [],
                        apiUri: '',
                        children: []
                    }, {
                        path: 'device-management', // 设备管理
                        name: 'deviceManagement',
                        label: '设备管理',
                        type: 'group',
                        widgets: [],
                        children: [{
                            path: 'device-list', // 设备列表
                            name: 'deviceList',
                            label: '设备列表',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/device-list'
                        }, {
                            path: 'device-type', // 设备类型
                            name: 'deviceType',
                            label: '设备类型',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/device-type'
                        }, {
                            path: 'device-group', // 设备组
                            name: 'deviceGroup',
                            label: '设备组',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/device-group'
                        }, {
                            path: 'device-fault', // 能源设备故障记录
                            name: 'deviceFault',
                            label: '能源设备故障记录',
                            moduleRight: '2',
                            type: 'module',
                            widgets: [],
                            apiUri: '/console/device-fault'
                        }]
                    }]
                },
                // app index-6
                {
                    path: 'app-management', // APP管理
                    name: 'appManagement',
                    label: 'App管理',
                    type: 'group',
                    widgets: [],
                    children: [{
                        path: 'announcement-management', // 公告
                        name: 'announcementManagement',
                        label: '公告管理',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/announcement-management'
                    }, {
                        path: 'advertisement-management', // 广告
                        name: 'advertisementManagement',
                        label: '广告管理',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/advertisement-management'
                    }, {
                        path: 'touch-user', // App用户管理
                        name: 'touchUser',
                        label: 'App用户管理',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/touch-user'
                    }, {
                        path: 'commercial-tenant', // 商户
                        name: 'commercialTenant',
                        label: '商户信息',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/commercial-tenant'
                    }]
                },
                // 系统管理
                {
                    path: 'system-management', // 系统管理
                    name: 'systemManagement',
                    label: '系统管理',
                    type: 'group',
                    widgets: [],
                    children: [{
                        path: 'account-management', // 账户管理
                        name: 'accountManagement',
                        label: '账户管理',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/account-management'
                    }, {
                        path: 'site-role', // 角色
                        name: 'siteRole',
                        label: '角色',
                        moduleRight: '2',
                        type: 'module',
                        widgets: [],
                        apiUri: '/console/site-role'
                    }]
                }

            ]
        }

        /**
         * 操作方法集合
         * */
        var actionFunctions = {
            fetchMenuList: function(req, res) {
                var me = self.exports;
                req.accepts('application/json');

                var listObj = {
                    "time": "2019-08-15 11:40:00",
                    "code": 0,
                    "data": menuList,
                    "msg": ""
                }
                global.writeToJson(res, listObj);
            },

            getModuleSettingList: function() {
                return menuList.moduleSettings;
            }
        }

        m.exports = actionFunctions;
    }
    (module));