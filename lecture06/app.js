let fs = require("fs");

function print(err, data){
    if(err){
        console.log("Error!");
    }else{
        console.log(data); 
    }
       
}

function deta(){
    for(let i = 0; i < 10; i++){
        console.log(i);    
    }
}

setTimeout(deta, 1000)
fs.readFile("a.txt", "utf-8", print);
fs.readFile("b.txt", "utf-8", print);
console.log("Done!");








