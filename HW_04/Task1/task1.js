const userNumber = prompt("Enput your number");
const messagePrimeNumber = "This is a prime number";
const messageNotPrimeNumber = "This is not a prime number";

if (userNumber <= 2) {
    console.log(messageNotPrimeNumber);
} else {
    for (i = 2; i < userNumber; i++) {
        if (userNumber % i !== 0) {
            if (i = userNumber - 1) {
                console.log(messagePrimeNumber);
            }
            continue
            
            
        } else {
            console.log(messageNotPrimeNumber);
            break;
        }
    }
}