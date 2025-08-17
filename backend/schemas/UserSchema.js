const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    sparse: true,
  },

  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = UserSchema;
