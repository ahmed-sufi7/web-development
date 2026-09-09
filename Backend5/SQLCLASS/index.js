const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "root",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// console.log(getRandomUser());

//To access Mysql in terminal (CLI): & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p

app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]["COUNT(*)"]); //we can write key value for array like this ["COUNT(*)"]
      // res.send(result[0]["COUNT(*)"]);
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

app.get("/users", (req, res) => {
  let q = "SELECT * FROM `user`";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // console.log(users)
      res.render("showUsers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

// connection.end(); //no connnection end as the app.get will automatically close the connection after the query is executed.

app.listen("8080", () => {
  console.log("App is listening to post 8080");
});

// try {
//   connection.query(q, [data], (err, results) => {
//     if (err) throw err;
//     console.log(results);
//   });
// } catch (err) {
//   console.log(err);
// }
