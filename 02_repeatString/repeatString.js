const repeatString = function(word, num) {
    if (num == 0) return "";
    if (num > 0){
        repeated = "";
        do {
            repeated = repeated + word;
            num--;
        } while (num > 0);
        return repeated;
    } 
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
