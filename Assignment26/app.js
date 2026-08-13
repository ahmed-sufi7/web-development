// arr = [1,2,3,4,5];

// let square = arr.map((num)=>num*num);
// console.log(square)

// let sum = arr.reduce((acc,cur)=>acc+cur);
// console.log(sum);

// let avg = sum/arr.length;

// console.log(avg);








// arr = [1,2,3,4,5];
// console.log(arr.map((num)=>num+5));


// let strings = ["adam","bob","catlyn","donald","eve"];
// console.log(strings.map ((string)=>string.toUpperCase()));


// const doubleAndReturnArgs = (arr, ...args) => [...arr, arr.map((v) => v * 2)];

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });