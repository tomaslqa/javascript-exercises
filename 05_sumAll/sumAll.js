const sumAll = function (num1, num2) {
    let sum = 0;
    let error = "ERROR";
    console.log(typeof min);
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0 || num1 % 1 != 0 || num2 % 1 != 0) {
        return error;
    }
    else {
        let min = Math.min(num1, num2);
        let max = Math.max(num1, num2);
        for (i = min; i <= max; i++) {
            sum += i;
        } return sum;
    }
};


// Do not edit below this line
module.exports = sumAll;
