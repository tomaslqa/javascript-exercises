const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^A-Za-z0-9\s]/g, "");
    string = string.replace(/\s/g, "");
    const array = string.split("");
    let reversedArr = array.reverse();
    let reversedString = reversedArr.join("");
    console.log(reversedString);
    if (string == reversedString) {
        return true;
    } else {
        return false;
    }
}


// Do not edit below this line
module.exports = palindromes;
