var fs=require('fs')
// 一定要加上编码格式，否则容易出现乱码
var readme=fs.readFileSync('readMe.txt','utf8')
console.log(readme)