//Task 1

function doubleLetter(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        
        newStr += str[i] + str[i];
    }
    return newStr;
}

const doubleLetterResult = doubleLetter("1asdfas23");
console.log(doubleLetterResult);

//---------------------------------------------------

//Task 2

function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    let newString = '';
    let numberOfMissingCharacter = length - str.length;

    for (let i = 0; i < numberOfMissingCharacter; i++) {
        newString += symbol
    }

    return toLeft ? newString + str : str + newString;
}

const pasStringResult = padString("Hi", 6, "-", true);
console.log(pasStringResult);

//---------------------------------------------------

// Task 3

function camelCase(str, separator) {
    let trimmedString = str.trim().toLowerCase();

    let camelCaseString = trimmedString[0];
    
    for (let i = 1; i < trimmedString.length; i++) {
        if (trimmedString[i] == separator) {
            continue;
        } else {
            if (trimmedString[i - 1] == separator){
                camelCaseString += trimmedString[i].toUpperCase();
            } else {
                camelCaseString += trimmedString[i];
            }
            
        }
        
    }
    return camelCaseString;

}

const camelCaseResult = camelCase("    Hello World   to    everybody   ", " ");
console.log(camelCaseResult);