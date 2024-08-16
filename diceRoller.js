console.log("Dice roller file loaded");

// Function that rolls a dice
// generic dice roller function
function rollDice(diceSize = 6) {
    console.log("Dice rolling function has been called with a dice size of " + diceSize);

    // generate random number between 0 and 1
    // multiply number by dice size so that it's between 0 and diceSize
    //          multiplied number is between 0 and (diceSize - 1)
    //          e.g. diceResult of 10 is 0-19
    // round the diceResult down to the nearest whole number
    // add one to prevent it from being 0
    // diceResult is now anything between 1 and 20 inclusive
    let diceResult = Math.random() * diceSize;

    let floorDiceResult = Math.floor(diceResult) + 1;
    let ceilDiceResult = Math.ceil(diceResult);

    console.log(floorDiceResult, ceilDiceResult);
}

// rollDice(); // dice size is 6
rollDice(20);   // diceSize is 20
// rollDice(10000);    //diceSize is 10000

// Function that rolls a dice and the dice is a 6-sided dice

// Function that rolls a dice and the dice is a 20-sided dice