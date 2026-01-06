const palindromes = function (s) {
    let str = Array.from(s.toLowerCase()).filter(char => /^[a-zA-Z]$/.test(char));
    let rev = str.toReversed();
    return str.join("").localeCompare(rev.join("")) == 0;
};

// Do not edit below this line
module.exports = palindromes;
