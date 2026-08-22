function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success data was saved");
    } else {
      reject("Failure: week connection");
    }
  });
}

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
saveToDB("apna college")
  .then(() => {
    console.log("Data 1 saved");
    return saveToDB("apnacollege2")
  })
  .then(()=>{
    console.log("Data 2 saved");
    return saveToDB("Hello world");
  })
  .then(()=>{
    console.log("Data 3 saved");
  })
  .catch(() => {
    console.log("promise was rejected"); //not give error but an log saying the promise was rejected
  });
