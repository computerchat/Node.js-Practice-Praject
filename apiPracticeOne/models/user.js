const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform other operations here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const UserSchema = mongoose.Schema({

    username : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true
    }

}, {timestamps : true});

module.exports = mongoose.model("user", UserSchema);