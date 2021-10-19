//Object with message parts

const messageParts = {

firstPart : ['Life ', 'World ', 'Universe ', 'Luck ', 'Your yourney, ', 'Path ', 'Destiny ', 'Love ', 'Imagination ' ],
secondPart : ['is always made of ', 'truly is full of ', 'can be filled with', 'is like ', "is never bad thing, it's like ", 'is like a river always reflect '],
thirdPart : ['beautifull things.', 'shiny rainbows.', 'crazy unicorns.', 'hearthwarming dragons.', 'pandas.', 'bank empolyee.', 'gates of hell.'],
};

//function for pick random string from array

function randNum() {
        let n = Math.floor(Math.random());
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

