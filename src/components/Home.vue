<template>
 <div class="home">
  <v-container>
   <h1 class="headline grey--text">Home</h1>
   <v-row class="my-3"
    justify="start"
    >

      <v-btn text tile @click="sortBy('project')"
      >
       <v-icon >
        folder
       </v-icon>
       <h1 class="caption">Order By Caption</h1>
      </v-btn>
    <v-btn text tile
     @click="sortBy('person')"
     >
     <v-icon>
      person
     </v-icon>
     <h1 class="caption">Order By Person</h1>
    </v-btn>

   </v-row>
   <v-card class="my-5">
    <v-row wrap v-for="project in projects" :key="project.text" :class="`project ${project.status}`">
     <v-col md="6">
      <div class="grey--text caption">
       Project
      </div>
      <div class="mt-4">
       {{project.title}}
      </div>
     </v-col>
     <v-col md="2">
      <div class="grey--text caption">
       Person
      </div>
      <div>
       {{project.person}}
      </div>
     </v-col>
     <v-col md="2">
      <div class="grey--text caption">
       Due to
      </div>
      <div>
       {{project.due}}
      </div>
     </v-col>
     <v-col md="2" cols="12">
      <div class="grey--text caption">
       Status
      </div>
      <div>
       {{project.status}}
      </div>
     </v-col>
    </v-row>
   </v-card>

  </v-container>


 </div>

</template>

<style>
 .project.complete {
  border-left: 4px solid #4ad2f0;
 }
 .project.ongoing {
  border-left: 4px solid orange;
 }
 .project.overdue {
  border-left: 4px solid tomato;
 }
</style>
<script type="text/javascript" charset="utf-8">
 export default {
  name: 'Home',
  data() {
   return {
    projects: [{
     title: 'Design video thumbnails',
     person: 'Ryu',
     due: '20th Dec 2018',
     status: 'complete',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
    },
     {
      title: 'Design a new website',
      person: 'The Net Ninja',
      due: '1st Jan 2019',
      status: 'ongoing',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
     },
     {
      title: 'Code up the homepage',
      person: 'Chun Li',
      due: '10th Jan 2019',
      status: 'complete',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
     },
     {
      title: 'Create a community forum',
      person: 'Gouken',
      due: '20th Oct 2018',
      status: 'overdue',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
     },
    ]
   }
  },
  methods: {
   sortBy(prop) {
    this.projects.sort((x, y)=>x[prop] < y[prop] ? -1: 1);
   }
  }
 }
 </script>