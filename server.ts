import * as http from 'http'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  console.log('****************')
  console.log(`${req.method} ----- ${req.url}`)
  console.log('****************')

  // 设置响应头
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  // 判断请求方法，这里简单处理 GET 请求
  if (req.method === 'GET' && req.url === '/getTest') {
    res.end('Hello World!\n')
  } else {
    res.statusCode = 404
    res.end('404 Not Found')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
