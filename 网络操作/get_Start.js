const http=require('http')

// http.createServer((request,response)=>{
//   response.writeHead(200,{
//     'Content-Type':'text/plain'
//   })
//   response.end('Hello,World\n')
//   console.log(request.headers)
// }).listen(8124)

// http.createServer((request,response)=>{
//   const body=[]
//   //log请求体
//   request.on('data',(chunk)=>{
//     body.push(chunk)
//   })

//   request.on('end',()=>{
//     Buffer.concat(body)
//     console.log(body.toString())
//   })

// }).listen('8124')





http.createServer((request,response)=>{
  response.writeHead(200,{
    'Content-type':'text/plain',
    'Connection':'keep-alive'
  })
  console.log(request.method)
  console.log(request.headers)
//  //response the request 
  request.on('data',(chunk)=>{
    response.write(chunk)
  })

  request.on('end',()=>{
    response.end('response end')
  })
}).listen(8124)


