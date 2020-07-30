const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// S7 Add train station schema
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// S8: this will be exported to be used for the routes
const Users = mongoose.model("Users", userSchema);

// S9: here we're exporting and continue onto the routes
module.exports = Users;
