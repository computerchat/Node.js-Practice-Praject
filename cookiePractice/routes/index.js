var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("age",25);
  res.render("index");
});

//For the reading  cookie
router.get('/read',function(req,res){
  console.log(req.cookies);
  res.send("cheack")
})

//For Delete the cookie
router.get('/delete', function(req,res){
  res.clearCookie('age');
  res.send("clear ho gyi cookie");
})

// cookie setup
//res.cookie("name", value);

//cookie reading
//req.cookie.name

//cookie delete
//req.clearcookie("name")

module.exports = router;
