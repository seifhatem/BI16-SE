<template>
      <div>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <button type="submit">Login</button>
      <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
      <br>
        <!--Stats cards-->
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
            <stats-card>
              <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
                <i :class="stats.icon"></i>
              </div>
              <div class="numbers" slot="content">
                <p>{{stats.title}}</p>
                {{stats.value}}
              </div>
              <div class="stats" slot="footer">
                <i :class="stats.footerIcon"></i> {{stats.footerText}}
              </div>
            </stats-card>
          </div>
        </div>

        <!--Charts-->
        <div class="row">

          <div class="col-xs-12">

          </div>

          <div class="col-md-6 col-xs-12">

          </div>

          <div class="col-md-6 col-xs-12">

          </div>

        </div>

      </div>
</template>
