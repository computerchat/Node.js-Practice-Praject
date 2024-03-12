var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
const moongoose =require("mongoose");
const plm = require ("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/testingendgameTwo")

const userSchema = mongoose.Schema({
  username:String,
  password:String,
  secret:String
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
