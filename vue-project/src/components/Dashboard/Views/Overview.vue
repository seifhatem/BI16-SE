<template>
  <div>
    <!--Self-Cards-->
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="person in persons">
          <div class="thumbnail">
            <b-img v-bind:src="person.image" center fluid-grow alt="image" height=500 width=500></b-img>
            <div class="caption">
              <h3>{{person.name}}</h3>
              <p>{{person.about}}</p>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
  export default {
    /**
     * Each tutorial member's data is saved here
     */
    data () {
      return {
        persons: [
          {
            name: 'Hazem Nabil',
            about: '"I\'ve been appointed scrum master of the project. How hard can it be?" (famous last words)',
            image: './static/img/people/example.jpg'
          },
          {
            name: 'Nadine Khoury',
            about: 'I am a BI student, currently working on the SE project and looking forward for the output',
            image: './static/img/people/Nadine.jpg'
          },
          {
            name: 'Aly Hussein',
            about: '"I am a business informatics student with a passion for travelling "',
            image: './static/img/people/alyhussein.jpg'
          },
          {
            name: 'Omar Walid',
            about: '"I am a business informatics student who is intrested in learning new techs  "',
            image: './static/img/people/OmarWalid.jpg'
          }
        ]
      }
    }
  }

</script>
<style>

</style>
