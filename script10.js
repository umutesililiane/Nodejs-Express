//how to read files
var fs = require('fs');
console.log('executed before file reading.');
//this read file is asynchronous function
fs.readFile('./files/file','utf8',function(error,data){
    console.log(data);
});
console.log('executed after file reading,probably.');


//this is asynchronous becaouse the output comes like: first line,last line,middle line.


//for synchronous you will need to do this
//var data = fs.readfilesync('./files/file','UTF8');
//console.log(data);

//for synchronous function we don't need a callback function