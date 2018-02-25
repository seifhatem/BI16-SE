var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
  username : {type: String, unique: true},

  password: {type: String},
  fullname: String,
  dateOfBirth: Date,
  address: String,
  email: String;
});


var User = mongoose.model ('myuser', userSchema);
module.exports= User;
