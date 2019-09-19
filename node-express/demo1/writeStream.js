var fs=require('fs')

var myWriteStram=fs.createWriteStream(__dirname+'/writeStream.txt')

myWriteStram.write('这是根据流的方式写的qqqq')
myWriteStram.end()
myWriteStram.on('finish',function(){
    console.log('写流结束');
})
