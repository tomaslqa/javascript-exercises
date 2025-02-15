const fibonacci = function (num) {
    const fibo = [0, 1];
    if (num < 0) {
        return "OOPS"
    } else {
        for (i = 2; i <= num; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        } return fibo[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
