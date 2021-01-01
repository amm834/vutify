<template>
 <div class="project">
  <h1 class="headline">My Projects</h1>
  <v-container class="mt-4">
   <template>
    <v-expansion-panels focusable>
     <v-expansion-panel
      v-for="project in myProject"
      :key="project.title"
      >
      <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
       {{project.content}}
      </v-expansion-panel-content>
     </v-expansion-panel>
    </v-expansion-panels>
   </template>

  </v-container>
 </div>
</template>

<script type="text/javascript" charset="utf-8">
 export default {
  name: 'Projects',
  data() {
   return {
    projects: [{
     title: 'Design video thumbnails',
     person: 'amm',
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
    computed:{
     myProject(){
      return this.projects.filter(project=>{
       return project.person === 'amm';
      })
     }
  }

 }
 </script>