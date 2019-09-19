var fs=require('fs')
// 创建一个目录，采用回调函数实现异步操作，是的无阻塞运行程序
fs.mkdir('stuff',function(){

    fs.readFile('readMe.txt','utf8',function(err,data){
        
        fs.writeFile('./stuff/write.txt',data,function(){
            console.log('write success')
        })
    })
})
