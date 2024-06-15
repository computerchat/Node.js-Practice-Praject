var express = require('express');
var router = express.Router();
const {signin, signup} = require("../controllers/userControllers")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', signup); 

router.post('/signin',   signin);

module.exports = router;



