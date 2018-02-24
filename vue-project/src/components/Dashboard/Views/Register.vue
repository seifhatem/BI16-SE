<template>
      <div>
          Username *: <input type="username" name="username" /><br></br>
          Password *: <input type="password" name="pwd" /><br></br>
          Surname *: <input type="surname" name="surname" /><br></br>
          Other Names *: <input type="other names" name="names" /><br></br>
          Date of Birth *: <input type="date of birth" name="dob" /><br></br>
          Email *: <input type="email" name="email" /><br></br>
          Telephone *: <input type="telephone" name="tel" /><br></br>
          Address *: <input type="address" name="add" /><br></br>
          Post Code *: <input type="postcode" name="ptc" /><br></br>
        <input type="submit" value="Submit">
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
