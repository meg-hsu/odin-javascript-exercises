const reverseString = function(input) {
    let reversed = "";
    for (i = 0; i < input.length; i++){
        reversed = input.at(i) + reversed;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;