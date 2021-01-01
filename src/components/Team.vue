<template>
 <div class="team">
  <h1 class="headline">Team</h1>
  <v-container class="my-5">
   <v-row>
    <v-col v-for="person in team" :key="person.name" cols="12" md="6">
     <v-card
      elevation="3"
      shaped
      tile
      v-ripple
      >
      <v-row justify="center">
       <v-avatar
        size="100"
        class="mt-4"
        >
        <img src="https://cdn.vuetifyjs.com/images/john.jpg"
        >
       </v-avatar>
      </v-row>

      <v-card-text class="text-center">
       <h1 class="headline">
        {{person.name}}
       </h1>
       <h1 class="caption grey--text">
        {{person.role}}
       </h1>
      </v-card-text>
      <v-card-actions>
       <v-btn text  color="primary" tile>
        <v-icon left>message</v-icon>
        Send Message
       </v-btn>
      </v-card-actions>
     </v-card>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>

<script>
 export default {
  name: 'Team',
  data() {
   return {
    team: [{
     name: 'Aung Myat Moe',
     role: 'Entry Web Enginner'
    },
     {
      name: 'Ka Naung',
      role: 'Entry Web Enginner'
     },
     {
      name: 'Min Kg Kyaw',
      role: 'Entry Web Enginner'
     },
     {
      name: 'Ye Phone Naing',
      role: 'Hacker'
     },
     ]
   }
  }
 }
 </script>