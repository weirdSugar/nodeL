const url=require('url')
const http=require('http')
/**  URL的组成
                           href
 -----------------------------------------------------------------
                            host              path
                      --------------- ----------------------------
 http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
 -----    ---------   --------   ---- -------- ------------- -----
protocol     auth     hostname   port pathname     search     hash
                                                ------------
                                                   query
 */


 /**
.resolve方法可以用于拼接URL，示例如下。
*/
console.log(url.resolve('http://www.example.com/foo/bar', '../baz'))
console.log('\n\n')
/* =>
http://www.example.com/baz
?????????
*/



 //parse 方法将URL字符串变成 URL对象
console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash'))
/* =>
{ protocol: 'http:',
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/


/**
 * parse 方法不需要完整的 url， 如 http 回调函数中 
 * request.url 只有port之后的内容 
 */
http.createServer(function (request, response) {
  var tmp = request.url; // => "/foo/bar?a=b"
  console.log(url.parse(tmp))
/* =>
{ protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?a=b',
  query: 'a=b',
  pathname: '/foo/bar',
  path: '/foo/bar?a=b',
  href: '/foo/bar?a=b' }
*/
}).listen(8124)


/**
 * parse 方法还有第 二三个 布尔参数， 
 * 第二个true  query字段变为 querystring 转后的参数对象
 * 第三个true  可正确解析不带协议的url
 */


//querystring模块用于实现URL参数字符串与参数对象的互相转换，示例如下。
querystring.parse('foo=bar&baz=qux&baz=quux&corge');
/* =>
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
*/

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
/* =>
'foo=bar&baz=qux&baz=quux&corge='
*/
