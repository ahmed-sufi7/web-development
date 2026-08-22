// function saveToDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success data was saved");
//     } else {
//       reject("Failure: week connection");
//     }
//   });
// }

// let request = saveToDB("apna college");
// // console.log(request); //it will print error when the promise is rejected
// request
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected"); //not give error but an log saying the promise was rejected
//   });

// Promise chaining to prevent callback hell
// saveToDB("apna college")
//   .then((result) => {
//     console.log("Data 1 saved");
//     console.log("result of promise:", result);
//     return saveToDB("apnacollege2")
//   })
//   .then((result)=>{
//     console.log("Data 2 saved");
//     console.log(result);
//     return saveToDB("Hello world");
//   })
//   .then((result)=>{
//     console.log("Data 3 saved");
//     console.log(result);

//   })
//   .catch((error) => {
//     console.log("promise was rejected"); //not give error but an log saying the promise was rejected
//     console.log(error);
//   });

// async function greet() {
// //   throw "random error";
//   return "hello";
// }

// greet()
//   .then((result) => {
//     console.log("promise resolved", result);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });


let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            if(num<4){
                reject("promise rejected")
            }
            h1.style.color = color;
            console.log("color changed to ", color);
            resolve("color changed");
        }, delay);
    })
}

async function demo() {
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
    } catch (err) {
        console.log("error caught");
        console.log(err)
    }
    

    let a = 4;
    console.log(a);  
    
}