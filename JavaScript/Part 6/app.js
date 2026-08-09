// function printPoen() {
//     console.log("Twinkle Twkinkle, Little star");
// }

// printPoen();



// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }

// rollDice();



// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }

// printInfo("Ahmed Raza", 18);
// printInfo("Ahmed Raza");   // Ahmed Raza's age is undefined


// Higher Order Function
function multGreet(func, count) {
    for(let i = 1; i<=count; i++){
        func();
    }
}


let greet = function(){
    console.log("Hello");
}

multGreet(greet,10)