// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//          arr.splice(i, 1); 
//         }
// }
// console.log(arr)




// let number = 287152;
// let count = 0;
// let copy = number;

// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }

// console.log(count);



// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy>0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }

// console.log(sum)







// let n = 4;
// let factorial = 1;

// for ( let i = 1; i<=n; i++){
//     factorial *= i;
// }

// console.log(`Factorial of number ${n} is ${factorial}`);



let arr =  [1,2,10,3,4,5];
let largest = 0;

for (let i = 0; i<arr.length; i++){
    if (arr[i]>largest){
        largest = arr[i];
    }
    
}

console.log(`largest element in array is ${largest}`)