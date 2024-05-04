const User = require("../model/UserModel");
const userJoiSchema = require("../model/joiUserModel");
const { successResponse, errorResponse } = require("../response");
const Joi = require("joi");

const handleCreateUser = async (req, res) => {
  try {
    const userData = req.body;
    const validateUserData = userJoiSchema.validate(userData, {
      abortEarly: false,
      errors: {
        wrap: { label: "" },
      },
    });
    if (validateUserData.error) {
      const errorList = validateUserData.error.details.map((err) => {
        errObj = { path: err.path, message: err.message };
        return errObj;
      });
      return errorResponse(res, {
        statusCode: 422,
        message: errorList,
      });
    }

    const user = await User.create(userData);

    return successResponse(res, {
      statusCode: 201,
      message: `User was registration successfully`,
      payload: user,
    });
  } catch (error) {
    errorResponse(res, {
      statusCode: 422,
      message: error.errmsg,
    });
  }
};

const handleGetUsers = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 5;

    const allUsers = await User.find().limit(limit);
    return successResponse(res, {
      statusCode: 201,
      message: `You got all users successfully!!`,
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
      message: `User found successful!!`,
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
    console.log(email)
    const userWithEmail = await User.find({ email });
    return successResponse(res, {
      statusCode: 201,
      message: `Your data`,
      payload: userWithEmail,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const handleGetUserByPhone = async (req, res) => {
  try {
    const phone = req.params.phone;
    console.log("phone", phone)
    const userWithPHone = await User.find({ phone });
    return successResponse(res, {
      statusCode: 201,
      message: `Finding user successful`,
      payload: userWithPHone,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}; 

const handleGetUser = async (req, res) => {
  try {
    const value = req.params.value;
    let user;

    if (value.includes("@")) {
      // If the value contains '@', treat it as an email
      user = await User.find({ email: value });
    } else {
      // Otherwise, treat it as a phone number
      user = await User.find({ phone: value });
    }

    return successResponse(res, {
      statusCode: 200,
      message: `User found successfully`,
      payload: user,
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
  handleGetUserByPhone,
  handleGetUser,
};
