function construct_func(){
    var nameHolder;
    return{
      name:function(fName,lName){
        nameHolder =fName +' '+ lName;
      },
          consolelog : function(){
            console.log(nameHolder);
    }
      }  
    }
module.exports = construct_func;