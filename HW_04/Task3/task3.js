const userNumber = prompt("Input your number");
let spaceSign = "";
let starSign = "*";

for (i = 0; i < userNumber; i++) {
    spaceSign += " ";
}

for (i = 0; i < userNumber; i++ ) {
    spaceSign = spaceSign.slice(0, -1);
    console.log(spaceSign + starSign + spaceSign);
    starSign += "**";
}




