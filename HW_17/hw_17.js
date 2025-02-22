// Task 1

function randomDelayPrint(message) {
    for(char of message) {
        setTimeout(() => {
            console.log(char);
        },parseInt(Math.random() * 1000));
    };
}

randomDelayPrint("message");

//----------------------------------------------------


// Task 3

function firstFunction() {
    console.log("i am a FIRST function");
    return true;
}

function secondFunction() {
    console.log("i am a SECOND function");
    return false;
}
function thirdFunction() {
    console.log("i am a THIRD function");
    return undefined;
}


function intervalRace(array, t) {
    const myArray = []
    let counter = 0;

    function myFunc() {
        if (counter < array.length) {
            let result = array[counter]();
            myArray.push(result);
            counter++;
            setTimeout(myFunc, t);
            
        }
        return myArray;
    }

    myFunc();
    
}

const array = [firstFunction, secondFunction, thirdFunction];
intervalRace(array, 1000);




