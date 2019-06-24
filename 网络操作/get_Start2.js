const http=require('http')

const options = {
  hostname: '0.0.0.0',
  port: 8124,
  path: '/',
  method: 'POST',
  headers: {
    'Content-type': 'text/plain',
    'Connection':'keep-alive'
  }
}

let request = http.request(options, (response) => {
  const body=[]
  console.log(response.headers)
  response.on('data',(chunk)=>{
    body.push(chunk)
  })
  response.on('end',()=>{
    body.concat()
    console.log(body.toString())
  })
})

request.write('this is the request sent')
request.end()