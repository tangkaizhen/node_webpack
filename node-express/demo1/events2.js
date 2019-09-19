var events=require('events');
var util=require('util');

// 注意这里不能用箭头函数，因为里面有this，使用箭头函数，会改变this的指向
var Person=function(name){
    this.name=name
}
// inherits表示继承
util.inherits(Person,events.EventEmitter)
var zhang=new Person('zhang')
var liu=new Person('liu')
var wen=new Person('wen')

var persons=[zhang,liu,wen]

persons.map(person=>{
    person.on('cry',(msg)=>{
        console.log(person.name+'  '+msg);
    })
})
liu.emit('cry','hahah')