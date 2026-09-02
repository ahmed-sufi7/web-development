const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username: "cats",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkL7GxjonxMaN3VDF2rDeW1td0XFIEJ7Yu3K6F2waeaw&s=10",
        caption: "My Lovely cat",
        like: 10,
        comments: 3
    },
    {
        username: "dogs",
        image: "https://hips.hearstapps.com/hmg-prod/images/c33b2259-8c6b-4308-bc6f-5373d8a6600d.jpeg?crop=0.668xw:1.00xh;0.194xw,0&resize=640:*",
        caption: "My Tuffie",
        like: 15,
        comments: 3
    },
    {
        username: "johndoe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_Mn_GKuocoIJ0DSCldbTeMFy3M3f-WPSxFuL45E16puXEXUlTtEuX0M&s=10&s=10",
        caption: "My Day!",
        like: 104,
        comments: 3
    }
]

app.get("/feed", (req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/feed/new",(req,res)=>{
    res.render("new.ejs");
})

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
})