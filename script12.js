//events and eventEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('mycustomEvent',function(arg1,arg2){
    console.log(arg1 + arg2 );
});
eventEmitter.on('mycustomEvent',function(arg1,arg2,arg3){
    console.log(arg1 + arg2 + arg3);
});
setTimeout(function(){
    eventEmitter.emit('mycustomEvent','string1','and string2', 'and string 3 as well');
},2000)