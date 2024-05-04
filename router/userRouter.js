const express = require("express");
const {
  handleCreateUser,
  handleGetUserById,
  handleGetUsers,
  handleGetUserByEmail,
} = require("../controller/userController");


const userRouter = express.Router();

// createing a user route: /api/users
userRouter.post("/", handleCreateUser);

// get all user route: /api/users
userRouter.get("/", handleGetUsers);

// get a single user route: /api/users/:id
userRouter.get("/:id([0-9a-fA-F]{24})", handleGetUserById);
userRouter.get("/:email", handleGetUserByEmail);

module.exports = userRouter;
