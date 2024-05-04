const Joi = require("joi");

const userJoiSchema = Joi.object({
  uid: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  status: Joi.string().required(),
  name: Joi.object({
    firstName: Joi.string().min(4).max(31).required(),
    lastName: Joi.string().min(4).max(31).required(),
  }).required(),
  phone: Joi.string().required(),
  occupation: Joi.string(),
  dateOfBirth: Joi.date().required(),
  gender: Joi.string().valid("Male", "Female", "Other"),
  photoUrl: Joi.string().required(),
  addresses: Joi.array().items( 
    Joi.object({
      isDeleted: Joi.boolean().default(false),
      address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        prefecture: Joi.string().required(),
        postalCode: Joi.string().required(),
        country: Joi.string().required(),
        buildingName: Joi.string(),
        roomNumber: Joi.string(),
        state: Joi.string(),
        details: Joi.string(),
      }).required(),
    })
  ),
});

module.exports = userJoiSchema;
