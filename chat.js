const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema2 = new mongoose.Schema({
  fromEmail: {
    type: String,
    default: "",
  },
  toEmail: {
    type: String,
    default: "",
  },
  message: {
    type: Array,
    default: [],
  },
  timeStamp: {
    type: Date,
    default: "2021-01-11T01:16:47+00:00",
  },
});

var Chat = mongoose.model("user2", UserSchema2);
module.exports = Chat;
