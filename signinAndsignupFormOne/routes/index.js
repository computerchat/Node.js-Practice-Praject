var express = require('express');
var router = express.Router();
const {signin, signup} = require("../controllers/userControler")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  res.render('signin');
});

router.post('/signup', signup);
router.post('/signin',signin);

module.exports = router;
