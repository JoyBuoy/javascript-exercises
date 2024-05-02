const removeFromArray = function() {
   const count = arguments[0].length;
   let finalArray = [];
   const argumentLength = arguments.length;
   argumentLength = argumentLength-1;

   for(let i = 0;i<count;i++){
    for(let n=1; n<=argumentLength;n++){
        if(arguments[0][i]!=arguments[n]){
            finalArray.push(arguments[0][i]);
        }
    }
   }
   return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
