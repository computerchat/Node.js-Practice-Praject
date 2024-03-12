const express = require("express");
const app = express();

//view folder ke liye
app.set("view engine", "ejs");

// static folder ke liye 
app.use(express.static('./public'));

// Diffrent page routing karne ke liye
app.get("/", function (req, res){
    res.render("index",{paragraph:"newparagraph"});
});

//Error throw
app.get("/error", function (req, res, next){
   throw error("Something went wrong");
});

app.get("/contact", function (req, res){
    res.render("contact");
});

//Error throw
 app.use (function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

//port define kiya hai
app.listen(5000);