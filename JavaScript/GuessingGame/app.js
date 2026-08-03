const max = prompt("Please enter the maximum number:");

const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the numer:");

while (true) {
    if (random == "quit") {
        console.log("User quit")
        break;
    } else if (random == guess) {
        console.log("You're Guess is correct, the number is :", random);
        break;
    } else if (random < guess) {
        guess = prompt("Hint: The random number is smaller");
    } else if (random > guess) {
        guess = prompt("Hint: The random number is larger");
    }
}