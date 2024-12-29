const userNumber = prompt("Input your number of the year")
const messageLeapYear = ("This is a leap year");
const messageNotLeapYear = ("This is not a leap year");

if (userNumber % 400 === 0 || (userNumber % 100 != 0 && userNumber % 4 === 0)) {
    console.log(messageLeapYear)
} else {
   console.log(messageNotLeapYear);
}
