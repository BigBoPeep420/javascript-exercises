const seq = [];
for(let i = 0; i < 30; i++){
    if(i < 2){
        seq.push(i);
    }else{
        seq.push(seq[i-1] + seq[i-2]);
    }
}

const fibonacci = function(i) {
    int = parseInt(i);
    if((int != NaN) && (int >= 0)){
        return seq[int];
    }else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
