/**
 * 登录、管理员
 * author:yg.wu
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

	var adminUserObj = {
		"currentTime": "2019-02-25 17:18:53",
		"data": {
			"custom": {},
			"list": [],
			"obj": {
				"age": null,
				"companyId": "",
				"companyName": "",
				"createAt": null,
				"email": "admin@126.com",
				"employeeId": "",
				"firstLoginAt": "2019-02-23 19:11:38",
				"grantAt": null,
				"grantState": null,
				"groupId": "web_user_111",
				"groupName": "name_admin",
				"headImgUrl": "",
				"id": "111",
				"lastLoginAt": null,
				"lastUpdateAt": "2019-02-25 16:43:06",
				"loginFailCount": 0,
				"loginName": "admin",
				"name": "name_admin",
				"nickname": "",
				"password": "5cc3bd55f6bc09124110cd862950f925",
				"phone": "8618810606906",
				"roleId": "role_111",
				"roleName": "admin",
				"rootUser": 1,
				"sex": 0,
				"state": null,
				"token": "f647682d8fc46603d0007228b5543130",
				"type": null
			},
			"pageNum": 0,
			"pageSize": 0,
			"total": 0
		},
		"errors": {
			"code": "",
			"message": ""
		},
		"httpCode": 200,
		"success": true
	}
	/**
	 * 操作方法集合
	 * */
	var actionFunctions = {

		/**
		 * 登录
		 * */
		doLogin: function (req, res) {
			// var arg = url.parse(req.url, true).query;
			var me = self.exports;
			req.accepts('application/json');

			let name = req.body['loginName'];
			let pwd = req.body['password'];
			let env = req.body['identifier'];

			var form = new multiparty.Form();
			form.parse(req, function (err, fields, files) {
				console.log(fields);
				
				let name = fields['loginName'];
				let pwd = fields['password'];
				let env = fields['identifier'];

				var Cookies = {};
				/*req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
				var parts = Cookie.split('=');
				Cookies[parts[0].trim()] = (parts[1] || '').trim();
				});*/ 
				//res.cookie('sessionID', req.cookies.sessionID, { maxAge: 60000 });//设置cookie过期


				if (name && pwd) {

					global.writeToJson(res, adminUserObj);

				} else {
					var outputObj = {
						"currentTime": "2019-02-25 17:18:53",
						"data": {
							"custom": {},
							"list": [],
							"obj": {},
							"pageNum": 0,
							"pageSize": 0,
							"total": 0
						},
						"errors": {
							"code": "",
							"message": "登录失败"
						},
						"httpCode": 200,
						"success": false
					}
					
					global.writeToJson(res, outputObj);
				};
				

			});

		},
		
		getAdminUsers: function (req, res) {
			var me = self.exports;
			var _data = req.query;
			if (_data) {
				_data.sort_name = new RegExp(_data.sort_name, 'gi');
			}
			var pageIndex = _data.page != undefined ? parseInt(_data.page) : undefined;
			var pageSize = _data.limit != undefined ? parseInt(_data.limit) : undefined;

			var outputObj = {
				success: true,
				total: 0,
				result: [],
				exception: err ? err : ''
			};
			if (result.length > 0) {
				outputObj.success = true;
				outputObj.total = result.length;
				outputObj.result = result;
			}
			global.writeToJson(res, outputObj);

		},

		addAdminUser: function (req, res) {
			var me = self.exports;
			var values = req.body[0];
			values['password'] = crypto.createHash('md5').update(values['password']).digest('hex');

			try {
				var loginUserId = req.session.user._id;
				var editTime = global.getDate();
				values['adminId'] = loginUserId ? new objectID(loginUserId) : '';
				values['editDateTime'] = editTime;
			} catch (err) {}

			try {
				//values = [{ 'account':'','pwd':'', 'status':0, 'addDate':'' }];
				delete values['_id'];

				global.writeToJson(res, {
					success: true,
					exception: '账户名称已存在'
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

		updateAdminUser: function (req, res) {
			var me = self.exports;
			if (req.body.length > 0) {
				var _data = req.body[0];
				_data['password'] = crypto.createHash('md5').update(_data['password']).digest('hex');

				var filter = {
					'_id': new objectID(_data['_id'])
				}
				try {
					var loginUserId = req.session.user._id;
					var editTime = global.getDate();
					_data['adminId'] = loginUserId ? new objectID(loginUserId) : '';
					_data['editDateTime'] = editTime;
				} catch (err) {}

				try {
					delete _data['_id'];

					var outputObj = {
						success: result.result.ok ? true : false,
						exception: err ? err : ''
					}
					global.writeToJson(res, outputObj);

				} catch (err) {
					var outputObj = {
						success: false,
						exception: err ? err : ''
					}
					global.writeToJson(res, outputObj);
					throw new Error('{ "status":"0","error":"' + err.message + '" }');
				}
			} else {
				global.writeToJson(res, {
					success: false,
					exception: 'no data'
				});
			}

		},

		deleteAdminUser: function (req, res) {
			var _dataList = req.body;
			var filters = {
				_id: {
					$in: []
				}
			};
			for (var i = 0; i < _dataList.length; i++) {
				var item = _dataList[i]['_id'];
				var oId = new objectID(item);
				filters._id['$in'].push(oId);
			}
			try {
				var outputObj = {
					success: result.result.ok ? true : false,
					exception: err ? err : ''
				}

				global.writeToJson(res, outputObj);
			} catch (err) {
				var outputObj = {
					success: false,
					exception: err ? err : ''
				}
				global.writeToJson(res, outputObj);
				throw new Error('{ "status":"0","error":"' + err.message + '" }');
			}

		}

		

	}

	m.exports = actionFunctions;
}
	(module));
