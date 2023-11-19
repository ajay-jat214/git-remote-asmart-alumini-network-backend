const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const imageUpload = new mongoose.Schema({
  image: {
    type: String,
    default: "",
  },
  fileId:{
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique:true,
    default: "",
  },
});

var Image = mongoose.model("Image", imageUpload);
module.exports = Image;
