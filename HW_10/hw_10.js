//Task 1
const myMap = new Map();
myMap.set(1, 1);
myMap.set(2, 4);

function sqr(x, cache) {

    if (cache.has(x)) {
        return cache.get(x);
    } else {
        const sqrNum = Math.pow(x, 2);
        cache.set(x, sqrNum);
        return cache.get(x);
    }

}
const sqrResult = sqr(3, myMap);
console.log(sqrResult);


//Task 2
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


resultGroupBy[Symbol.iterator] = function () {
    const sources = Object.keys(this);
    let sourceIndex = 0;
    let itemIndex = 0;
    const self = this; 

    return {
        next() {
            if (sourceIndex >= sources.length) {
                return { done: true };
            }

            const currentSource = sources[sourceIndex];
            const currentItems = self[currentSource];

            if (itemIndex >= currentItems.length) {
                sourceIndex++;
                itemIndex = 0;

                return this.next(); 
            }

            const currentItem = currentItems[itemIndex];
            itemIndex++;

            return { value: currentItem, done: false };
        }
    };
}

for (obj of resultGroupBy) {
    console.log(obj)
}