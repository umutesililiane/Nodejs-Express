//how to read files
var fs = require('fs');
console.log('executed before file reading.');
//this write file is asynchronous function
fs.writeFile('./files/file2', 'hello there what\*up?!', 'utf8',function( error){
if(error) throw error; 
console.log('file written');   
});
console.log('executed after file reading,probably.');

