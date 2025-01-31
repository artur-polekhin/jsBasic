//Task 1
function returnArgs(...args){ return args }

function logArguments(returnArgs) {
    return function(...args) {
        args.forEach((elem) => console.log(elem));
        return returnArgs.apply(this, args);
    }
}

const decorLogArguments = logArguments(returnArgs);
const resultDecorArguments = decorLogArguments(1, 2, 3, "a");
console.log(resultDecorArguments)


//Task 2
function sum(...args) {
    const result = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return result
}


function validate(sum, validator) {
    return function(...args) {
        args.forEach((elem) => {
            if (elem < validator) {
                throw "The array contains negative number(s)"
            }
        })
        return sum.apply(this, args);
    }
}

const validateSum = validate(sum, 0);
const resultValedateSum = validateSum(1, 2, 3, 4, 5);
console.log(resultValedateSum);


