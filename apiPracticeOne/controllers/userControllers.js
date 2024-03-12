const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";


const signup = async(req, res) =>{


//Existing User cheak
//Hashed Password
//User Creation
//Token Generate
function isValidEmail(email) {
    return email.includes('@');
}
const {username, email, password}= req.body;
if (!username ){
    return res.status(404).json("Please Enter valid username");
}
if(!email){
    return res.status(404).json("Please Enter valid email")
}
if(!password){
    return res.status(404).json("Please enter valid password")
}
if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
}

if(password.length<6){
    return res.status(400).json("Password must have contain 6 charcter")
}

try {
    const existingUser = await userModel.findOne({email:email});
    if(existingUser){
        return res.status(400).json("user is already exists")
    }
    const hashedPassword = await bcrypt.hash(password,10);

    const result = await userModel.create({
        email: email,
        password:hashedPassword,
        username:username
    });

    const token = jwt.sign({email: result.email, id : result._id},SECRET_KEY);
    res.status(201).json({user: result, token:token});
}catch(error){
console.log(error);
res.status(500).json({message: "Something went Wrong"});
}

}

const signin = async(req, res) =>{
const {username, email, password} = req.body;

if (!username ){
    return res.status(404).json("Please Enter valid username");
}
if(!email){
    return res.status(404).json("Please Enter valid email")
}
if(!password){
    return res.status(404).json("Please enter valid password")
}
try {
    const existingUser =await userModel.findOne({email: email});
    if(!existingUser){
        return res.status("404").json("user not found");
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if(!matchPassword) {
        return res.status("404").json({message: "Invalid credentials"});
    }

    const token = jwt.sign({email: email.existingUser, id:existingUser.id},SECRET_KEY);
    res.status(201).json({user: existingUser, token: token});
}catch(error){
    console.log(error);
    res.status(500).json({message: "Something went wrong"})
}
}

module.exports = { signup, signin };