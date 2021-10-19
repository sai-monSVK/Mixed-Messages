// Fields with messages parts. 

const firstPart = ['Life ', 'World ', 'Universe ', 'Luck ', 'Your yourney, ', 'Path ', 'Destiny ', 'Love ', 'Imagination ' ];
const secondPart = ['is always made of ', 'truly is full of ', 'can be filled with', 'is like ', "is never bad thing, it's like ", 'is like a river always reflect '];
const thirdPart = ['beautifull things.', 'shiny rainbows.', 'crazy unicorns.', 'hearthwarming dragons.', 'pandas.', 'bank empolyee.', 'gates of hell.'];

//function for pick random string from array

function randNum(arr) {
        let n = Math.floor(Math.random()*arr.length);
        return n;
    };


//create variables for every part

let a = randNum(firstPart);
let b = randNum(secondPart);
let c = randNum(thirdPart);


//func for mixed messages
function mixedMessages() {
    let message = firstPart[a] + secondPart[b] + thirdPart[c];    
    return message;
}

console.log(mixedMessages());

