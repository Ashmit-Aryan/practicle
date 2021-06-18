<template>
  <div class="container">
    <v-container>
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-card-title>
          <div>{{post.title}}</div>
        </v-card-title>
        <v-card-text>
          <div>{{post.body}}</div>
        </v-card-text>
        <v-card-subtitle>
          <div>{{post.UserId}}</div>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            text
            @click="showcomment(post.id)"
            color="deep-purple accent-4"
          >
            Show Comment
          </v-btn>
        </v-card-actions>
        <v-form
          lazy-validation
        >
          <v-text-field
            v-model="title"
            label="Commit"
            required
          ></v-text-field>

          <v-btn
            color="blue"
            dense
            @click="submit()"
          >
            Submit
          </v-btn>
        </v-form>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from "axios";
export default {
  name: "Post",
  props:{
    post:{
      type: Object,
      default:function() {
        return {}
      }
},
    data(){
      return{
        title:''
      }
    }
},
  computed:{
    ...mapGetters(["allUser","allComment"])
},
  methods:{
    commt: false,
    showcomment(id){
      this.$router.push(`/comment/${id}`)
    },
    async submit(){
      const comment = this.allComment;
      var id = 0;
      for(var i = 0 ; i< comment.length; i++){
        if(comment[i].id < this.allComment[i+1].id){
          id = this.allComment[i+1].id + 1;
        }
      }
      const data = {
        id: id,
        userId: this.allUser.UserId,
        postId: this.post.id,
        body: this.title
      }
      const res = await axios.post('http://localhost:3000/comments', data);
      console.log(res.data)
    }
  }
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>