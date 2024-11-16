import * as http from 'http'

const hostname = '127.0.0.1'
const port = 3000

const options: http.RequestOptions = {
  host: hostname,
  port: port,
  path: '/getTest',
  method: 'GET',
}

const req = http.request(options, (res) => {
  let data = ''

  // 监听数据
  res.on('data', (chunk) => {
    data += chunk
  })

  // 监听结束
  res.on('end', () => {
    console.log('Response from server' + data)
  })
})

req.on('error', (error) => {
  console.error(error)
})

// 发送请求
req.end()
