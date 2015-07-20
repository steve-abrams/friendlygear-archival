var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  joinDate: Date,
  interests: [{interest: String}],
  buyerStatus: String,
  sellerStatus: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;
