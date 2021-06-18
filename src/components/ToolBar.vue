<template>
  <v-app-bar desne absolute color="transparent" light height="100px">
  <v-layout justify-center>
    <v-container>
      <v-layout>
        <div
          :class="{
              'display-1 font-weight-bold ': $vuetify.breakpoint.smAndUp,
              'subtitle font-weight-bold': $vuetify.breakpoint.smAndDown,
            }"
        >
          Fake App
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items style="font-weight: bolder" class="text-right">
          <v-btn
            v-if="btn1 != null"
            style="font-weight: bolder"
            :x-small="$vuetify.breakpoint.smAndDown"
            @click="btnGo(btn1)"
            text
          >{{ btn1 }}</v-btn
          >
          <v-btn
            v-if="btn2 != null"
            style="font-weight: bolder"
            :x-small="$vuetify.breakpoint.smAndDown"
            text
            @click="btnGo(btn2)"
          >{{ btn2 }}</v-btn
          >
          <v-btn
            v-if="btn3 != null"
            style="font-weight: bolder"
            :x-small="$vuetify.breakpoint.smAndDown"
            text
            @click="btnGo(btn3)"
          >{{ btn3 }}</v-btn
          >
        </v-toolbar-items>
      </v-layout>
    </v-container>
  </v-layout>
  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ToolBar",
    data() {
      return {
        route: this.$router,
        options: {
          duration: 300,
          offset: 0,
          easing: "easeInOutCubic",
        },
      };
    },
    props: {
      btn1: {
        type: String,
        default: function() {
          return null;
        },
      },
      btn2: {
        type: String,
        default: function() {
          return null;
        },
      },
      btn3: {
        type: String,
        default: function() {
          return null;
        },
      },
    },
  computed: mapGetters(["allUser"]),
    methods: {
       btnGo(name) {
        if(name === 'logout' || name === 'Log Out'){
          this.$router.push('/')
        }
        else if(name === "Create Post" || name === "createpost"){
          this.$router.push('/post')
        }
      },
    },
};
</script>

<style scoped>

</style>