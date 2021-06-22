// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
 // } 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

//wrapGifts(gifts);


function writeCards(array, event) {
    let emptyArray = [];
    for(let i = 0; i<array.length; i++){
        let msg1 = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        emptyArray.push(msg1);
    }
    return emptyArray;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday"); ;

function countDown(int) {
    while (int >= 0) {
        console.log(int--);
    }
}