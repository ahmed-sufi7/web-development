const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Neha",
    to: "Prya",
    msg: "Send me your exams sheets",
    created_at: new Date(),
  },
  {
    from: "Ahmed",
    to: "Raza",
    msg: "You will achieve everyting you have imagined",
    created_at: new Date(),
  },
  {
    from: "Raza",
    to: "Aftab",
    msg: "Amazing",
    created_at: new Date(),
  },
  {
    from: "Hamza",
    to: "Hasnain",
    msg: "Hii",
    created_at: new Date(),
  },
  {
    from: "Mustafa",
    to: "Ahmed",
    msg: "How are you",
    created_at: new Date(),
  },
  {
    from: "Mom",
    to: "Ahmed",
    msg: "Take care",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
