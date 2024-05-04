const mongoose = require("mongoose");
require("dotenv").config();
const mongodbURL = process.env.MONGO_URL;


const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log("info", "Server is Connected with database");

    mongoose.connection.on("error", (error) => {
      console.log("error", "DB Connection error");
    });
  } catch (error) {
    console.log("error", "Could not connect to DB", error.toString());
  }
};

module.exports = connectDatabase;
