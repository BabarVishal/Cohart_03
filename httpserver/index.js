const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Hello Vishal");
});

app.get("/Login", (req, res) => {
    res.send("I am a Login Page!");
})

app.listen(3000, () => {
    console.log(`server has Started ${3000}`);
})