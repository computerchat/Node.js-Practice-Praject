const express = require("express");
const app= express();

let users =require ("./MOCK_DATA .json");
const PORT = 8000;

app.use(express.json());


app.get("/users",function(req,res){
    const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
res.send(html);
})

app.get("/api/users",(req,res) => {
    return res.json(users);
})

app.get("/api/users/:id",function(req,res){
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    return res.json(user);
    // res.send(req.params.id); agar ye karenge to kewal id aayegi
})

// //by using route kyuki teeno ke route ek hai

// app.route("/api/users/:id")
// .post((req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id ===id);
//     return res.json(user);
// })
// .patch((req,res)=>{
    
// })
// .delete((req,res)=>{
//    return res.json({status: "pending"})
// })

// //alag karne per
app.post("/api/users",function(req,res){
    const body =req.body;
    console.log("Body", body);
    return res.json({status: "pending"});
});

// app.patch("/api/users/:id",function(req,res){
//     return res.json({status: "pending"});
// })

// app.delete("/api/users/:id",function(req,res){
//     return res.json({status: "pending"});
// })


app.listen(PORT, () => console.log(`Server is running in Port ${PORT}`));