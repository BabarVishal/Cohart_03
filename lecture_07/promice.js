//Callback Hell;

// function Callback(){
//     console.log("Hii");
// }

// setTimeout(function(){
//     console.log("Hii in 1 sec");
//     setTimeout(function(){
//         console.log("Hello in 3 sec");
//     }, 3000);
//     setTimeout(function(){
//         console.log("Hii Thre");
//     }, 5000);
// }, 1000);

const fs = require("fs")

function readfilesync(){
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt", "utf8", (err, deta) => {
          if(err){
            reject("file not found", err);
          }else{
            resolve("file found", deta);
          }
        })
    })
}

let a = readfilesync();
console.log(a);


