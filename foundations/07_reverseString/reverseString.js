const reverseString = function(strToRev) {
    let finalStr = "";
    for (const element of strToRev) {
        finalStr = element + finalStr;
    }
    console.log(finalStr);
    return finalStr;
};

// Do not edit below this line
module.exports = reverseString;
