const repeatString = function(string, num) {

    if (num <0){
        return "ERROR";
    }
    else {
        let finalstring = "";
        for (let i=1;i<=num;i++){
        finalstring = finalstring.concat(string);
        }
        return finalstring;
    }

};

// Do not edit below this line
module.exports = repeatString;
