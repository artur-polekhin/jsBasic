//Task 1
function capitalizeStrings(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        let arrayElemnt = array[i].trim();
        const updateArrayElement = arrayElemnt.charAt(0).toUpperCase() + arrayElemnt.slice(1).toLowerCase();
        newArray.push(updateArrayElement);
    }
    return newArray;
}

const someArray = ["  asdfSDFK", "hEakse", "er23kj  "];
const resultCapitalizeStrings = capitalizeStrings(someArray);
console.log(resultCapitalizeStrings); 

//----------------------------------------------------------

//Task2
function findCommonElements(array1, array2) {
    let newArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !newArray.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (array1.includes[array2[i]] && !newArray.includes(array2[i])) {
            newArray.push(array1[i]);
        }
    }
    return newArray
}

const someArray1 = [1, 2, 3, 4, 5, 1 , 2];
const someArray2 = [3, 4, 5, 6, 7, 3, 3];
const resulFtindCommonElements = findCommonElements(someArray1, someArray2);
console.log(resulFtindCommonElements);

//----------------------------------------------------------

//Task 3
function analyzeArray(numbersArray) {
    let sum = 0;
    let average = 0;
    let min = numbersArray[0];
    let max = numbersArray[0];
    let newObject = {};
    
    for (i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];

        if (min > numbersArray[i]) {
            min = numbersArray[i];
        }
        
        if (max < numbersArray[i]) {
            max = numbersArray[i];
        }
    }

    average = (sum / 2).toFixed(2);

    newObject = {
        sum: sum,
        averageNumber: average,
        manimalNumber: min,
        maximalNumber: max
    }
    return newObject;
}

const numberArray = [5, 1, 4, 2, 3];
const resultAnalyzeArray = analyzeArray(numberArray);
console.log(resultAnalyzeArray);

//----------------------------------------------------------