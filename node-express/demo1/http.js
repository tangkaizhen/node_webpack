var http=require('http')
// req和res均是基于流的方式来写的
var fn=function(req,res){
    console.log('has receive req')
    // 响应头
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("qwers")
    res.end()
}

var server=http.createServer(fn)
// 监听3000端口
server.listen(3000)
console.log('server started')