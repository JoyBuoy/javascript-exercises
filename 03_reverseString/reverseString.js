const reverseString = function(string) {
    const givenArray = string.split("");
    // get the length of the array
    // run the loop those many times with the index from backwards.
    // then convert this new array into a string.
    noOfChar = givenArray.length;
    let revArray = [];
    let n=0;
    for (let i=0;i<noOfChar;i++){
        revArray[i] = givenArray[noOfChar-n-1];
        n++;
    }

    revString = revArray.join("");
    return revString;

};

// Do not edit below this line
module.exports = reverseString; 
