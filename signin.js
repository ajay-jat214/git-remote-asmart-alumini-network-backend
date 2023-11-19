const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  isdeleted: {
    type: Boolean,
    default: false,
  },
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, 8);
};

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("user", UserSchema);
module.exports = User;
