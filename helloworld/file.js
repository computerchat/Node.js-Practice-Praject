const fs = require ("fs");
const os = require("os");

// sync
// fs.writeFileSync("./test.txt","Hello world,This is sync");

//async
// fs.writeFile("./test.txt","Hello world,This is async")
// //ye tarika galat hai kyuki async hamesha callback leta hai jo ki error ke roop me niche diya hai
// //async
// fs.writeFile("./test.txt","Hello world,This is async", (err)=>{});

// for reading the file
// let text=fs.readFileSync("./test.txt", "utf-8");
// console.log(text);

//read file for async
//  fs.readFile("./test.txt","utf-8",(err,test)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(test);
//     }
// })

// file ke niche likhne ke liye
const file = fs.appendFileSync("./test.txt"," I am appending this text")

//we have multiple type of property in file system like delete you can see fs. age ki property dikha dega

console.log(os.cpus().length);