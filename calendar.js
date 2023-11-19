const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const CalendarSchema = new mongoose.Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  title: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "green",
  },
  email: {
    type: String,
    default: "",
  },
});

CalendarSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, 8);
};

CalendarSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

var Calendar = mongoose.model("Calendar", CalendarSchema);
module.exports = Calendar;
