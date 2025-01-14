//Task 1
function reverseArray(array) {
    let newArr = [];

    for (let i = array.length-1; i >= 0;  i--) {
        newArr[newArr.length] = array[i];
    }
    return newArr;
}
const reverseArrayResult = reverseArray([1, 2, 3, 4, 5]);
console.log(reverseArrayResult);
//--------------------------------------------------------


//Task 2
function uniqueValues(array1, array2) {
    let uniqArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (!uniqArray.includes(array1[i])) {
            uniqArray[uniqArray.length] = array1[i];
        }    
    }

    for (let i = 0; i < array2.length; i++) {
        if (!uniqArray.includes(array2[i])) {
            uniqArray[uniqArray.length] = array2[i];
        }
    }

    return uniqArray;
}

const resultUniqueValues = uniqueValues([1, 2, 3, 4, 5, 11], [3, 4, 5, 6, 7]);
console.log(resultUniqueValues);
//--------------------------------------------------------


//Task 3
function calculateAverageGrade(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i].everageGrade;
    }
    
    sum = sum / array.length;

    return Number(sum.toFixed(2));
}

const students = [
    {
        age: 23,
        name: "Atos",
        everageGrade: 66
    },
    {
        age: 25,
        name: "Portos",
        everageGrade: 74
    },
    {
        age: 26,
        name: "Aramis",
        everageGrade: 41
    }
]

const resultCalculateAverageGrade = calculateAverageGrade(students);
console.log(resultCalculateAverageGrade);
//--------------------------------------------------------
 
