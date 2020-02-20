// Import mongoose to allow us to easily create mongoDb Schemas
const mongoose = require("mongoose");
// Create a Schema variable is set to the Schema method extended from mongoose.
const Schema = mongoose.Schema;

// Create a new schema with the following entries
const userSchema = new Schema({
  // userName entry that is a String, this is required when creating a user
  userName: { type: String, required: true, unique: true },
  // email entry that is a String
  email: { type: String, required: true },
  password: { type: String, required: true}

});

// Create a mongodb collection with the userSchema, using mongoose
const User = mongoose.model("User", userSchema);

module.exports = User;
