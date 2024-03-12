var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/failed', function(req,res){
  req.flash("age",23);
  req.flash("name","Rohit");
  res.send("Data ban gya hai age name se agar hum chahe to age ki jagah kuchh or name bhi de sakte hai");
});

router.get('/cheakkaro', function(req,res){
  console.log(req.flash("age"), req.flash("name"));
  res.send("Data ban gya backend ke terminal me cheack karo")
})
module.exports = router;
