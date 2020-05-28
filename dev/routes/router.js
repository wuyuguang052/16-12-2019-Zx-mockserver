/**
 * 这里需要node路由拦截
 * author:yg.wu
 * 注意的是路由是有顺序的，如果路由路径大致相同的话，路由路径长的需要放在上部优先进入相关处理逻辑。
 */
var express = require('../../');


// 引入route
var loginCtrl = require('../controlls/login'); //用户登录 controll
var dashboard = require('../controlls/dashboard'); //首页面板controll

var router = express.Router();

/********************************* 登陆接口 **************************************/
/**
 * 登陆
 * */
router.post('/console/login', loginCtrl.doLogin);
router.post('/console/logout', loginCtrl.doLoginout);
router.get('/console/account-management/validation', loginCtrl.getUser);
router.put('/console/admin/password', loginCtrl.updatePassword);

//管理员
router.get('/console/account-management/account', loginCtrl.getAdminUsers);
router.get('/console/account-management', loginCtrl.getAdminUsers); // 客户模块查看管理员
router.get('/console/account-management/account/:id', loginCtrl.fetchAdmin);
router.post('/console/account-management/account', loginCtrl.addAdminUser);
router.put('/console/account-management/account', loginCtrl.updateAdminUser);
router.delete('/console/account-management/account/password', loginCtrl.updatePassword);

router.get('/console/site-role/:id', loginCtrl.getRolesInfo);
router.get('/console/site-role', loginCtrl.getRoles);
router.delete('/console/site-role/:id', loginCtrl.deleteRolesInfo);
router.post('/console/site-role', loginCtrl.addRole);
router.put('/console/site-role/:id', loginCtrl.updateRole);

router.put('/console/account-management/account/:id/enabled', loginCtrl.updateAdminUser);
router.put('/console/account-management/account/status', loginCtrl.updateAdminUser); // 更改账户状态，包括激活，禁用，启用
router.post('/console/account-management/account/activation-email', loginCtrl.updateAdminUser); // 发送激活邮件





/********************************* dashboard相关 **************************************/
//参数要求   ?startAt=2019/11/11&endAt=2019/11/22&sales=[]
//startAt : 开始时间
//endAt : 结束时间
//sales : 销售

//接入订单数分布数 （pieChart）
router.get('/overview/access-order', dashboard.accessOrder);
//人均接入订单数 （barChart）
router.get('/overview/access-order-avg', dashboard.accessOrderAverage);

//活跃订单数分布
router.get('/overview/active-order', dashboard.ActiveOrder);
//人均活跃订单数
router.get('/overview/active-order-avg', dashboard.ActiveOrderAverage);

//团队接入订单趋势 (周、月、季度)
router.get('/overview/access-team-order', dashboard.accessTeamOrder);
//人均接入订单趋势 (周、月、季度)
router.get('/overview/access-team-order-avg', dashboard.accessTeamOrderAverage);

//团队活跃订单趋势 (周、月、季度)
router.get('/overview/active-team-order', dashboard.ActiveTeamOrder);
//人均接活跃订单趋势 (周、月、季度)
router.get('/overview/active-team-order-avg', dashboard.ActiveTeamOrderAverage);


//获取销售下拉列表数据
router.get('/sales', dashboard.salesList);


module.exports = router;