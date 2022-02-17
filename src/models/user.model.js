const mongoose = require("mongoose");

const userSchema = (fieldsArr, enableAndRestrict) => {
  let obj = {};
  fieldsArr.forEach((field) => {
    obj[field] = {
      type: String,
      required: true,
    };
  });
  return new mongoose.Schema(obj, enableAndRestrict);
};

module.exports = (fieldsArray, enableAndRestrict) => {
  return mongoose.model("user", userSchema(fieldsArray, enableAndRestrict));
};
