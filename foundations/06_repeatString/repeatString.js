const repeatString = function(strToRpeat, repeatNum) {
    if(repeatNum < 0){
        return "ERROR";
    } else {
        let finalStr = "";
        for(let i = 0; i < repeatNum; i++){
            finalStr = finalStr + strToRpeat
        }
        console.log(finalStr);
        return finalStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
