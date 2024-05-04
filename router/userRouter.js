const express = require("express");
const {
  handleCreateUser,
  handleGetUserById,
  handleGetUsers,
  handleGetUserByEmail,
  handleGetUserByPhone,
  handleGetUser,
} = require("../controller/userController");


const userRouter = express.Router();

// createing a user route: /api/users
userRouter.post("/", handleCreateUser);

// get all user route: /api/users
userRouter.get("/", handleGetUsers);

// get a single user route: /api/users/:id
userRouter.get("/:id([0-9a-fA-F]{24})", handleGetUserById);

// finding user by email or phone with differnet route 
userRouter.get("/email/:email", handleGetUserByEmail);
userRouter.get("/phone/:phone", handleGetUserByPhone);

// finding user by email or phone with same route
userRouter.get("/:value", handleGetUser); 

module.exports = userRouter;
