var http=require('http')
var fs=require('fs')

function server(){
    // req和res均是基于流的方式来写的
    var fn=function(req,res){
        console.log('has receive req')
        // 响应头
        res.writeHead(200,{'Content-Type':'text/html'})
        // pipe:表示将前面的内容复制给后面的内容
        fs.createReadStream(__dirname+'/index.html','utf8').pipe(res)
    }

    var server=http.createServer(fn)
    // 监听3000端口
    server.listen(3000)
}
module.exports={server}
