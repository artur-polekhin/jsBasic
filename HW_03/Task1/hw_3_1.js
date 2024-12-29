const userNumber = prompt("Input a number");
const numberIsDevisibleBy3 = "Fizz";
const numberIsDevisibleBy5 = "Buzz";
const numberIsDevisibleBy3and5 = numberIsDevisibleBy3 + numberIsDevisibleBy5;


if (userNumber % 3 === 0 && userNumber % 5 === 0) {
    console.log(numberIsDevisibleBy3and5);
} else if (userNumber % 3 === 0) {
    console.log(numberIsDevisibleBy3);
} else if (userNumber % 5 === 0) {
    console.log(numberIsDevisibleBy5);   
}