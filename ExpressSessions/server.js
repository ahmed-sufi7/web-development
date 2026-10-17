const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  console.log(req.session.name)
  res.redirect("/hello")
});

app.get("/hello", (req, res)=>{
    res.send(`Hello, ${req.session.name}`)
})

app.listen(3000, (req, res) => {
  console.log("app is listening to port 3000");
});
