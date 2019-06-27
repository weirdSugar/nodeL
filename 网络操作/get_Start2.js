const http=require('http')
const zlib=require('zlib')
const options = {
  hostname: '0.0.0.0',
  port: 8124,
  path: '/',
  method: 'POST',
  headers: {
    'Content-type': 'text/plain',
    'Connection':'keep-alive',
    'Accept-Encoding':'gzip, deflate'
  }
}

let request = http.request(options, (response) => {
  const body=[]
  console.log(response.headers)
  console.log(response.url)
  response.on('data',(chunk)=>{
    body.push(chunk)
  })
  response.on('end',()=>{
    const data =Buffer.concat(body)
    if((response.headers['content-encoding'] || '').includes('gzip')){
      zlib.gunzip(body,(err,data)=>{
        if(err){
          console.error(err)
        }else{
          console.log(data.toString())
        }
      })
    }else{
      console.log(data)
    }
  })
})

request.write('this is the request sent')
request.end()