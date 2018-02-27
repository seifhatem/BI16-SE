<template>
  <div>
  <h1>About Us</h1>
  <p>Bi Sixteen team is a Gucian team that include third year students
  faculty of Business Informatics who work hardly to make a good website like
  e-bay website.</p>
  <br>
    <!--Self-Cards-->
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="person in persons">
        <div class="thumbnail">
           <b-img v-bind:src="person.image" center fluid-grow alt="image"></b-img>
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
            name: 'Mohamed Magdy',
            about: 'A third year BI student who seeks for finishing the project.',
            image: './static/img/people/mousa.jpg'
          },
          {
            name: 'Nadine Khoury',
            about: 'I am a BI student, currently working on the SE project and looking forward for the output',
            image: './static/img/people/Nadine.jpg'
          },
          {
            name: 'Youssef Ramoud',
            about: '"I am a Business Informatics student who is passionate about learning web design and loves food"',
            image: './static/img/people/YoussefRamoud.jpg'
          },
          {
            name: 'Karen Basta',
            about: 'Just a regular BI student who is so tired managing between Management and MET Faculties!',
            image: './static/img/people/karen.jpeg'

          },
          {
            name: 'Omar Walid',
            about: '"I am a business informatics student who is intrested in learning new techs  "',
            image: './static/img/people/OmarWalid.jpg'
          },
          {
            name: 'Ayten Hesham',
            about: '"I am a BI student in my third year, i play the piano and i love cats"',
            image: './static/img/people/AytenHesham.jpg'
          },
          {
            name: 'Youssef Khaled',
            about: 'I am a business informatics students in semester 6, and I am highly motivated to enhance my skills. ',
            image: './static/img/people/YoussefKhaled.jpg'
          },

          {
            name: 'Ali Shams',
            about: '"I am a BI student who is seeking to be a millionaire "',
            image: './static/img/people/Shams.jpg'
          },
          {
            name: 'Aly Hussein',
            about: '"I am a business informatics student with a passion for travelling "',
            image: './static/img/people/alyhussein.jpg'
          },
          {
            name: 'Rania Ahmed',
            about: '"I am a BI student who loves coding and travelling "',
            image: './static/img/people/rania.jpg'
          },
          {
            name: 'maryam zain ',
            about: '"I am a BI student who loves life  "',
            image: './static/img/people/maryam.jpg'
          },
          {
          name: 'Dana Alaa',
          about: '"I am a BI student who loves food"',
          image: './static/img/people/DSCN2440.jpg'
          },
          {
            name: 'Zeina Nosseir',
            about: '" I am  BI student who loves sports"',
            image: './static/img/people/ZeinaNosseir.jpg'
          }
        ]
      }
    }
  }

</script>
