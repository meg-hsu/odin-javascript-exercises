const sumAll = function() {
    nums = []
    for (i = 0; i < arguments.length; i++){
        arg = arguments[i];
        if (!isValid(arg) || i > 2) return 'ERROR';
        nums.push(arg);
    }

    nums.sort();
    currentsum = 0;
    for (i = nums[0]; i <= nums[1]; i++){
        currentsum += i;
    }

    return currentsum;
};

const isValid = function(input){ // Checks if the input is a number that is 0 or positive and is a whole number
    return ((typeof input === 'number') && input >= 0 && (input % 1 === 0));
};

// Do not edit below this line
module.exports = sumAll;
