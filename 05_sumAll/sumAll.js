const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return `ERROR`;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return `ERROR`;
    let finalNumber = 0 ;
    if (num1 < num2) {
        for( num1; num1 <= num2; num1++) {
            finalNumber += num1;
        }
    } else if (num1 > num2) {
        for( num2; num2 <= num1; num2++) {
            finalNumber += num2;
        }
    }
    return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;
