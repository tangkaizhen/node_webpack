var fs=require('fs')

// 以流的方式读写文件，可以让性能更加快，其主要利用buffer机制
var myReadStream=fs.createReadStream(__dirname+'/stream.txt','utf8')
// 监听开始读的时候
myReadStream.on('data',function(msg){
    console.log(msg)
})

// 监听读完的时候
myReadStream.on('end',function(){
    console.log('game over');
})