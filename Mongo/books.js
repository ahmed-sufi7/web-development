const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
  .then(() => {
    console.log("Coneection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", bookSchema);

const Book1 = new Book({
  title: "The Alchemist",
  author: "Pable coelho",
  price: 1200,
});

Book1.save();
