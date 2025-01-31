//Task1
function summarize(num) {

    return function(arg = 1) {
        return num + arg;
    }
}

const mySummarize = summarize(5);
const resultMySummarize = mySummarize();
console.log(resultMySummarize);

//-------------------------------------------

function counter(startValue, step) {
    let counter = startValue;

    return function() {
        return {
            increment: function() {
                counter += step;
                return counter;
            },
            decrement: function() {
                counter -= step;
                return counter;
            },
            reset: function() {
                counter = 0;
                return counter;
            }
        }
        
    }
}

const myCounter = counter(5, 2);
const result = myCounter();
result.increment();
result.increment();
console.log(result.increment());
console.log(result.decrement());
console.log(result.reset());