const express = require('express');
const dbConnection = require('./db/db.connect');


const app = express();

dbConnection();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
