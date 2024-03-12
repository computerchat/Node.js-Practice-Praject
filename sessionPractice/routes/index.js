var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  req.session.ban = true;
  res.render("index");
});

router.get('/cheakban', function(req,res){
  if (req.session.ban = true)
  res.send("You are ban bro , Now you did'n entered this side");
else{
  res.send("ban removed");
}
})

router.get('/removeban', function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("ban removed");
  })
})

module.exports = router;
