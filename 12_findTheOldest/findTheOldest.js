function compareNumbers(num1, num2){
    if (num1 > num2) return 1;
    if (num1 == num2) return 0;
    if (num1 < num2) return -1;
}

const findTheOldest = function(array) {
    let birthYears = array.map(person => +person.yearOfBirth);
    let deathYears = array.map(person => +person.yearOfDeath);

    for (i = 0; i < deathYears.length; i++){
        if (isNaN(+deathYears[i])) deathYears[i] = 2024;
    }

    let ages = deathYears.map((deathYear) => +deathYear - +birthYears.shift());
    let len = ages.length;
    let oldest = 0;
    let indexOldest = 0;

    for (i = 0; i < len; i++){
        let curAge = ages.shift()
        if ((Number.isInteger(+curAge))){
            if (oldest < curAge){
                oldest = curAge;
                indexOldest = i;
            }
        }
    }

    let oldestPerson = array[indexOldest];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
