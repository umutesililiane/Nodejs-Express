var express = require('express');
var app = express();
app.get('/hello there', function(request,response){
    response.send('hello there, from express!')
});
app.listen(1337,function(){
    console.log('listening at port 1337');
});