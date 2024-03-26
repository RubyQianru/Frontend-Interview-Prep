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

‘’‘
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

### GET

'''js
app.get('/', (req, res) => {
    res.send()
})
'''

### POST

'''js
app.post('/', (req, res) => {
    res.send()

})
'''

### PUT

'''js
app.put('/', (req, res) => {
    res.send()
    
})
'''

### DELETE

'''js
app.delete('/', (req, res) => {
    res.send()
    
})
'''

# nodemon

热部署工具

nodemon app.js

# 路由模块化

‘’‘
// 导入 express
const express = require('express')

// 创建router对象
var router = express.Router()

router.get('/',(req, res) => {
    res.send('Hello World')
})

router.post('/', (req, res) => {
    res.send()
})

module.exports = router

'''

‘’‘
// 导入 express
const express = require('express')
const router = require('./router_demo)
const app = express()

//为所有路由加上前缀
app.use('/user',router)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

’‘’