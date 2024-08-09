const removeFromArray = function() {
    inputArr = arguments[0];
    removeArr = [];
    indices = [];

    for (i = 1; i < arguments.length; i++){ // Add all items to be removed to an array
        removeArr.push(arguments[i]);
    }

    for (inputIndex = 0; inputIndex < inputArr.length; inputIndex++){
        found = false; // Make index marker
        for (remIndex = 0; remIndex < removeArr.length; remIndex++){ 
            if (!found){ 
                if (inputArr[inputIndex] === removeArr[remIndex]){
                    indices.push(inputIndex); // Record index of number to be removed
                    found = true; // Marks number as found
                }
            }
        }
    }
    indices.reverse();
    console.log(indices);

    for (i = 0; i < indices.length; i++){ // for each index
        inputArr.splice(indices[i], 1);
    }

    console.log(inputArr);
    return inputArr;
};

// Do not edit below this line
module.exports = removeFromArray;