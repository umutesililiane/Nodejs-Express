var express = require('express');
var app = express();
console.log(__dirname);
//http://localhost:port/cssfiles
app.use('/cssFiles',express.static(__dirname + '/assets/myStyles.css'));
app.get('/hello there', function(request,response){
    response.send('hello there, from express!')
});
app.listen(1337,function(){
    console.log('listening at port 1337');
});