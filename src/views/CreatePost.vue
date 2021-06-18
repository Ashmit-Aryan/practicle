<template>
  <div class="container ma-5 pa-5">
    <v-form
      lazy-validation
    >
      <v-text-field
        v-model="title"
        label="Title"
        required
      ></v-text-field>

     <v-textarea v-model="body" :auto-grow=true :autofocus="true">

     </v-textarea>

      <v-btn
        color="blue"
        dense
        @click="submit()"
      >
        Submit
      </v-btn>

    </v-form>

  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex'
export default {
  name: "CreatePost",
  data(){
    return{
      valid: true,
      title:'',
      body: ''
    }
  },
  computed: mapGetters(['allUser','allPost']),
  // mounted(){
  //   if(this.allUser === null || this.allUser === undefined || this.allUser === []){
  //     this.$router.push('/')
  //   }
  // },
  methods:{
    async submit(){
      var maxid = 0;
      for(var i = 0 ; i< 1; i++){
        const data = {
        userId: this.allUser.UserId,
        id: maxid + 4+i+1,
        title: this.title,
        body: this.body
      }
      const res = await axios.post('http://localhost:3000/posts', data);
      console.log(res.data);
      }
     
    }
  }
}
</script>

<style scoped>

</style>