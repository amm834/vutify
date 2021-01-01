<template>
 <nav>
  <v-toolbar
   color="success"
   dense
   >
   <v-app-bar-nav-icon dark
    @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
   <v-toolbar-title class="white--text text-uppercase">Todo App</v-toolbar-title>
   <v-spacer></v-spacer>

   <!-- Drop Down -->
   <template>
    <div class="text-center">
     <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
       <v-btn
        dark
        v-bind="attrs"
        text
        v-on="on"
        >
        <v-icon>more_vert</v-icon>
       </v-btn>
      </template>
      <v-list
       >
       <v-list-item
        v-for="list in lists"
        :key="list.text"
       :to="list.route"
       link
       color="success"
        >
        <v-list-item-title
         >{{ list.text }}</v-list-item-title>
       </v-list-item>
      </v-list>
     </v-menu>
    </div>
   </template>
   <!-- Drop Down -->

   <v-btn icon>
    <v-icon color="dark">mdi-export</v-icon>
   </v-btn>
  </v-toolbar>
  <v-navigation-drawer
   v-model="drawer"
   absolute
   tempoary
   dark
   color="green"
:style="{zIndex:'100'}" 
>
   <dialoag></dialoag>
   <v-list dense>
    <v-subheader>Menu</v-subheader>
    <v-list-item-group
     
     >
     <v-list-item
      v-for="list in lists"
      :key="list.text"
      :to="list.route"
      link
      >

      <v-list-item-icon>
       <v-icon v-text="list.icon">
       </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
       <v-list-item-title v-text="list.text"></v-list-item-title>
      </v-list-item-content>
     </v-list-item>
    </v-list-item-group>
   </v-list>
  </v-navigation-drawer>
 </nav>
</template>
<script type="text/javascript" charset="utf-8">
import Dialoag from './Dialoag'
 export default {
  name: 'NavBar',
  components:{
   Dialoag
  },
  data() {
   return {
    drawer: false,
    lists: [{
     icon: 'dashboard',
     text: 'Dashboard',
     route: '/'
    },
     {
      icon: 'folder',
      text: 'My Projects',
      route: '/projects'
     },
     {
      icon: 'person',
      text: 'Team',
      route: '/team'
     }]
   }
  }
 }
 </script>