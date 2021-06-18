<template>
 <div class="container--fluid">
   <v-container v-for="comm in comment" :key="comm">
     <v-card
       class="mx-auto"
     >
       <v-card-title>
         <div>{{comm.body}}</div>
       </v-card-title>
       <v-card-text>
         <div>{{comm.userId}}</div>
       </v-card-text>
     </v-card>
   </v-container>
 </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: "Comment",
  data(){
    return{
      comment: []
    }
  },
  computed: mapGetters(["allUser"]),
  methods: { ...mapActions(['addComment']) },
  async mounted() {

    if(this.allUser === null || this.allUser === undefined || this.allUser === []){
      this.$router.push('/')
    }
    const res = await axios.get(`http://localhost:3000/comments?postId=${this.$route.params.id}`);
    this.comment = res.data
    this.addNewComment(res.data)
  }
};
</script>

<style scoped>

</style>