import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Comment from "../views/Comment";
import CreatePost from "../views/CreatePost";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name:'Login',
    component: Login
  },
  {
    path: '/home/:id',
    name:'Home',
    component: Home
  },
  {
    path: '/comment/:id',
    name:"Comment",
    component: Comment
  },
  {
    path: '/post',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '*',
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
