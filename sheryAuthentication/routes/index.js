var express = require('express');
var router = express.Router();
const userModel = require ("./users");
const passport = require('passport');   
const localStrategy = require("passport-local").Strategy;

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profile', isLoggedIn, function(req,res){
  res.send('Welcome to profile');
});

//ragister route
router.post('./ragister', function(req,res){
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.ragister(userData, req.body.passport)
  .then(function(ragistereduser){
    passport.authenticate("local")(req, res, function(){
      res.redirect('/profile');
    })
  })
})


//Code for login
router.post("/login", passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect:"/"
}), function (req,res){})

app.get('/logout', function(req,res,next){
  req.logout(function(err){
    if(err){ return next (err); }
    res.redirect('/');
  });
});

function isLoggedIn(req,res,next){
  if (req.isAuthenticated()){
    return next ();
  }
  res.redirect("/");
}

module.exports = router;
