arr = [1,2,3,4,5];

let square = arr.map((num)=>num*num);
console.log(square)

let sum = arr.reduce((acc,cur)=>acc+cur);
console.log(sum);

let avg = sum/arr.length;

console.log(avg);