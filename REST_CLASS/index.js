const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); //To use the folders views and public

app.use(express.urlencoded({extended:true})); //So that express understands the data. When we send or recieve any data from/to the server using post or get we need to parse the data

app.set("view engine", "ejs"); //setting view engine
app.set("views", path.join(__dirname,"views")); //setting path for views folder

app.use(express.static(path.join(__dirname,"public"))); //setting path for public folder

let posts = [
    {
        username: "apnacollege",
        content: "I love coding",
    },
    {
        username: "Ahmedraza",
        content: "You have to work hard",
    },
    {
        username: "rahul",
        content: "I got my first internship",
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts})
})

app.listen(port,()=>{
    console.log(`Listening to port: ${port}`)
})