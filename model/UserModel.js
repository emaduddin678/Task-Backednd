const mongoose = require("mongoose");
 
// Define User schema
const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    require: [true, "User uid is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(v);
      },
      message: "Please provide a valid email address",
    },
  },
  role: {
    type: String,
    require: [true, "User role is required"],
  },
  status: {
    type: String,
    require: [true, "User status is required"],
  },
  name: {
    firstName: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minlength: [2, "First name must be at least 4 characters"],
      maxlength: [31, "First name must be at most 31 characters"],
    },
    lastName: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 4 characters"],
      maxlength: [31, "Last name must be at most 31 characters"],
    },
  },
  phone: {
    type: String,
    required: [true, "User phone is required"],
  },
  occupation: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Birth Date is required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  photoUrl: {
    type: String,
    required: true,
  },
  addresses: [
    {
      isDeleted: {
        type: Boolean,
        default: false,
      },
      address: {
        street: {
          type: String,
          required: [true, "Street is required"],
        },
        city: {
          type: String,
          required: [true, "City is required"],
        },
        prefecture: {
          type: String,
          required: [true, "Prefecture is required"],
        },
        postalCode: {
          type: String,
          required: [true, "Postal Code is required"],
        },
        country: {
          type: String,
          required: [true, "Country is required"],
        },
        buildingName: String,
        roomNumber: String,
        state: String,
        details: String,
      },
    },
  ],
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
