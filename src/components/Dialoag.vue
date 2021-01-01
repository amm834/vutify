<template>
 <v-row justify="center" class="my-5">
  <v-btn
   dark
   color="primary"
   @click.stop="dialog = true"
   >
   <v-icon>add</v-icon>
   New Project
  </v-btn>

  <v-dialog
   v-model="dialog"
   max-width="290"
   >
   <v-card>

    <v-form v-model="valid" @submit.prevent="createProject">
     <v-container>
      <v-row>
       <v-col
        cols="12"
        >
        <v-text-field
         v-model="project.name"
         label="Project Name"
         required
         prepend-icon="folder"
         ></v-text-field>
        <v-container fluid>
         <v-textarea
          v-model="project.content"
          label="Content"
          prepend-icon="text_formate"
          ></v-textarea>
        </v-container>        </v-col>
      </v-row>
     </v-container>
     <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
       color="green darken-1"
       text
       type="submit"
       >
       <v-icon left>add</v-icon>
       Create
      </v-btn>
     </v-card-actions>

    </v-form>

   </v-card>
  </v-dialog>
 </v-row>
</template>
<script>
 export default {
  data () {
   return {
    dialog: false,
    project: {
     name: '',
     content: ''
    }
   }
  },
  methods: {
   createProject() {
    this.dialog = false;
    alert(this.project.name)
   }
  }
 }
 </script>