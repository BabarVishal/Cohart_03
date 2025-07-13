const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 30){
        next();
    }else{
        res.json({
            mes:"sorry you are not in age!"
        })
    }
}

// app.use(function(req, res, next){
//     const reqperSecond = req.query.reqPerSecond;
//     if(reqperSecond >= 5){
//         res.json({
//             mes:"You have send more req in second!"
//         })
//     }else{
//         next();
//     }
// })

app.use(isOldEnoughMiddleware); // for all the routs in code

app.get("/ride", isOldEnoughMiddleware, (req, res) => {
    res.json({
        message:"you have succesfully rides the ride 1"
    })
})

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
    res.json({
        message:"you have succesfully rides the ride 2"
    })
})

app.listen(3000, () => {
    console.log("Server Started");  
})