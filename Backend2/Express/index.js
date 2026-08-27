const express = require("express");
const app = express();
const port = 3000;

app.listen(3000,()=>{
    console.log(`App is listening to port ${port}`);
});


app.get("/", (req, res) => {
    res.send("You contacted to root path");
});
app.get("/apple", (req, res) => {
    res.send("You contacted to apple path");
});
app.get("/banana", (req, res) => {
    res.send("You contacted to banana path");
});
app.get("/*splat", (req, res) => {
    res.send("This path does not exists");
});

app.post("/",(req,res)=>{
    res.send("you sent a post request")
})


// app.use((req,res)=>{
//     console.log('request recieved');
//     res.send("Hello World!");
// })