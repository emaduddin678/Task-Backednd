const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./config/connectDb");
const User = require("./model/UserModel");
const { successResponse } = require("./response");
const userRouter = require("./router/userRouter");


require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
connectDatabase();

const PORT = process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello! From MERN stack Server!");
});

// Define POST endpoint to create a user
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
