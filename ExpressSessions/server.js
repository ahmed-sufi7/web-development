const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const flash = require("connect-flash");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  // console.log(req.session.name);
  req.flash("success", "user registered successfully")
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });
});

app.listen(3000, (req, res) => {
  console.log("app is listening to port 3000");
});
