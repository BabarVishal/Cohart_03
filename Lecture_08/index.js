const express = require("express");

const app = express();
const port = 3000;

app.use((req, res) => {
    res.send("Hello Vishal");
})


app.listen(port, () => {
    console.log(`Server has Stated! ${port}`); 
})