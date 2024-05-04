const User = require("../model/UserModel");
const { successResponse } = require("../response");

const handleCreateUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.create(userData);
    return successResponse(res, {
      statusCode: 201,
      message: `User was registration successfully`,
      payload: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const handleGetUsers = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 5;

    const allUsers = await User.find().limit(limit);
    return successResponse(res, {
      statusCode: 201,
      message: `Users returned successfully`,
      payload: allUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const handleGetUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    return successResponse(res, {
      statusCode: 201,
      message: `User was registration successfully`,
      payload: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const handleGetUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const userWithEmail = await User.find({ email });
    return successResponse(res, {
      statusCode: 201,
      message: `User was registration successfully`,
      payload: userWithEmail,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  handleCreateUser,
  handleGetUsers,
  handleGetUserById,
  handleGetUserByEmail,
};
