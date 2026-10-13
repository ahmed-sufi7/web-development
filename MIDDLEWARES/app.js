const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

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
// app.use((req, res, next) => {
//   req.responseTime = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.responseTime);
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi, Im root");
});

app.get("/random", (req, res) => {
  res.send("This is random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req,res)=>{
  throw new ExpressError(401, "Access to admin is forbidden!")
})

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});

//404
// app.use((req, res) => {
//   res.status(404).send("Page not found!");
// });

app.listen(8080, (req, res) => {
  console.log("App is listening to port 8080");
});
