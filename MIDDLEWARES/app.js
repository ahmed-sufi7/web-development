const express = require("express");
const app = express();

// app.use((req, res,next) => {
//   console.log("Hi, Im 1st middleware");
//   // res.send("Middleware finish");
//   next();
//   console.log("This is after next")
// });

// app.use((req, res,next) => {
//   console.log("Hi, Im 2nd middleware");
//   return next();
//   console.log("This is after next")
// });


//logger
app.use((req,res,next)=>{
  req.responseTime = new Date(Date.now()).toString();
  console.log(req.method,req.hostname, req.path, req.responseTime);
  next();
})

app.get("/", (req, res) => {
  res.send("Hi, Im root");
});

app.get("/random", (req, res) => {
  res.send("This is random page");
});

app.listen(8080, (req, res) => {
  console.log("App is listening to port 8080");
});
