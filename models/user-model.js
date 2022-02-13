const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  googleID: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now,
  },
  thunbnail: {
    type: String,
  },

  //local login
  email: {
    type: String,
  },
  password: {
    type: String,
    maxlength: 1024,
    minlength:8,
  },
});

module.exports = mongoose.model("User", userSchema);
