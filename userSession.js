const mongoose = require("mongoose");

const UserSession = new mongoose.Schema({
  isdeleted: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    default: "",
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

var Session = mongoose.model("Session", UserSession);
module.exports = Session;
