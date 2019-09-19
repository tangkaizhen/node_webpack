var express=require('express')
var fs=require('fs')
var app=express()

// 其是主要处理文件上传的
var multer  = require('multer')
// 这是主要创建一个文件夹
var upload = multer({ dest: 'uploads/' })

// 这主要是获得表单页面，根据流的方式
app.get('/form',(req,res)=>{
    res.send(fs.readFileSync('./index.html','utf8'))
})

// upload.single('logo')，其中logo主要是用来标志表单页面中的name='logo'
app.post('/upload',upload.single('logo'),(req,res)=>{
    res.send('上传成功')
})

app.listen(3000)