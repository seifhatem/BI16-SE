<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
      <h3 > Welcome dear user </h3>
         <img src="http://www.occamsresearch.com/assets/images/registration_img.png"
         style = "width:150px;height:150px;">
    <h3> Profile information: </h3>
      <label for="uname"><b>Username: </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="text" placeholder="Enter Username" name="uname" required>
   <br></br>
   <label for="psw"><b>Password: </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="password" placeholder="Enter Password" name="psw" required>
    <br></br>
  <span style="font-weight: bold; color : #C0392B  ">Just a few more boxes to fill</span>
        <h3> Personal information: </h3>
   <label for="fname"><b>Full name: </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="text" placeholder="Full name here" name="fname" required>
   <br></br>
   <label for="DOB"><b>Date of birth: </b></label> &nbsp;
   <input type="Date" placeholder="Date of birth" name="DOB" required>
   <br></br>
   <label for="addr"><b>Address: : </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="text" placeholder="Enter Address" name="addr" required>
   <br></br>
   <label for="email"><b>Email-address:</b></label> &nbsp;
   <input type="text" placeholder="Enter Email" name="email" required>
<br></br>
<br></br>
  <button type="submit" class="submitbtn" color: >submit</button>&nbsp; <button type="button" class="cancelbtn">Cancel</button>
  <br></br>

     </div>
      </div>
        </div>
</template>
