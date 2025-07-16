const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// const serverReq = 0;

// function reqIncrese(req,res, next){
//    serverReq = serverReq + 1;
//    console.log("reqIncrese" + serverReq);
//    next();
// } 

// function realsum(req, res){
//      const a = parseInt(req.query.a);
//      const b = parseInt(req.query.b);
 
//      res.json({
//         ans: a + b,  
//      }) 
// }

// app.get("/sum", reqIncrese, realsum);

app.get("/sum", (req, res) => {
          const a = parseInt(req.query.a);
          const b = parseInt(req.query.b);

          res.json({
            ans: a + b,
          })
})



app.listen(3000, () => {
    console.log("Server Sterted");
})