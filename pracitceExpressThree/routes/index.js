var express = require('express');
var router = express.Router();
const userModal = require("./users");

/* GET home page. */
router.get("/", function(req, res){
  res.render("index");  
})

router.get("/create", async function(req, res){
 const createduser = await userModal.create ({
    userName: "Rohit",
    age:23,
    name:"Rohit"
  }); 
  res.send(createduser);
});

//Here we use the find method for all users
router.get("/find", async function(req,res){
  const allusers = await userModal.find();
  res.send(allusers);
})

//findOne is using for only find one people 
// router.get("/find", async function(req,res){
//   const allusers = await userModal.findOne({ name :"Rohit" });
//   res.send(allusers);
// })

// agar koi user nhi milega to null milega for the cheaking you can use console.log(alluser)
// router.get("/find", async function(req,res){
//   const allusers = await userModal.findOne({ name : "Harsh" });
//   res.send(allusers);
// })

// For the Delete
// router.get("/delete",async function(req,res){
//   const deleteUser = await userModal.findOneAndDelete({name : "Rohit"});
//   res.send(deleteUser);
// })

// Now we Don't have data

module.exports = router;
