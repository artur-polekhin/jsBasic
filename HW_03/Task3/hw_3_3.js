const userNumber = prompt("Input your number");
const message1 = "Вам "
const message2 = " Рік"
const message3 = " Роки"
const message4 = " Років"

switch (true) {
    case userNumber % 100 != 11 && (userNumber % 10 === 1):
        console.log(message1 + userNumber + message2);
        break;
        
    case (userNumber % 100 != 12) && (userNumber % 100 != 13) && (userNumber % 100 != 14) && ((userNumber > 1 && userNumber < 5) || (userNumber > 20 && userNumber % 10 === 2) || (userNumber > 20 && userNumber % 10 === 3) || (userNumber > 20 && userNumber % 10 === 4)):
    console.log(message1 + userNumber + message3);
    break;

    default:
        console.log(message1 + userNumber + message4);
}
