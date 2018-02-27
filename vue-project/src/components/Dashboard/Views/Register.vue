<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
      <h3 > Welcome dear user </h3>
         <img src="http://www.occamsresearch.com/assets/images/registration_img.png"
         style = "width:150px;height:150px;">
    <h3> Profile information: </h3>
      <label for="uname"><b>Username: </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="text" v-model="uname" placeholder="Enter Username"  required>
   <br></br>
   <label for="psw"><b>Password: </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="password" v-model="psw" placeholder="Enter Password" required>
    <br></br>
  <span style="font-weight: bold; color : #C0392B  ">Just a few more boxes to fill</span>
        <h3> Personal information: </h3>
   <label for="fname"><b>Full name: </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="text" v-model ="fname" placeholder="Full name here"  required>
   <br></br>
   <label for="DOB"><b>Date of birth: </b></label> &nbsp;
   <input type="Date" v-model="DOB" placeholder="Date of birth"  required>
   <br></br>
   <label for="addr"><b>Address: : </b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <input type="text" v-model= "addr" placeholder="Enter Address" required>
   <br></br>
   <label for="email"><b>Email-address:</b></label> &nbsp;
   <input type="text" v-model="email" placeholder="Enter Email" required>
<br></br>
<br></br>
  <button type="button" v-model="btn1" class="submitbtn" color: >submit</button>&nbsp; <button type="button" vmodel="btn2" class="cancelbtn">Cancel</button>
  <br></br>

     </div>
      </div>
        </div>
</template>

<script>

</script>
