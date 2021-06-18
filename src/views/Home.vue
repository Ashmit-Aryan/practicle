<template>
  <div class="container--fluid">
    <ToolBar btn1="Log Out" btn2="Create Post" />
    <v-container class="mt-16 pt-9">
      <post v-for="pos in posts" :key="pos" :post="pos"/>
    </v-container>
  </div>

</template>

<script>
import post from "../components/Post";
import {mapGetters} from 'vuex'
import axios from "axios";
import ToolBar from "../components/ToolBar";
import {mapActions} from 'vuex'

export default {
  name: "Home",
  components:{
    ToolBar,
    post
  },
  data(){
    return{
      posts:[]
    }
  },
  computed: mapGetters(["allUser"]),
  methods:{
    ...mapActions(["AddPost"])
  },
  created(){
 if(this.allUser === null || this.allUser === undefined || this.allUser === []|| !this.allUser){
      this.$router.push('/')
    }
  },
  async mounted(){
   
    const res = await axios.get('http://localhost:3000/posts');
    this.posts = res.data
    this.AddPost(res.data);
  }
};
</script>
