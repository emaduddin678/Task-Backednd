const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./config/connectDb");
const User = require("./model/UserModel");
const { successResponse } = require("./response");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json());

app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello! From MERN stack Server!");
});

// Define POST endpoint to create a user
app.use("/api/users", userRouter);

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDatabase();
});
