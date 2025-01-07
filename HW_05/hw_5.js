//Вам необхідно написати функцію reverseString(str),
//яка приймає на вхід рядок і повертає його у зворотному порядку.
// найбільший спільний делитель


// Task 1
function reverseString(str) {
    let newStr = '';
    for(let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
const result = reverseString("dog");
console.log(result);
//----------------------------------


// Task 2
function isPalindrome(str) {
    if (reverseString(str) === str) {
        console.log(str + " є паліндромом")
    } else {
        console.log(str + " не є паліндромом")
    }
    
}

isPalindrome("gog");
//----------------------------------

// Task 3
function lowerNumber(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else if (a === b) {
        return a;
    }
}

function findGCD(a, b) {
    let resultLowerNumber = lowerNumber(a, b);
    for (i = resultLowerNumber; i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            return i;
        }
        resultLowerNumber--;
        }
   }

const resultFindGCD = findGCD(42,54);
console.log(resultFindGCD);