var express = require('express');
var router = express.Router();
const userModel = require('userModal');
const passport = require('passport');
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.send('Welcome to profile');
});

router.post('/ragister', function (req,res){
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });
})

router.get('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function (req,res){})

router.get('/logout', function(req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

userModel.ragister(userdata, req.body.password)
.then(function(registereduser){
  passport.authenticate("local")(req, res, function(){
    res.redirect('/profile');
  })
})

module.exports = router;
