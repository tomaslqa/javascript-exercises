const repeatString = function(string, num) {
    let newString=string;
    for(let i=1; i<num; i++){
        newString=newString+string;
    } return newString;

};

// Do not edit below this line
module.exports = repeatString;
