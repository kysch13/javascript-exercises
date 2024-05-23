const sumAll = function(numA, numB) {
    if (typeof numA != 'number' || typeof numB != 'number' || numA < 0 || numB < 0) {
        return 'ERROR';
    } else if (numA <= numB) {
        let arraySum = 0;
        for (let i=numA; i<=numB; i++) {
            arraySum += i;
        }
        return arraySum;
    } else if (numA > numB) {
        let arraySum = 0;
        for (let i=numB; i<=numA; i++) {
            arraySum += i;
        }
        return arraySum;
    }
};

// Do not edit below this line
module.exports = sumAll;
