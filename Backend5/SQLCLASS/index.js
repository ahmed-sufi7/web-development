const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

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
  ]
};

// console.log(getRandomUser());

//To access Mysql in terminal (CLI): & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
q = "INSERT INTO user(id,username,email, password) values ?";
let data = [];
for (i = 0; i < 100; i++) {
  data.push(getRandomUser());
};

try {
  connection.query(q, [data], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
} catch (err) {
  console.log(err);
}

connection.end();
