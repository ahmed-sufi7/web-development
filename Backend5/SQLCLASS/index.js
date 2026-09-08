const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "root",
});

//To access Mysql in terminal (CLI): & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p

try {
  connection.query("SHOW TABLES", (err, results) => {
    if (err) throw err;
    console.log(results);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(getRandomUser());
