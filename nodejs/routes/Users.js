var mongoose = require('mongoose');
var userSchema = new mongoose.userSchema({
  username: (type: String , unique: true),
  password : {type : String),
  firstname : String,
  lastname : String
});
//Creating a collection (data base Table)
var User = mongoose.model('myuser', userSchema);
module.exports = User;
