const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AddAlumini = new mongoose.Schema({
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
  userName: {
    type: String,
    default: "",
  },
  field: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    default: "",
  },
  placementYear: {
    type: Number,
    default: "",
  },
  phone: {
    type: Number,
    default: "",
  },
  token: {
    type: String,
    default: "",
  }
});

AddAlumini.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, 8);
};

AddAlumini.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

var User2 = mongoose.model("User", AddAlumini);
module.exports = User2;
