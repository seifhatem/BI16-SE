var express = require ('express');
var router = express.Router();
var User = require ('../main/User');

/* GET home page. */
router.get ('/', function (req, res, next){
  res.render ('index', {title: 'Express'});

});
 router.post('/signUp', function(req,res){
   var username = req.body.username;
   var password = req.body.password;
   var fullname= req.body.fullname;
   var dateOfBirth=req.body.fullname;
   var address = req.body.address;
   var email = req.body.email;


   var newuser= new User ();
   newuser.username= username;
   newuser.password= password;
   newuser.fullname= fullname;
   newuser.dateOfBirth= dateOfBirth;
   newuser.address =address;
    newuser.email = email;

   newuser.save(function(err, savedUser){
     if (err){
       console.log(err);
       //error 500 is an internal server error
       return res.status(500).send();
     }
     return res.status(200).send();

   })
 })

 module.exports = router;
