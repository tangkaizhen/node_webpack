var events=require('events');

var myEmitter=new events.EventEmitter();

myEmitter.on('myEvent',(msg)=>{
    console.log(msg);
})

myEmitter.emit('myEvent','我叫唐凯震')