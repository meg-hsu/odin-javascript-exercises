const palindromes = function (input = "") {
    //input string to array
    let phrase = Array.from(input);
    let parsedPhrase = [];
    for (i = 0; i < phrase.length; i++){
        if (isAlphaNumeric(phrase[i])){
            parsedPhrase.push(phrase[i].toLowerCase());
        }
    }

    let spacer = 0;
    if (parsedPhrase.length % 2 != 0){ 
        spacer = (parsedPhrase.length-1)/2;
        parsedPhrase.splice(spacer, 1);
    } else {
        spacer = parsedPhrase.length/2;
    }

    let firstHalf = parsedPhrase.splice(0, spacer);
    let secondHalf = parsedPhrase.splice(-spacer, parsedPhrase.length);
    let revSecondHalf = secondHalf.reverse();

    //compare the two together!
    for (i = 0; i < firstHalf.length; i++){
        if (!isSameChar(firstHalf[i], revSecondHalf[i])) {
            return false;
        }
    }
    return true;
};

function isAlphaNumeric(character){
    if ((character.trim() !== "")){
        if ((character.toLowerCase() != character.toUpperCase()) || (Number.isInteger(+character))){
            return true;
        }
    }
    return false;
}

function isSameChar(char1, char2){
    return char1 == char2;
}

// Do not edit below this line
module.exports = palindromes;