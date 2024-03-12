const express = require('express');
const path = require('path');
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

//Convert Data into json format
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//use Ejs as the view engine 
// app.set('view engine', 'ejs');
app.set('view engine', 'ejs');

//static file
app.set(express.static("public"));

app.get("/", (req,res)=>{
    res.render("login");
});

app.get("/signup", (req,res)=>{
    res.render("signup");
});

app.post("/signup", async function(req,res){
    const data={
        name: req.body.username,
        password: req.body.password
    }

    //cheak if the user already exists in the database
    const existingUser = await collection.findOne({name : data.name});
    if(existingUser){
        res.send("User already exists, Please use different username");
    }
    else{
        //for the hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password=hashedPassword; //Replace the hash password the original password
        const userdata =await collection.insertMany(data);
        console .log(userdata);
    }
    
})

//Login user
app.post("/login", async(req,res)=>{
try{
    const check = await collection.findOne({name: req.body.username});
    if(!check){
        res.send("user cannot find")
    }

    //compare the hashpassword from the database with the plan test
    const ispasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if(ispasswordMatch){
        res.render("Home");
    }else{
        res.render("Wrong Password")
    }
}catch{
    res.send("wrong Details");
}
});
const port = 5000;
app.listen(port, ()=>{
    console.log(`Server running on Port: ${port}`)
})