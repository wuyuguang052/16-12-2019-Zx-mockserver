/**
 * 首页概览列表  新增  更新
 * author:yhhuo
 */
;
(function (m) {
	'use strict';

	var colName = 'adminUser',
	global = require('../common/global'),
	objectID = '001',
	crypto = require('crypto'),
	self = m;

	var multiparty = require('multiparty');

	var successObj = {
		time: "2019-03-14 18:53:43",
		code: 0,
		data: {},
		msg: ''
	}

	/**
	 * 操作方法集合
	 * */
	var actionFunctions = {

		// 基于位置的故障排行
		faultOfPos: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"code": 0,
				"data": {
					"currentTime": "2019-05-06",
					"facility": [{
							"name": "Exaleap Henderson China/北京环球金融中心/WFC-Basement",
							"value": 4
						}, {
							"name": "Exaleap Henderson China/北京环球金融中心/WFC-East Tower",
							"value": 4
						}, {
							"name": "Exaleap Henderson China/北京环球金融中心/WFC-West Tower",
							"value": 4
						}
					]
				},
				"msg": "",
				"time": "2019-05-06 14:32:30"
			}
			global.writeToJson(res, listObj);
		},


		// 基于警报
		alarm: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"time": new Date().getTime(),
				"code": 0,
				"data": [{
						"name": "ALL",
						"count": 18,
						"list": [{
								"location": "WFC-West Tower/W-06 Floor",
								"detail": "AHU-FD-016 CO2 sensor faulty",
								"time": "2019-03-15 12:23"
							}, {
								"location": "WFC-East Tower/E-19 Floor",
								"detail": "Damper open for long hours",
								"time": "2019-03-15 12:23"
							}, {
								"location": "WFC-East Tower/E-15 Floor",
								"detail": "Damper open for long hours",
								"time": "2019-03-15 12:23"
							}, {
								"location": "WFC-East Tower/E-03 Floor",
								"detail": "AHU-FD-028A VFD permanently at full load",
								"time": "2019-03-15 12:23"
							}, {
								"location": "WFC-West Tower/W-04 Floor",
								"detail": "Damper open for long hours",
								"time": "2019-03-15 12:23"
							}
						]
					}, {
						"name": "CRITICAL",
						"count": 1,
						"list": [{
								"location": "WFC-West Tower/W-06 Floor",
								"detail": "AHU-FD-016 CO2 sensor faulty",
								"time": "2019-03-15"
							}
						]
					}
				],
				"msg": ""
			}
			global.writeToJson(res, listObj);
		},
		// 警报组成类型
		alarmCom: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"time": new Date().getTime(),
				"code": 0,
				"data": {
					"currentTime": "2019-04-29 ~ 2019-05-05",
					"alarmType": {
						"device": 22344,
						"energy": 88
					}
				},
				"msg": ""
			}
			global.writeToJson(res, listObj);
		},
		// 访客
		guest: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"time": new Date().getTime(),
				"code": 0,
				"data": {
					"flowToday": '127854',
					"flowGuest": "14569",
					"enterFail": "1458",
					"highTime": ['10:00-11:00', '16:00-18:00'],
					"workCount": 2
				},
				"msg": ""
			}
			global.writeToJson(res, listObj);
		},
		// 工单
		workorder: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"code": 0,
				"data": {
					"week": [{
							"dealingWork": 1,
							"finishedWork": 2,
							"timePoint": "2019-06-10",
							"totalWork": 3
						}, {
							"dealingWork": 1,
							"finishedWork": 2,
							"timePoint": "2019-06-11",
							"totalWork": 3
						}
					],
					"today": {
						"dealingWork": 2,
						"finishedWork": 0,
						"timePoint": "2019-05-06",
						"totalWork": 2
					}
				},
				"msg": "",
				"time": "2019-05-06 14:33:44"
			}
			global.writeToJson(res, listObj);
		},
		// 区域客流统计获取设备
		queryRegionFlowDevice: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"time": new Date().getTime(),
				"code": 0,
				"data": [{
						"locationId": "c13e0e1b-821f-443a-ae37-173aeea006b9",
						"locationName": "WFCS100790361",
						"locationDevices": [{
								"deviceId": "WFC001",
								"deviceName": "设备1",
							}, {
								"deviceId": "WFC002",
								"deviceName": "设备2",
							}
						]
					}, {
						"locationId": "a33e0e1b-823f-443a-ae37-173aeea033df",
						"locationName": "WFCS100790362",
						"locationDevices": [{
								"deviceId": "WFC003",
								"deviceName": "设备3",
							}, {
								"deviceId": "WFC004",
								"deviceName": "设备4",
							}
						]
					}
				],
				"msg": ""
			}
			global.writeToJson(res, listObj);
		},
		queryRegionFlowCount: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"time": new Date().getTime(),
				"code": 0,
				"data": {
					"locationId": "c13e0e1b-821f-443a-ae37-173aeea006b9",
					"timePeriod": "07-02 12:12 ~ 07-02 15:12",
					"deviceId": "",
					"records": [{
							"time": "01:00",
							"totalPassenger": 56,
							"goInCount": 14,
							"goOutCount": -12,
							"netPassenger": 7
						}, {
							"time": "02:00",
							"totalPassenger": 45,
							"goInCount": 15,
							"goOutCount": -18,
							"netPassenger": 7
						}, {
							"time": "03:00",
							"totalPassenger": 78,
							"goInCount": 45,
							"goOutCount": -12,
							"netPassenger": 7
						},
					]
				},
				"msg": ""
			}
			global.writeToJson(res, listObj);
		},
		queryRegionFlowReport: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"code": 0,
				"data": [{
						"deviceId": "",
						"deviceName": "",
						"locationId": "",
						"locationName": "所有区域",
						"records": [{
								"goInCount": 4,
								"goOutCount": -5,
								"netPassenger": -1,
								"time": "00:00",
								"totalPassenger": 9
							}, {
								"goInCount": 4,
								"goOutCount": -3,
								"netPassenger": 1,
								"time": "01:00",
								"totalPassenger": 7
							}, {
								"goInCount": 0,
								"goOutCount": -4,
								"netPassenger": -4,
								"time": "02:00",
								"totalPassenger": 4
							}, {
								"goInCount": 3,
								"goOutCount": -2,
								"netPassenger": 1,
								"time": "03:00",
								"totalPassenger": 5
							}, {
								"goInCount": 3,
								"goOutCount": -5,
								"netPassenger": -2,
								"time": "04:00",
								"totalPassenger": 8
							}, {
								"goInCount": 2,
								"goOutCount": -4,
								"netPassenger": -2,
								"time": "05:00",
								"totalPassenger": 6
							}, {
								"goInCount": 52,
								"goOutCount": -41,
								"netPassenger": 11,
								"time": "06:00",
								"totalPassenger": 93
							}, {
								"goInCount": 244,
								"goOutCount": -129,
								"netPassenger": 115,
								"time": "07:00",
								"totalPassenger": 373
							}, {
								"goInCount": 644,
								"goOutCount": -534,
								"netPassenger": 110,
								"time": "08:00",
								"totalPassenger": 1178
							}, {
								"goInCount": 564,
								"goOutCount": -448,
								"netPassenger": 116,
								"time": "09:00",
								"totalPassenger": 1012
							}, {
								"goInCount": 292,
								"goOutCount": -271,
								"netPassenger": 21,
								"time": "10:00",
								"totalPassenger": 563
							}, {
								"goInCount": 564,
								"goOutCount": -258,
								"netPassenger": 306,
								"time": "11:00",
								"totalPassenger": 822
							}, {
								"goInCount": 876,
								"goOutCount": -576,
								"netPassenger": 300,
								"time": "12:00",
								"totalPassenger": 1452
							}, {
								"goInCount": 572,
								"goOutCount": -480,
								"netPassenger": 92,
								"time": "13:00",
								"totalPassenger": 1052
							}, {
								"goInCount": 348,
								"goOutCount": -333,
								"netPassenger": 15,
								"time": "14:00",
								"totalPassenger": 681
							}, {
								"goInCount": 244,
								"goOutCount": -180,
								"netPassenger": 64,
								"time": "15:00",
								"totalPassenger": 424
							}, {
								"goInCount": 276,
								"goOutCount": -256,
								"netPassenger": 20,
								"time": "16:00",
								"totalPassenger": 532
							}, {
								"goInCount": 392,
								"goOutCount": -296,
								"netPassenger": 96,
								"time": "17:00",
								"totalPassenger": 688
							}
						],
						"timePeriod": ""
					}, {
						"deviceId": "22",
						"deviceName": "22",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615002",
						"deviceName": "餐厅设备B",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615001",
						"deviceName": "餐厅设备A",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "",
						"deviceName": "所有设备",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": ""
					}, {
						"deviceId": "KL00220190615006",
						"deviceName": "4楼B",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615005",
						"deviceName": "4楼道B",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615004",
						"deviceName": "4楼道",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "",
						"deviceName": "所有设备",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "00:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "01:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "02:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "03:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "04:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "05:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "06:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "07:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "08:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "09:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "10:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "11:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "12:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "13:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "14:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "15:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "16:00",
								"totalPassenger": 0
							}, {
								"goInCount": 0,
								"goOutCount": 0,
								"netPassenger": 0,
								"time": "17:00",
								"totalPassenger": 0
							}
						],
						"timePeriod": ""
					}, {
						"deviceId": "",
						"deviceName": "所有设备",
						"locationId": "15818035-d9cc-42a9-a364-5f17228c50df",
						"locationName": "E501",
						"records": [{
								"goInCount": 4,
								"goOutCount": -5,
								"netPassenger": -1,
								"time": "00:00",
								"totalPassenger": 9
							}, {
								"goInCount": 4,
								"goOutCount": -3,
								"netPassenger": 1,
								"time": "01:00",
								"totalPassenger": 7
							}, {
								"goInCount": 0,
								"goOutCount": -4,
								"netPassenger": -4,
								"time": "02:00",
								"totalPassenger": 4
							}, {
								"goInCount": 3,
								"goOutCount": -2,
								"netPassenger": 1,
								"time": "03:00",
								"totalPassenger": 5
							}, {
								"goInCount": 3,
								"goOutCount": -5,
								"netPassenger": -2,
								"time": "04:00",
								"totalPassenger": 8
							}, {
								"goInCount": 2,
								"goOutCount": -4,
								"netPassenger": -2,
								"time": "05:00",
								"totalPassenger": 6
							}, {
								"goInCount": 52,
								"goOutCount": -41,
								"netPassenger": 11,
								"time": "06:00",
								"totalPassenger": 93
							}, {
								"goInCount": 244,
								"goOutCount": -129,
								"netPassenger": 115,
								"time": "07:00",
								"totalPassenger": 373
							}, {
								"goInCount": 644,
								"goOutCount": -534,
								"netPassenger": 110,
								"time": "08:00",
								"totalPassenger": 1178
							}, {
								"goInCount": 564,
								"goOutCount": -448,
								"netPassenger": 116,
								"time": "09:00",
								"totalPassenger": 1012
							}, {
								"goInCount": 292,
								"goOutCount": -271,
								"netPassenger": 21,
								"time": "10:00",
								"totalPassenger": 563
							}, {
								"goInCount": 564,
								"goOutCount": -258,
								"netPassenger": 306,
								"time": "11:00",
								"totalPassenger": 822
							}, {
								"goInCount": 876,
								"goOutCount": -576,
								"netPassenger": 300,
								"time": "12:00",
								"totalPassenger": 1452
							}, {
								"goInCount": 572,
								"goOutCount": -480,
								"netPassenger": 92,
								"time": "13:00",
								"totalPassenger": 1052
							}, {
								"goInCount": 348,
								"goOutCount": -333,
								"netPassenger": 15,
								"time": "14:00",
								"totalPassenger": 681
							}, {
								"goInCount": 244,
								"goOutCount": -180,
								"netPassenger": 64,
								"time": "15:00",
								"totalPassenger": 424
							}, {
								"goInCount": 276,
								"goOutCount": -256,
								"netPassenger": 20,
								"time": "16:00",
								"totalPassenger": 532
							}, {
								"goInCount": 392,
								"goOutCount": -296,
								"netPassenger": 96,
								"time": "17:00",
								"totalPassenger": 688
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "",
						"deviceName": "所有设备",
						"locationId": "15818035-d9cc-42a9-a364-5f17228c50df",
						"locationName": "E501",
						"records": [{
								"goInCount": 4,
								"goOutCount": -5,
								"netPassenger": -1,
								"time": "00:00",
								"totalPassenger": 9
							}, {
								"goInCount": 4,
								"goOutCount": -3,
								"netPassenger": 1,
								"time": "01:00",
								"totalPassenger": 7
							}, {
								"goInCount": 0,
								"goOutCount": -4,
								"netPassenger": -4,
								"time": "02:00",
								"totalPassenger": 4
							}, {
								"goInCount": 3,
								"goOutCount": -2,
								"netPassenger": 1,
								"time": "03:00",
								"totalPassenger": 5
							}, {
								"goInCount": 3,
								"goOutCount": -5,
								"netPassenger": -2,
								"time": "04:00",
								"totalPassenger": 8
							}, {
								"goInCount": 2,
								"goOutCount": -4,
								"netPassenger": -2,
								"time": "05:00",
								"totalPassenger": 6
							}, {
								"goInCount": 52,
								"goOutCount": -41,
								"netPassenger": 11,
								"time": "06:00",
								"totalPassenger": 93
							}, {
								"goInCount": 244,
								"goOutCount": -129,
								"netPassenger": 115,
								"time": "07:00",
								"totalPassenger": 373
							}, {
								"goInCount": 644,
								"goOutCount": -534,
								"netPassenger": 110,
								"time": "08:00",
								"totalPassenger": 1178
							}, {
								"goInCount": 564,
								"goOutCount": -448,
								"netPassenger": 116,
								"time": "09:00",
								"totalPassenger": 1012
							}, {
								"goInCount": 292,
								"goOutCount": -271,
								"netPassenger": 21,
								"time": "10:00",
								"totalPassenger": 563
							}, {
								"goInCount": 564,
								"goOutCount": -258,
								"netPassenger": 306,
								"time": "11:00",
								"totalPassenger": 822
							}, {
								"goInCount": 876,
								"goOutCount": -576,
								"netPassenger": 300,
								"time": "12:00",
								"totalPassenger": 1452
							}, {
								"goInCount": 572,
								"goOutCount": -480,
								"netPassenger": 92,
								"time": "13:00",
								"totalPassenger": 1052
							}, {
								"goInCount": 348,
								"goOutCount": -333,
								"netPassenger": 15,
								"time": "14:00",
								"totalPassenger": 681
							}, {
								"goInCount": 244,
								"goOutCount": -180,
								"netPassenger": 64,
								"time": "15:00",
								"totalPassenger": 424
							}, {
								"goInCount": 276,
								"goOutCount": -256,
								"netPassenger": 20,
								"time": "16:00",
								"totalPassenger": 532
							}, {
								"goInCount": 392,
								"goOutCount": -296,
								"netPassenger": 96,
								"time": "17:00",
								"totalPassenger": 688
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}
				],
				"msg": "",
				"time": "2019-07-16 17:49:36"
			}
			global.writeToJson(res, listObj);
		},

		// 空气质量图表数据
		queryAirCount: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"time": new Date().getTime(),
				"code": 0,
				"data": {
					"locationId": "c13e0e1b-821f-443a-ae37-173aeea006b9",
					"timePeriod": "07-02 12:12 ~ 07-02 15:12",
					"deviceId": "",
					"records": [{
							"time": "01:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "02:00",
							"humidity": 23,
							"temperature": 12
						}, {
							"time": "03:00",
							"humidity": 45,
							"temperature": 23
						},
					]
				},
				"msg": ""
			}
			global.writeToJson(res, listObj);
		},
		querAirReport: function (req, res) {
			var me = self.exports;
			req.accepts('application/json');
			let listObj = {
				"code": 0,
				"data": [{
						"deviceId": "",
						"deviceName": "",
						"locationId": "",
						"locationName": "所有区域",
						"records": [{
								"humidity": 21,
								"temperature": 12,
								"time": "00:00"
							}, {
								"time": "01:00",
								"humidity": 12,
								"temperature": 13
							}, {
								"time": "02:00",
								"humidity": 21,
								"temperature": 23
							}, {
								"time": "03:00",
								"humidity": 23,
								"temperature": 14
							}, {
								"time": "04:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "05:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "06:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "07:00",
								"humidity": 56,
								"temperature": 14
							}
						],
						"timePeriod": ""
					}, {
						"deviceId": "22",
						"deviceName": "22",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
							"humidity": 21,
							"temperature": 12,
							"time": "00:00"
						}, {
							"time": "01:00",
							"humidity": 12,
							"temperature": 13
						}, {
							"time": "02:00",
							"humidity": 21,
							"temperature": 23
						}, {
							"time": "03:00",
							"humidity": 23,
							"temperature": 14
						}, {
							"time": "04:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "05:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "06:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "07:00",
							"humidity": 56,
							"temperature": 14
						}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615002",
						"deviceName": "餐厅设备B",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
							"humidity": 21,
							"temperature": 12,
							"time": "00:00"
						}, {
							"time": "01:00",
							"humidity": 12,
							"temperature": 13
						}, {
							"time": "02:00",
							"humidity": 21,
							"temperature": 23
						}, {
							"time": "03:00",
							"humidity": 23,
							"temperature": 14
						}, {
							"time": "04:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "05:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "06:00",
							"humidity": 56,
							"temperature": 14
						}, {
							"time": "07:00",
							"humidity": 56,
							"temperature": 14
						}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615001",
						"deviceName": "餐厅设备A",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
								"humidity": 21,
								"temperature": 12,
								"time": "00:00"
							}, {
								"time": "01:00",
								"humidity": 12,
								"temperature": 13
							}, {
								"time": "02:00",
								"humidity": 21,
								"temperature": 23
							}, {
								"time": "03:00",
								"humidity": 23,
								"temperature": 14
							}, {
								"time": "04:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "05:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "06:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "07:00",
								"humidity": 56,
								"temperature": 14
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "",
						"deviceName": "所有设备",
						"locationId": "1eab8c98-4a86-4e23-b9ec-74d5d2e9e9ce",
						"locationName": "E302",
						"records": [{
								"humidity": 21,
								"temperature": 12,
								"time": "00:00"
							}, {
								"time": "01:00",
								"humidity": 12,
								"temperature": 13
							}, {
								"time": "02:00",
								"humidity": 21,
								"temperature": 23
							}, {
								"time": "03:00",
								"humidity": 23,
								"temperature": 14
							}, {
								"time": "04:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "05:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "06:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "07:00",
								"humidity": 56,
								"temperature": 14
							}
						],
						"timePeriod": ""
					}, {
						"deviceId": "KL00220190615006",
						"deviceName": "4楼B",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"humidity": 21,
								"temperature": 12,
								"time": "00:00"
							}, {
								"time": "01:00",
								"humidity": 12,
								"temperature": 13
							}, {
								"time": "02:00",
								"humidity": 21,
								"temperature": 23
							}, {
								"time": "03:00",
								"humidity": 23,
								"temperature": 14
							}, {
								"time": "04:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "05:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "06:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "07:00",
								"humidity": 56,
								"temperature": 14
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "KL00220190615005",
						"deviceName": "4楼道B",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"humidity": 21,
								"temperature": 12,
								"time": "00:00"
							}, {
								"time": "01:00",
								"humidity": 12,
								"temperature": 13
							}, {
								"time": "02:00",
								"humidity": 21,
								"temperature": 23
							}, {
								"time": "03:00",
								"humidity": 23,
								"temperature": 14
							}, {
								"time": "04:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "05:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "06:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "07:00",
								"humidity": 56,
								"temperature": 14
							}
						],
						"timePeriod": "2019-07-16 00:00:00 ~ 2019-07-16 17:49:35"
					}, {
						"deviceId": "",
						"deviceName": "所有设备",
						"locationId": "82e6a983-8cd2-4d5b-a7ff-e419d8fbf170",
						"locationName": "E402",
						"records": [{
								"humidity": 21,
								"temperature": 12,
								"time": "00:00"
							}, {
								"time": "01:00",
								"humidity": 12,
								"temperature": 13
							}, {
								"time": "02:00",
								"humidity": 21,
								"temperature": 23
							}, {
								"time": "03:00",
								"humidity": 23,
								"temperature": 14
							}, {
								"time": "04:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "05:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "06:00",
								"humidity": 56,
								"temperature": 14
							}, {
								"time": "07:00",
								"humidity": 56,
								"temperature": 14
							}
						],
						"timePeriod": ""
					}
				],
				"msg": "",
				"time": "2019-07-16 17:49:36"
			}
			global.writeToJson(res, listObj);
		},
	}


	m.exports = actionFunctions;
}
	(module));
