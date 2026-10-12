const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("Hi, Im middleware");
  res.send("Middleware finish");
});

app.get("/", (req, res) => {
  res.send("Hi, Im root");
});

app.get("/random", (req, res) => {
  res.send("This is random page");
});

app.listen(8080, (req, res) => {
  console.log("App is listening to port 8080");
});
