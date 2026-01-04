const sumAll = function(i1, i2) {
    if((Number.isInteger(i1) && i1 >= 0) && (Number.isInteger(i2) && i2 >= 0)){
    let min = Math.min(i1, i2)
    let max = Math.max(i1, i2)
    console.log(min + " " + max)
    let sum = 0
    for(let i = min; i <= max; i++){
        sum = sum + i;
    }
    console.log(sum);
    return sum;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
