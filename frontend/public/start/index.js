'use strict';


import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';



Vue.use(VueRouter);
Vue.use(VueResource);


const router=new VueRouter({
 routes: [{
  path: "/", component: require("./vue/template/index.vue")
 },

 {
  path: "/registration", component: require("./vue/template/registration.vue")
 }]
});



new Vue({
 el: "#page",
 router: router
});

