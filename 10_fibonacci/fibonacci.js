const fibonacci = function(x) {
    x = Number(x);
    if (x<0) {
        return 'OOPS';
    }
    const seq = [];
    let temp = 0;
    for (let i = 0; i < x; i++) {
      	if (i === 0) {
            temp = 1;
        } else if (i === 1) {
            temp = seq[i-1];
        } else {
            temp = seq[i-1] + seq[i-2];
        }
        seq.push(temp);
    }
    if (x === 0) {
        return 0;
    }
    return seq[x-1];
};
// Do not edit below this line
module.exports = fibonacci;
