const userNumber = prompt("Input your nubmer");
const messagePerfectNumber = "This is a perfect number: ";
const messageDoNotContainPerfectNumber = "Your digit doesn't contain a perfect number";

if (userNumber < 6) console.log(messageDoNotContainPerfectNumber);

for (i = 6; i <= userNumber; i++) {
    let sum = 0;
    for (j = 1; j < i; j++) {
        if(Number.isInteger(i / j)) {
            sum += j;
            
        }
    }
    if (sum == i) {
        console.log(messagePerfectNumber + i);

    } 
}
