const mongoose = require ('mongoose');
const plm =require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/nodePintrestProject");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
password: {
  type:String
},
posts: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Post'
}],
dp: {
  type: String, //Asuming the profile picture is stored as a file path
},
email: {
  type : String, 
  require: true,
},
fullname: {
  type: String, 
  require: true,
},
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);