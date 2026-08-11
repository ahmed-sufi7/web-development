// let arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr){
//         total += number;
//     }
//     return total/arr.length;
// }

// arr = [1,2,3,4,5,6]
// console.log(arrayAverage(arr))




// let isEven = (num) => {
//     if (num%2 == 0){
//         console.log("the number is even")
//     } else {
//         console.log("the number is odd")
//     }
// }

// isEven(9);



const object = { message: 'Hello,World!', logMessage() { console.log(this.message); } }; 
setTimeout(object.logMessage(), 1000);