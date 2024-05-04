const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const connectDatabase = require("./config/connectDb");
const User = require("./model/UserModel");
const { successResponse } = require("./response");
const userRouter = require("./router/userRouter");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const mongodbURL = process.env.MONGO_URL;

const PORT = process.env.SERVER_PORT || 5000;
const connectDatabase = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("info", "Server is Connected with database");

    mongoose.connection.on("error", (error) => {
      console.log("error", "DB Connection error");
    });
  } catch (error) {
    console.log("error", "Could not connect to DB", error.toString());
  }
};
connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello! From MERN stack Server!");
});

// Define POST endpoint to create a user
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  connectDatabase();
});
