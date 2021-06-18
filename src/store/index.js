import Vue from "vue";
import Vuex from "vuex";
import User from '../module/User'
import Post from "../module/Post";
import Comment from '../module/Comment'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    Post,
    Comment,
  }
});
