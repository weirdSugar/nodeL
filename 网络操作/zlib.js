const zlib=require('zlib')
const http=require('http')
/**
 * zlib模块提供 压缩 解压 功能
 * 首先判断是否支持gzip
 */


//压缩

http.createServer((request,response)=>{
  let i=1024,data=''
  while(i--){
    data+=i
  }
  if((request.headers['accept-encoding'] || '').includes('gzip')){
    zlib.gzip(data,(err,data)=>{
      if(err){
        console.error(err)
      }else{
        response.writeHead(200,{
          'Content-Type':'text-plain',
          'Content-Encoding':'gzip'
        })
        response.end(data)
      }
    })
  }else{
    response.writeHead(200, {
      'Content-Type': 'text-plain',
    })
    response.end(data)
  }
}).listen(8124)
