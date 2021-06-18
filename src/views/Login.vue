<template>
  <div class="container--fluid">
    <ToolBar />
    <div class="text-center mt-16 pt-10 pl-3 pr-3 ">
      <h1>
        Welcome To Fake App Login
      </h1>
      <v-container class="container--fluid">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-col sm="50" md="25">
            <v-text-field
              label="Email"
              placeholder="xyz@email.com"
              :rules="[rules.required, rules.emailmin, rules.emailregex]"
              outlined
              dense
              v-model="email"
            ></v-text-field>

          </v-col>
          <v-btn
            class="ma-2"
            outlined
            :color="color"
            @click="submit()"
            elevation="10"
          >
            Login
          </v-btn>
        </v-form>
      </v-container>
    </div>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import axios from 'axios';
import {  mapActions,mapGetters } from "vuex";
export default {
  name: "Login",
  components:{
    ToolBar
  },
  data() {
    return {
      email: "",
      valid: false,
      show1: false,
      color: "green",
      rules: {
        required: (value) => !!value || "Required.",
        emailmin: (v) => v.length >= 6 || "Min 6 Characters",
        emailregex: (v) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Invalid Email",
      },
    };
  },
  computed: mapGetters(["allUser"]),
  created(){
    if(this.allUser !== null  || this.allUser !== []|| this.allUser){
      this.$router.push(`/home:${this.allUser.UserId}`);
    }
  },
  methods: {
      ...mapActions(["AddUser"]),
    async submit() {
      if (!this.$refs.form.validate()) {
        this.$refs.form.validate();
      } else {
        const options = {
          method: "GET",
          url: "http://localhost:3000/profile"
        };
        const res = await axios.request(options);

        const data = res.data
        var user;
        for(var i = 0 ; i < data.length ; i++){
         if(data[i].email === this.email ){
           user = data[i]
         }
       }
        this.AddUser(user)
        if(user){
          this.$router.push(`/home/${user.UserId}`)
        }
      }
    },
  },
};
</script>

<style scoped>

</style>