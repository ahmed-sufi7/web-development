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
        id: "1a",
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id: "2b",
        username: "Ahmedraza",
        content: "You have to work hard",
    },
    {
        id: "3c",
        username: "rahul",
        content: "I got my first internship",
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts})
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs")
});

app.post("/posts", (req,res)=>{
    let {username, content}= req.body;
    posts.push({username,content});
    res.redirect("/posts")
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post})
})

app.listen(port,()=>{
    console.log(`Listening to port: ${port}`)
})