const mongoose = require("mongoose");
const router = require(".");
mongoose.connect("mongodb://127.0.0.1:27017/qutionsMongoose");

const userModal = mongoose.Schema({
  username: String,
  nickName: String,
  discription:String,
  categories: {
    type: Array,
    default: []
  },
  datecreated: {
    type: Date,
    default: Date.now()
  },
});


module.exports = mongoose.model("user", userModal)
