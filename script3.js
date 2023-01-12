var http = require ('http');
var server = http.createServer(engine);
server.listen(1337,function(){
console.log('server was hit by a request');
});
// server.createServer(engine).listen(1337); 
function engine(request,response) {
    // console.log(response);
    response.writeHead(200,{'content-Type': 'text/plain'});
    response.end('hey there, from the server!:D. Request from pages' + request.url); //return the url that is being requested by the client

}
// const path =require('path');
// console.log(`the file name is ${path.basename(__filename)}`);