var express=require('express')
var app=express()
var bodyParser = require('body-parser')
// bodyParser是個中间件，其运行于请求和响应之间，对请求进行解析
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/home/:id',(req,res)=>{
    // 注意需要取动态路由的值，可以通过req.params的方式 
    var id=req.params.id
    // 如果想获得查询参数，可以根据req.query,蛀牙获得url？name='tlz'

    res.send(req.query.name)
})

app.post('/',(req,res)=>{
    res.send(req.body)
})
app.listen(3000)