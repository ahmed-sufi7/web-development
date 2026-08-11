// const sq = (n) => (n*n);

// console.log(sq(3));



let id = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear Interval ran")
}, 10000);