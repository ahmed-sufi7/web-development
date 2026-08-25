const figlet = require('figlet');

figlet("Aaqa Ki Aamad, MARHABA", function (err, data) {
 if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  } 
  console.log(data);
});