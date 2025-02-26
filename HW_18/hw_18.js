function sumArrayPromise(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            sum = arr.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 3000);
    })    
}

const arr = [5, 10, 2];
sumArrayPromise(arr).then((result) => console.log(result));