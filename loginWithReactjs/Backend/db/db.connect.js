const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDatabaseName", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};

module.exports = dbConnection;
