var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postmodel = require('./posts');
const users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req,res){
  let createdUsers = await userModel.create({
    username: "rohit",
    password: "rohit",
    posts: [],
    email: "rohit@gmail.com",
    fullName: "rohit",
});
res.send(createdUsers);
});

router.get('/createpost', async function (req,res){
  let createdPost = await postmodel.create({
  postText: "Hello Kaise ho saare",
  user: "65e5c59c4376b1003cf6e9d9"
});
let user =await userModel.findOne({_id:"65e5c59c4376b1003cf6e9d9"});
user.posts.push(createdPost._id);
await user.save();
res.send("Ok ,done");
})

router.get('/find', async function(req,res){
 let users=await userModel.findOne({_id:'65e5c59c4376b1003cf6e9d9'})
 .populate("posts");
  res.send(users);
})
module.exports = router;
