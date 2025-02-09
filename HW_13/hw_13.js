//Task 1
function fibCalc(num) {
    if (num <= 2) return 1;

    return fibCalc(num - 1) + fibCalc(num - 2)
}

console.log(fibCalc(10))

//-----------------------------------------------

//Task 2

function getPermutations(arr) {
    if (arr.length === 0) return [[]]; 
    if (arr.length === 1) return [arr]; 

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]; 
        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        let subPermutations = getPermutations(remaining); 
        
        for (let perm of subPermutations) {
            result.push([current, ...perm]);
        }
    }
    
    return result;
}

const arr = [1, 2, 3];
const permutations = getPermutations(arr);
console.log(permutations);


//-----------------------------------------------------------------

// Высесление всех возможных уникальных комбинаций
// function factoril (number) {
//     if (number == 1) return 1
//     return number * factoril(number - 1)
// }

// function calculateArrayPossibility(array) {
//     let arrLenght = array.length;
//     return factoril(arrLenght);
// }


// const array = [1, 2, 3]
// const arraysPossibilityNumber = calculateArrayPossibility(array);


// const finalArray = [];
// finalArray.push([...array]);


// // Проверка наличия массива в массиве массивов
// function checkArray(array, finalArray) {
//     const containsArray = finalArray.some(subArr => 
//         subArr.length === array.length && subArr.every((val, index) => val === array[index])
//     );
//     return containsArray;
// }

// if (!checkArray(array, finalArray)) {
//     finalArray.push([...array])
// } else {
    
// }