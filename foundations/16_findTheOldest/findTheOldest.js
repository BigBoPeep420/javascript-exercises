const findTheOldest = function(people) {
    return people.reduce((accum, elem) => {
        if(getAge(elem) > getAge(accum)){
            return elem;
        }else{
            return accum;
        }
    }, {yearOfBirth: 3000});
};

function getAge(person){
    if("yearOfDeath" in person){
        return person.yearOfDeath - person.yearOfBirth;
    }else{
        year = new Date().getFullYear();
        return year - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
