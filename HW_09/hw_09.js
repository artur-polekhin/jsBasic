//Task 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 21];

const func = numbers.filter(item => {
    return item > 1 && item % 2 !==0 ;
})
console.log(func);

//--------------------------------------------------------


// Task 2
const objectsArr = [
    {        
        date: "22.01.2025",
        text: "Hello, I am ojb1",
        source: "Telegram"
    },
    {        
        date: "21.01.2025",
        text: "Hello, I am ojb2",
        source: "Facebook"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb3",
        source: "WhatsUp"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb4",
        source: "WhatsUp"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb5",
        source: "Facebook"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb5",
        source: "Telegram"
    }
]

const resultGroupBy = Object.groupBy(objectsArr, ({source}) => source);
console.log(resultGroupBy);

//--------------------------------------------------------

//Task 3

function groupBy(array, callback) {
    return array.reduce((result, item) => {
        const key = callback(item);
        if (!result[key]) {
            result[key] = []; 
        }
        result[key].push(item); 
        return result;
    }, {});
}

const objectsArr1 = [
    {        
        date: "22.01.2025",
        text: "Hello, I am ojb1",
        source: "Telegram"
    },
    {        
        date: "21.01.2025",
        text: "Hello, I am ojb2",
        source: "Facebook"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb3",
        source: "WhatsUp"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb4",
        source: "WhatsUp"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb5",
        source: "Facebook"
    },
    {        
        date: "20.01.2025",
        text: "Hello, I am ojb5",
        source: "Telegram"
    }
]
const grouped = groupBy(objectsArr1, ({source}) => source);

console.log(grouped)

//--------------------------------------------------------
