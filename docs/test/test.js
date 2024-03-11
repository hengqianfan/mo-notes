const http = require('http')

// 创建服务对象
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('已收到请求')
})

// 端口监听，服务启动
server.listen(8080,()=>{console.log('启动成功');})
