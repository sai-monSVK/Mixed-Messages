//Object with message parts

const messageParts = {

firstPart : ['Life ', 'World ', 'Universe ', 'Luck ', 'Your yourney, ', 'Path ', 'Destiny ', 'Love ', 'Imagination ' ],
secondPart : ['is always made of ', 'truly is full of ', 'can be filled with', 'is like ', "is never bad thing, it's like ", 'is like a river always reflect '],
thirdPart : ['beautifull things.', 'shiny rainbows.', 'crazy unicorns.', 'hearthwarming dragons.', 'pandas.', 'bank empolyee.', 'gates of hell.'],

};

//function random number

function randNum(inp) {
        let n = Math.floor(Math.random()*inp);
        return n;
    };

let finalMessage = [];

for (let element in messageParts) {
    let randomIndex = randNum(messageParts[element].length);
        finalMessage.push(messageParts[element][randomIndex]);
}

console.log(finalMessage.join(''));