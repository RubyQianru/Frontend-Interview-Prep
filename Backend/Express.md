# Express

# http 模块
node runtime本身自带http模块

'''js
// 通过http模块，创建web应用
var app = http.createServer((req, res) => {
    res.writeHead(200, {"ContentType": "text/plain"})
    res.end('Hello World')
})

// 通过监听端口启动
app.listen(3000, 'localhost')
'''

# Express 框架

‘’‘js
// 导入 express
const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

’‘’

# Express 路由

app.METHOD(PATH, HANDLER)

