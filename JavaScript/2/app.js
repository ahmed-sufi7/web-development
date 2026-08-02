let favMovie = "Spider-man";

let guess = prompt("Guess my fav movie");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess! Please try again!");
}



if (guess == favMovie){
    console.log("congrats!");
} else {
    console.log("You Quit")
}