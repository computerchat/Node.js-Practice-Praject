var express = require("express");
var router = express.Router();

const userModal = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", async function (req, res) {
  const userData = await userModal.create({
    username: "harshi",
    nickName: "harshiiiiii",
    discription: "Hello Everyone",
    categories: {
      type: Array,
      default: ["fashion", "life", "science" ],
    },
  });
  res.send(userData);
});


//yha tak hamne 3 logo ko ka data create kiya hai harsh, harshita, and harshi
//Ab iske aage find karne karne ki kuchh quistion solve karenge 

//So let's start to solve find quistion

//quistion first How can I perform a case-insenstive search in mongose?


// router.get('/find', async function(req,res){
//   //new RegExp (search, flags)
//   var regex= new RegExp("^Harsh$", "i");
//   var user = await userModal.find({username : regex});
//   res.send(user);
// })

//importent note ^means shuruat aise ho and $ ant aisa ho agar hum ye 
//two thing nhi lagayenge to jo bhi chij harsh contain karti hai sab aa jayega



//Second question How do i find document where an array field contain all set of value

// router.get("/find", async function (req,res){
//   let user = await userModal.find({ username: { $all:["harsh"]}});
//   res.send(user);
// });


//3. How can I search for document with specific date range in Mongoose?

// router.get("/find",async function(req,res){
//   var date1 = new Date ('2024-02-23');
//   var date2 = new Date ('2024-02-29');
//   let user = await userModal.find({datecreated : {$gte: date1, $lte: date2}});
//   res.send(user); 
// })

//4. How can i filter a document based on a specific field's length in mongoose?
 
// router.get("/find", async function(req,res){
//   let user = await userModal.find({categories:{$exists: true}});
//   res.send(user);
// })

//5. How can a filter document based on specific fild's lenth in Mongose?
router.get("/find", async function(req,res){
  let user = await userModal.find({
    $expr: {
      $and: [
        { $gte : [{ $strLenCP: '$nickName'},0]},
        { $lte : [{ $strLenCP: '$nickName'},12]}
      ]
    }
  });
  res.send(user);
})
module.exports = router;
