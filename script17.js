var express =require('express');
var path = require('path');
var fs =require('fs');
var app =('express');
app.use ('/cssFiles', express.static(__dirname + '/assets'));
app.get('/',function(req,resp){
    resp.sendfile('index.html',{root: path.join(__dirname, './files')});
}); 
app.get(/^(.+)$/, function(req,resp){
    try{
        if(fs.statSync(path.join(__dirname, './files/', req.params[0]+'.html')).isFile()){
            resp.sendfile(req.params[0]+'.html',{root: path.join(__dirname,'./files')});
        
        }
    }catch(err){
        console.log(err);
        resp.sendfile('404.html',{root: path.join(__dirname,'./files')});
    }
});