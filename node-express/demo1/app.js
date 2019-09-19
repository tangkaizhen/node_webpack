var count=require('./module')
var server=require('./http-html')

// 回调函数
function callFn(fn){
    fn()
}

var sayBye=()=>{
    console.log("bye")
}

// callFn(sayBye)

server.server()

