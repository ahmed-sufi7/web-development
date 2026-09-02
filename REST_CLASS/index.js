const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); //To use the folders views and public
const {v4: uuidv4} = require('uuid'); // we we want to user import we have to use "type": "module" in package.json
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true})); //So that express understands the data. When we send or recieve any data from/to the server using post or get we need to parse the data
app.use(methodOverride('_method'));

app.set("view engine", "ejs"); //setting view engine
app.set("views", path.join(__dirname,"views")); //setting path for views folder

app.use(express.static(path.join(__dirname,"public"))); //setting path for public folder

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "Ahmedraza",
        content: "You have to work hard",
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts")
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post})
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts")
});

app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`Listening to port: ${port}`)
})