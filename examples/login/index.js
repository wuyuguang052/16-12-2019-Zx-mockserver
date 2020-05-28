var http = require('http');
var cheerio = require('cheerio');

var express = require('../..');
var bodyParser = require('body-parser')
var app = express();
 app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","*");
	
	res.header("Access-Control-Expose-Headers","*");
	
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

var metaData= {
	'description':'',
	'keywords':'',
	'statusCode':-1
}

var adminUser= {
	"currentTime":"2019-02-25 17:18:53",
	"data":{
		"custom":{},
		"list":[],
		"obj":{
			"age":null,
			"companyId":"",
			"companyName":"",
			"createAt":null,
			"email":"admin@126.com",
			"employeeId":"",
			"firstLoginAt":"2019-02-23 19:11:38",
			"grantAt":null,
			"grantState":null,
			"groupId":"web_user_111",
			"groupName":"name_admin",
			"headImgUrl":"",
			"id":"111",
			"lastLoginAt":null,
			"lastUpdateAt":"2019-02-25 16:43:06",
			"loginFailCount":0,
			"loginName":"admin",
			"name":"name_admin",
			"nickname":"",
			"password":"5cc3bd55f6bc09124110cd862950f925",
			"phone":"8618810606906",
			"roleId":"role_111",
			"roleName":"admin",
			"rootUser":1,
			"sex":0,
			"state":null,
			"token":"f647682d8fc46603d0007228b5543130",
			"type":null
		},
		"pageNum":0,
		"pageSize":0,
		"total":0
	},
	"errors":{
		"code":"",
		"message":""
	},
	"httpCode":200,
	"success":true
}
 
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
 
app.post('/api/v1/web/login', function (req, res) {
	var params = req.body
 
	//getMetaInfor(params.url)
	 
	res.json(adminUser);
})

app.get('/api/v1/web/user/111', function (req, res) {
	var params = req.body
 
	//getMetaInfor(params.url)
	 
	res.json(adminUser);
}) 
 
var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
 
console.log('服务器已经启动');
});
 
 
function getMetaInfor(url) {
	var html = ''
 
	http.get(url,function(res){
		res.on('data',function(data){
			html += data
		})
		res.on('end',function(){
			var $ = cheerio.load(html)
		
			metaData.description = $('meta[name="description"]').attr('content')
			metaData.keywords = $('meta[name="keywords"]').attr('content')
			metaData.statusCode = 200
 
		})
	}).on('error',function(){
		console.log('error')
	})
 
}
