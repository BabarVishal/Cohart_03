const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Vishal");
})

app.listen(3000, () => {
    console.log("Server Started!");
})