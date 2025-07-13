const fs = require("fs");

function deta(fileName){
    fs.readFile(fileName, "utf8", (err, deta) => {
            let count = 0;
        for(let i = 0; i < deta.length; i++){
            if(deta[i] === " "){
                count++;
            }
        }
        console.log(count);
    })
}

deta("a.txt");

