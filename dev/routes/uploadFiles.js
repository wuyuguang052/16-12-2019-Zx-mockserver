/**
 * 文件上传
 * author:yg.wu
 */
;
(function(m) {
    var router = require('express').Router(),
        multiparty = require('multiparty'),
        webConfig = require('../config/web'),
        util = require('util'),
        fs = require('fs');

    router.post('/file/uploading', function(req, res, next) {
        //生成multiparty对象，并配置上传目标路径
        var form = new multiparty.Form({ uploadDir: './public/uploads/' });
        // console.log('come on');
        form.parse(req, function(err, fields, files) {
            var filesTemp = JSON.stringify(files, null, 2);
            console.log(err);

            if (err) {
                res.end('{"success":false,"exception":"upload "}');
                return;
            }

            // console.log('file：' + filesTemp);
            // console.log(util.inspect({fields: fields, files: files}));
            // console.log(util.inspect(files.fileImg));

            console.log(files.fileImg);
            res.writeHead(200, { 'content-type': 'text/json;charset=utf-8' });
            res.end('{"success":true,"url":"' + webConfig.fileDomain + files.fileImg[0].path.split('/')[2] + '"}');
        });
    })

    m.exports = router;
}(module));