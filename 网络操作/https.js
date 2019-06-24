/**
 * https模块与http模块极为类似，
 * 区别在于https模块需要额外处理SSL证书。
 */

var options = {
  key: fs.readFileSync('./ssl/default.key'),//私钥
  cert: fs.readFileSync('./ssl/default.cer')//公钥
};

var server = https.createServer(options, function (request, response) {
  // ...
});



/**
 * nodejs 还可以为同一服务器上的不同域名 动态使用不同的证书
 */
server.addContext('foo.com', {
  key: fs.readFileSync('./ssl/foo.com.key'),
  cert: fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
  key: fs.readFileSync('./ssl/bar.com.key'),
  cert: fs.readFileSync('./ssl/bar.com.cer')
});