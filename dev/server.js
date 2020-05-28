/**
 * 路由入口
 * author:yg.wu
 */
var express = require('../');
const app = express();
const path = require('path');
const body = require('body-parser');
const session = require('express-session');
const router = require('./routes/router');

app.all("*", function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    // res.header("Access-Control-Allow-Headers", "*");

    // safari需要这么设置才能通过，设置为*的话会报错的
    res.header("Access-Control-Allow-Headers", "X-API-Version,X-Client-Type,X-API-Language,Content-Type,X-Auth-Token,X-Client-Site-Id,X-Client-Env-Id");
    res.header("Access-Control-Expose-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})

//ajax请求依赖的中间件
app.use(body.urlencoded({
    extended: true
}));
app.use(body.json());
//ajax请求依赖的中间件

app.use(router);

app.use(require('./routes/uploadFiles'));
app.listen(8080, function() {
    // var host = server.address().address;
    // var port = server.address().port;
    console.log('MockServer Started => localhost:18001');
});