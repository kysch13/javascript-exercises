const palindromes = function (text) {
    const cleanText = text.replace(/[^\w\s\']|_/g, '').replace(/\s+/g, '').toLowerCase();
    let reverse = '';
    for (let i = cleanText.length-1; i>=0; i--) {
        reverse = reverse+cleanText[i];
    }
    return cleanText === reverse;
};

    console.log(palindromes('r3ace3car'));  

// Do not edit below this line
module.exports = palindromes;
