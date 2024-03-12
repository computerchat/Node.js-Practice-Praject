var express = require('express');
var router = express.Router();
const {signin, signup} = require("../controllers/userControllers")


/* GET home page. */
router.get('/',validateSchemaForRagister, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup',validateSchemaForRagister, signup); 

router.post('/signin',validateSchemaForRagister,   signin);

module.exports = router;



