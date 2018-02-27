<template>
    <div class="row">
<h1 style="color:green;text-align: left">Welcome to the login page!</h1>
<hr>

      <div class="col-lg-4 col-md-5">
        
        <form action="action_page.php">
          <div class="imgcontainer">
            <img src="data:image/png;base64,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" style="width:85px;height:85px;">

          </div>
<br>
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
              <br>
              <br>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
              <br>
            <button type="submit" onClick = >Login</button>

          </div>

          <div class="container" style="background-color:#f1f1f1">

          </div>
        </form>
      </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      loginBody: 'username = this.username', 'password = this.password'

      errors: []
    }
  },

  // Pushes posts to the server when called.
  login.Post() {
    axios.post(http://localhost:8080/#/admin/login`, {
      body: this.LoginBody
    })
    .then(response => {})
    .catch(e => {
      this.errors.push(e)
    })
    <script/>
