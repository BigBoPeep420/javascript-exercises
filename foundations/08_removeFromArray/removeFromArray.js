const removeFromArray = function(arrayToMod, ...items) {
    console.log(arrayToMod);
    finalArray = [];
    for (const element of arrayToMod) {
        if(items.indexOf(element) < 0){
            finalArray.push(element);
        }
    }
    console.log(finalArray);
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
