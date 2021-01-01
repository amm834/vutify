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

    <v-form v-model="valid" @submit.prevent="createProject" ref="myForm">
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
         :rules="inputRules"
         ></v-text-field>
        <v-container fluid>
         <v-textarea
          v-model="project.content"
          label="Content"
          prepend-icon="text_formate"
          :rules="inputRules"

          ></v-textarea>
        </v-container>

        <!-- Date Picker Start -->
        <v-container>
         <v-row>
          <v-col
           cols="12"
           >
           <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            max-width="300"
            >
            <template v-slot:activator="{ on, attrs }">
             <v-text-field
              :value="computedDateFormattedMomentjs"
              clearable
              label="Choose Date"
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
              prepend-icon="date_range"
              :rules="inputRules"

              ></v-text-field>
            </template>
            <v-date-picker
             v-model="date"
             @change="menu1 = false"
             :rules="inputRules"

             ></v-date-picker>
           </v-menu>
          </v-col>

         </v-row>
        </v-container>

        <!-- Date Picker End -->
       </v-col>
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
 import moment from 'moment'
 import {
  format,
  parseISO
 } from 'date-fns'

 export default {
  data () {
   return {
    date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
    menu1: false,
    dialog: false,
    project: {
     name: '',
     content: '',
     due: ''
    },
    inputRules: [
     v=> v.length >= 3 || 'Minimum length is 3 charcters!'
    ]
   }
  },
  methods: {
   createProject() {
    if (this.$refs.myForm.validate()) {
     this.dialog = false;
     this.due = this.computedDateFormattedMomentjs;
     console.log(this.project)
    }
   }
  },
  computed: {
   computedDateFormattedMomentjs () {
    return this.date ? moment(this.date).format('dddd, MMMM Do YYYY'): ''
   },
  },
 }
 </script>