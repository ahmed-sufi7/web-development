// let sum = (a, b) => { 
//     console.log(a + b); 
// };


// let sum = (a,b) => (a+b); //Inplicit return ie automatic return


// // setInterval(() => {
// //     console.log("Apna college")
// // }, 2000)



let arr = [{
    name: "John",
    age: 21,
    city: "New York"
}, {
    name: "Jane",
    age: 22,
    city: "Los Angeles"
}, {
    name: "Bob",
    age: 23,
    city: "Chicago"
}];


arr.forEach((student) => {
    console.log(student.name);
})