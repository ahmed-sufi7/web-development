const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
  .then(() => {
    console.log("Coneection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: 48
// });

// user1.save();

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:50},
//     {name:"peter",email:"peter@gmail.com",age:50},
//     {name:"bruice",email:"beuice@gmail.com",age:50},
// ]).then((data)=>{
//     console.log(data);
// });

// User.find({age:{$gt:48}}).then((res) => {
//   console.log(res[0].name);
// });

User.findOneAndUpdate({ name: "tony" }, { age: 55 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.find().then((res) => {
//   console.log(res);
// });
